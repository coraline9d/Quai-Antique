<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class VerifSubscriber implements EventSubscriberInterface
{
    public function __construct(private SessionInterface $session)
    {
        $this->session = $session;
    }

    public static function getSubscribedEvents()
    {
        return [
            FormEvents::PRE_SUBMIT => 'onPreSubmit',
        ];
    }

    public function onPreSubmit(FormEvent $event)
    {
        $data = $event->getData();
        $form = $event->getForm();

        // Vérification si les champs numberOfGuests et date sont vides
        if (empty($data['numberOfGuests']) || empty($data['date'])) {
            // Ajout d'un message flash d'erreur
            $session->getFlashBag()->add('error', 'Veuillez remplir tous les champs pour que votre réservation puisse être prise en compte s\'il vous plait');
        }
    }
}
