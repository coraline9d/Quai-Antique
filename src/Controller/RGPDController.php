<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RGPDController extends AbstractController
{
    #[Route('/politique-de-confidentialité', name: 'app_rgpd')]
    public function politique(): Response
    {
        return $this->render('RGPD/politique.html.twig', []);
    }

    #[Route('/conditions-générales-d-utilisations', name: 'app_cgu')]
    public function cgu(): Response
    {
        return $this->render('RGPD/CGU.html.twig', []);
    }
}
