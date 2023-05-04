<?php

namespace App\Controller;

use App\Entity\Menu;
use App\Entity\Schedule;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BookController extends AbstractController
{
    #[Route('/', name: 'app_accueil')]
    public function schedule(ManagerRegistry $managerRegistry): Response
    {
        $schedules = $managerRegistry->getRepository(Schedule::class)->findAll();
        return $this->render('include/_footer.html.twig', [
            'schedules' => $schedules
        ]);
    }
}
