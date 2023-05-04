<?php

namespace App\Controller;

use App\Form\RegistrationFormType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class BookController extends AbstractController
{
    #[Route('/pre-reservation', name: 'app_pre_reservation')]
    public function index(RegistrationController $registrationController): Response
    {
        $registrationForm = $registrationController->createForm(RegistrationFormType::class);

        return $this->render('reservation/book.html.twig', [
            'registration_form' => $registrationForm->createView(),
        ]);
    }
}
