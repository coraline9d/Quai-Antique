<?php

namespace App\Controller\Admin;

use App\Entity\Card;
use App\Entity\Menu;
use App\Entity\User;
use App\Entity\Category;
use App\Entity\Formula;
use App\Entity\Schedule;
use App\Entity\Reservation;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'app_admin')]
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Quai Antique - Administration')
            ->renderContentMaximized();
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Carte', 'fas fa-utensils', Card::class);
        yield MenuItem::linkToCrud('Categorie', 'fas fa-list', Category::class);
        yield MenuItem::linkToCrud('Menu', 'fas fa-file', Menu::class);
        yield MenuItem::linkToCrud('Formule', 'fas fa-unsorted', Formula::class);
        yield MenuItem::linkToCrud('Réservation', 'fas fa-calendar-check', Reservation::class);
        yield MenuItem::linkToCrud('Horaire', 'fas fa-clock', Schedule::class);
        yield MenuItem::linkToCrud('Utilisateur', 'fas fa-user', User::class);
    }
}
