<?php

namespace App\EventSubscriber;

use Symfony\Component\Form\FormEvent;
use App\Repository\ScheduleRepository;
use Symfony\Component\Form\FormEvents;
use App\Repository\ReservationRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class DateSubscriber implements EventSubscriberInterface
{
    public function __construct(private ScheduleRepository $scheduleRepository, private ReservationRepository $reservationRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
        $this->reservationRepository = $reservationRepository;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            FormEvents::PRE_SUBMIT => 'onPreSubmit',
        ];
    }

    public function onPreSubmit(FormEvent $event)
    {
        $form = $event->getForm();
        $data = $event->getData();
        $dateString = $data['date'];
        $numberOfGuests = $data['number_of_guest'];

        // Call the calculateAvailableHours function with the retrieved data
        $availableHours = $this->calculateAvailableHours($dateString, $numberOfGuests);

        $form->add('hour', ChoiceType::class, [
            'label' => 'Heure de la réservation :',
            'attr' => ['id' => 'hour'],
            'choices' => array_combine($availableHours, $availableHours),
            'placeholder' => 'Choisir une heure',
            'constraints' => [
                new NotBlank([
                    'message' => 'Veuillez renseigner une heure pour votre repas s\'il vous plait'
                ])
            ]
        ]);
    }

    public function calculateAvailableHours($dateString, $numberOfGuests)
    {
        // Get the day of the week for the selected date
        $date = \DateTime::createFromFormat('Y-m-d', $dateString);
        $dayOfWeek = $date->format('l');

        $daysOfWeek = [
            'Monday' => 'Lundi',
            'Tuesday' => 'Mardi',
            'Wednesday' => 'Mercredi',
            'Thursday' => 'Jeudi',
            'Friday' => 'Vendredi',
            'Saturday' => 'Samedi',
            'Sunday' => 'Dimanche'
        ];

        $dayOfWeek = $daysOfWeek[$dayOfWeek];

        // Find the times for the selected day of the week
        $daySchedule = $this->scheduleRepository->findOneBy(['day' => $dayOfWeek]);

        // If times for the selected day are found, update the opening, closing and lunch break times
        if ($daySchedule) {
            $openingHour = $daySchedule->getOpeningHour();
            $closingHour = $daySchedule->getClosingHour();
            $beginningBreakHour = $daySchedule->getBeginningBreakHour();
            $endingBreakHour = $daySchedule->getEndingBreakHour();
        }

        // Retrieve restaurant capacity (number of people)
        $capacity = $daySchedule->getCapacity();

        // Create an array to store available hours
        $availableHours = [];
        $lunch = [];
        $dinner = [];

        // Retrieve the total number of people booked for lunch
        $lunchGuests = $this->reservationRepository->getNumberOfGuestsForPeriod($dateString, $openingHour, $beginningBreakHour);

        // If the total number of people booked for lunch plus the number of people for the new reservation is less than or equal to the capacity of the restaurant, add the lunch hours to the table of available times
        if (($lunchGuests + $numberOfGuests <= $capacity)) {
            for ($i = $openingHour; $i < $beginningBreakHour; $i++) {
                // Format the time as a string
                $hour = sprintf('%02d', $i);
                if ($i != $beginningBreakHour - 1) {
                    $lunch[] = $hour . ':00';
                    $lunch[] = $hour . ':15';
                    $lunch[] = $hour . ':30';
                    $lunch[] = $hour . ':45';
                } else {
                    $lunch[] = $hour . ':00';
                }
            }
            $availableHours = array_merge($availableHours, $lunch);
        };

        // Retrieve the total number of people booked for the evening
        $dinnerGuests = $this->reservationRepository->getNumberOfGuestsForPeriod($dateString, $endingBreakHour, $closingHour);
        if (($dinnerGuests + $numberOfGuests <= $capacity)) {
            for ($i = $endingBreakHour; $i < $closingHour; $i++) {
                // Format the time as a string
                $hour = sprintf('%02d', $i);
                if ($i != $closingHour - 1) {
                    $dinner[] = $hour . ':00';
                    $dinner[] = $hour . ':15';
                    $dinner[] = $hour . ':30';
                    $dinner[] = $hour . ':45';
                } else {
                    $dinner[] = $hour . ':00';
                }
            }
            $availableHours = array_merge($availableHours, $dinner);
        }

        return $availableHours;
    }
};
