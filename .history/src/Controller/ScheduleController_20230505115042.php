<?php

namespace App\Controller;

use App\Entity\Menu;
use App\Entity\Schedule;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ScheduleController extends AbstractController
{
    #[Route('/', name: 'app_accueil')]
    public function schedule(ManagerRegistry $managerRegistry): Response
    {
        $schedules = $managerRegistry->getRepository(Schedule::class)->findAll();
        return $this->render('include/_footer.html.twig', [
            'schedules' => $schedules
        ]);
    }

    public function readCookie(Request $request)
    {
        $cookieValue = $request->cookies->get('my_cookie');
    }

    // #[Route('/schedule', name: 'app_schedule')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $schedule = new Schedule();

    //     $schedule
    //         ->setDay("Dimanche")
    //         ->setOpeningHour(12)
    //         ->setBeginningBreakHour(15)
    //         ->setEndingBreakHour(19)
    //         ->setClosingHour(22)
    //         ->setCapacityOfTable(30)

    //     $entityManager->persist($schedule);
    //     $entityManager->flush();

    //     return $this->render('schedule/index.html.twig');
    // }
}