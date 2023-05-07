<?php

namespace App\Controller;

use App\Entity\Menu;
use App\Entity\Formula;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FormulaController extends AbstractController
{
    // #[Route('/formule', name: 'app_formula')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $formula = new Formula();

    //     $menuRepository = $entityManager->getRepository(Menu::class);
    //     $menu = $menuRepository->findOneBy(['title' => 'Menu Du Plaisir']);

    //     $formula
    //         ->setDescription('PLAT + DESSERT')
    //         ->setPrice(46)
    //         ->setMenu($menu);

    //     $entityManager->persist($formula);
    //     $entityManager->flush();

    //     return $this->render('formula/index.html.twig');
    // }
}
