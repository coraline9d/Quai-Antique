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
    public function index(SecurityController $securityController, RegistrationController $registrationController,  AuthenticationUtils $authenticationUtils): Response
    {
        $loginForm = $securityController->createForm($authenticationUtils);
        $registrationForm = $registrationController->createForm(RegistrationFormType::class);

        return $this->render('reservation/book.html.twig', [
            'login_form' => $loginForm->createView(),
            'registration_form' => $registrationForm->createView(),
        ]);
    }
}
