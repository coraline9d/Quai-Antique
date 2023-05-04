<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BookController extends AbstractController
{
    #[Route('/', name: 'app_accueil')]
    public function book(): Response
    {
        return $this->render('reservation/book.html.twig', []);
    }
}
