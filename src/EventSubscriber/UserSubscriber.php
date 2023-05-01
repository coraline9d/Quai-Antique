<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Reservation;
use App\Entity\User;

class UserSubscriber implements EventSubscriberInterface
{
    public function __construct(private ManagerRegistry $managerRegistry, private User $user)
    {
        $this->managerRegistry = $managerRegistry;
        $this->user = $user;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            FormEvents::PRE_SET_DATA => 'OnPreSetData',
        ];
    }

    public function OnPreSetData(FormEvent $event)
    {
        $reservation = $event->getData();
        if ($this->user) {
            $reservations = $this->managerRegistry->getRepository(Reservation::class)->findBy(
                ['user' => $this->user],
                ['date' => 'ASC']
            );
            $reservation->setFirstName($this->user->getFirstName())
                ->setLastName($this->user->getLastName());
            if (!empty($reservations)) {
                $reservations = array_reverse($reservations);
                $lastReservation = null;
                foreach ($reservations as $r) {
                    if (!$lastReservation || $lastReservation->getDate() < $r->getDate()) {
                        $lastReservation = $r;
                    }
                }
                $reservation
                    ->setNumberOfGuest($lastReservation->getNumberOfGuest())
                    ->setFirstName($lastReservation->getFirstName())
                    ->setLastName($lastReservation->getLastName())
                    ->setAllergy($lastReservation->getAllergy());
            }
            $reservation->setUser($this->user);
        }
    }
}
