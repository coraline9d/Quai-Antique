<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\EventSubscriber\DateSubscriber;
use App\Form\ReservationType;
use App\Repository\ScheduleRepository;
use App\Repository\ReservationRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/reservation')]
class ReservationController extends AbstractController
{
    #[Route('/new', name: 'app_reservation_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ReservationRepository $reservationRepository, ManagerRegistry $managerRegistry, ScheduleRepository $scheduleRepository): Response
    {
        $reservation = new Reservation();
        $form = $this->createForm(ReservationType::class, $reservation, [
            'user' => $this->getUser(),
            'reservation_repository' => $reservationRepository,
            'schedule_repository' => $scheduleRepository,
            'manager_registry' => $managerRegistry,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $reservationRepository->save($reservation, true);

            // Ajout d'un message flash de succès
            $this->addFlash('success', 'Votre réservation a été enregistrée avec succès ! Profitez-en pour préparer votre repas en avance ;)');

            return $this->redirectToRoute('app_card', [], Response::HTTP_SEE_OTHER);
        } else {
            // Ajout d'un message flash d'erreur
            $this->addFlash('error', 'Veuillez remplir tous les champs requis');
        }

        return $this->render('reservation/new.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
    }

    #[Route('/available-hours', name: 'available_hours', methods: ['GET'])]
    public function availableHours(DateSubscriber $dateSubscriber, Request $request): JsonResponse
    {
        // Récupérez la date et le nombre d'invités sélectionnés par l'utilisateur
        $dateString = $request->query->get('date');
        $numberOfGuests = $request->query->get('number_of_guest');

        // Utilisez la méthode calculateAvailableHours de DateSubscriber pour calculer les heures disponibles
        $availableHours = $dateSubscriber->calculateAvailableHours($dateString, $numberOfGuests);

        // Renvoyez les heures disponibles au format JSON
        return new JsonResponse($availableHours);
    }
}
