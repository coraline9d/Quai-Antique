<?php

namespace App\Controller;

use App\Entity\Menu;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MenuController extends AbstractController
{
    public function __construct(private EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/menu', name: 'app_menu')]
    public function menu(ManagerRegistry $managerRegistry): Response
    {
        $cache = new FilesystemAdapter();

        $menus = $cache->get('menu_data', function (ItemInterface $item) use ($managerRegistry) {
            $item->expiresAfter(3600);

            return $this->entityManager
                ->getRepository(Menu::class)
                ->findAll();
        });

        return $this->render('menu/index.html.twig', [
            'menus' => $menus,
        ]);
    }

    // #[Route('/menu', name: 'app_menu')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $menu = new Menu();
    //     $menu
    //         ->setTitle('Menu Du Plaisir')

    //     $entityManager->persist($menu);
    //     $entityManager->flush();

    //     return $this->render('menu/index.html.twig');
    // }
}
