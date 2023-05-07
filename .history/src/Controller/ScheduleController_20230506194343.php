<?php

namespace App\Controller;

use App\Entity\Schedule;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Contracts\Cache\ItemInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ScheduleController extends AbstractController
{
    public function schedule(ManagerRegistry $managerRegistry): Response
    {
        $cache = new FilesystemAdapter();

        $schedules = $cache->get('schedule_data', function (ItemInterface $item) use ($managerRegistry) {
            $item->expiresAfter(15);

            return $managerRegistry->getRepository(Schedule::class)->findAll();
        });

        return $this->render('include/_footer.html.twig', [
            'schedules' => $schedules
        ]);
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
