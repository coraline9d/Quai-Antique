<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormulaController extends AbstractController
{
    #[Route('/formula', name: 'app_formula')]
    public function index(): Response
    {
        return $this->render('formula/index.html.twig', [
            'controller_name' => 'FormulaController',
        ]);
    }
}
