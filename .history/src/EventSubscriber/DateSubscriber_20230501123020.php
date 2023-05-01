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

        // Trouvez les horaires pour le jour de la semaine sélectionné
        $daySchedule = $this->scheduleRepository->findOneBy(['day' => $dayOfWeek]);

        // Trouvez les horaires pour le nombre de convive sélectionné
        $schedule = $this->scheduleRepository->findOneBy([]);

        // Si les horaires pour le jour sélectionné sont trouvés, mettez à jour les heures d'ouverture, de fermeture et de pause déjeuner
        if ($daySchedule) {
            $openingHour = $daySchedule->getOpeningHour();
            $closingHour = $daySchedule->getClosingHour();
            $beginningBreakHour = $daySchedule->getBeginningBreakHour();
            $endingBreakHour = $daySchedule->getEndingBreakHour();
        }
        // Si les horaires pour le jour sélectionné ne sont pas trouvés, utilisez les horaires par défaut
        else {
            $openingHour = $schedule->getOpeningHour();
            $closingHour = $schedule->getClosingHour();
            $beginningBreakHour = $schedule->getBeginningBreakHour();
            $endingBreakHour = $schedule->getEndingBreakHour();
        }

        // Récupérez la capacité du restaurant (nombre de personnes)
        $capacity = $schedule->getCapacity();

        // Créez un tableau pour stocker les heures disponibles
        $availableHours = [];
        $lunch = [];
        $dinner = [];

        // Récupérez le nombre total de personnes réservées pour le midi
        $lunchGuests = $this->reservationRepository->getNumberOfGuestsForPeriod($dateString, $openingHour, $beginningBreakHour);

        // Si le nombre total de personnes réservées pour le midi plus le nombre de personnes pour la nouvelle réservation est inférieur ou égal à la capacité du restaurant, ajoutez les heures du midi au tableau des heures disponibles
        if (($lunchGuests + $numberOfGuests <= $capacity)) {
            for ($i = $openingHour; $i < ($beginningBreakHour - 1); $i++) {
                // Formatez l'heure en chaîne de caractères
                $hour = sprintf('%02d', $i);
                $lunch[] = $hour . ':00';
                $lunch[] = $hour . ':15';
                $lunch[] = $hour . ':30';
                $lunch[] = $hour . ':45';
            }
            $availableHours = array_merge($availableHours, $lunch);
        };

        // Récupérez le nombre total de personnes réservées pour le soir
        $dinnerGuests = $this->reservationRepository->getNumberOfGuestsForPeriod($dateString, $endingBreakHour, $closingHour);
        if (($dinnerGuests + $numberOfGuests <= $capacity)) {
            for ($i = $endingBreakHour; $i < ($closingHour - 1); $i++) {
                // Formatez l'heure en chaîne de caractères
                $hour = sprintf('%02d', $i);
                $dinner[] = $hour . ':00';
                $dinner[] = $hour . ':15';
                $dinner[] = $hour . ':30';
                $dinner[] = $hour . ':45';
            }
            $availableHours = array_merge($availableHours, $dinner);
        }

        return $availableHours;
    }
};
