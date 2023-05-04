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
    #[Route('/', name: 'app_reservation_index', methods: ['GET'])]
    public function index(ReservationRepository $reservationRepository): Response
    {
        return $this->render('reservation/index.html.twig', [
            'reservations' => $reservationRepository->findAll(),
        ]);
    }

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
            $request->getSession()->set('previous_route', $request->attributes->get('_route'));
            return $this->redirectToRoute('app_reservation_index', [], Response::HTTP_SEE_OTHER);
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

    #[Route('/{id}', name: 'app_reservation_show', methods: ['GET'])]
    public function show(Reservation $reservation): Response
    {
        return $this->render('reservation/show.html.twig', [
            'reservation' => $reservation,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_reservation_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Reservation $reservation, ReservationRepository $reservationRepository, ScheduleRepository $scheduleRepository, ManagerRegistry $managerRegistry): Response
    {
        $form = $this->createForm(ReservationType::class, $reservation, [
            'user' => $this->getUser(),
            'reservation_repository' => $reservationRepository,
            'schedule_repository' => $scheduleRepository,
            'manager_registry' => $managerRegistry,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $reservationRepository->save($reservation, true);

            return $this->redirectToRoute('app_reservation_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('reservation/edit.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_reservation_delete', methods: ['POST'])]
    public function delete(Request $request, Reservation $reservation, ReservationRepository $reservationRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $reservation->getId(), $request->request->get('_token'))) {
            $reservationRepository->remove($reservation, true);
        }

        return $this->redirectToRoute('app_reservation_index', [], Response::HTTP_SEE_OTHER);
    }
}
