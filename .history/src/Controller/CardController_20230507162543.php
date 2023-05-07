<?php

namespace App\Controller;

use App\Entity\Card;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CardController extends AbstractController
{
    #[Route('/accueil', name: 'app_home')]
    public function home(ManagerRegistry $managerRegistry): Response
    {
        $card = $managerRegistry->getRepository(Card::class);

        $champagne = $card->findOneBy(['title' => 'La bouteille de Champagne']);
        $categoryChampagne = $champagne->getCategory()->getName();

        $fish = $card->findOneBy(['title' => 'Gambas confites de Cambados']);
        $categoryFish = $fish->getCategory()->getName();

        $burger = $card->findOneBy(['title' => 'Le Burger du Quai (180g)']);
        $categoryBurger = $burger->getCategory()->getName();

        $ice = $card->findOneBy(['title' => 'Coupe Café Liégeois']);
        $categoryIce = $ice->getCategory()->getName();

        return $this->render('home/index.html.twig', [
            'champagne' => $champagne,
            'fish' => $fish,
            'burger' => $burger,
            'ice' => $ice,
            'categoryChampagne' => $categoryChampagne,
            'categoryFish' => $categoryFish,
            'categoryBurger' => $categoryBurger,
            'categoryIce' => $categoryIce
        ]);
    }

    // #[Route('/card', name: 'app_card')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $card = new Card();

    //     $categoryRepository = $entityManager->getRepository(Category::class);
    //     $category = $categoryRepository->findOneBy(['name' => 'Entrées']);

    //     $menuRepository = $entityManager->getRepository(Menu::class);
    //     $menu = $menuRepository->findOneBy(['title' => 'Menu Du Terroir']);

    //     $card
    //         ->setTitle('Crème de petits pois, râpée de Boutargue et huile de Livèche')
    //         ->setDescription('Petits pois en velouté servi froid relevé de pickles d’oignons rouge, condiment ricotta aux zestes de citron vert & pousses de petits pois')
    //         ->setPrice(12)
    //         ->setType('Entrées')
    //         ->setCategory($category)
    //         ->setMenu($menu)

    //     $entityManager->persist($card);
    //     $entityManager->flush();

    //     return $this->render('card/index.html.twig');
    // }
}
