<?php

namespace App\Controller;

use App\Entity\Category;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    public function __construct(private EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/carte', name: 'app_card')]
    public function category(): Response
    {
        $cache = new FilesystemAdapter();

        $data = $cache->get('category_data', function (ItemInterface $item) {
            $item->expiresAfter(3600);

            $categories = $this->entityManager
                ->getRepository(Category::class)
                ->findAll();

            foreach ($categories as $category) {
                $cards = $category->getCard();
            }

            return [
                'cards' => $cards,
                'categories' => $categories
            ];
        });

        return $this->render('card/index.html.twig', [
            'cards' => $data['cards'],
            'categories' => $data['categories']
        ]);
    }

    // #[Route('/category', name: 'app_category')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $category = new Category();

    //     $category
    //         ->setName('Sodas')

    //     $entityManager->persist($category);
    //     $entityManager->flush();

    //     return $this->render('category/index.html.twig');
    // }
}
