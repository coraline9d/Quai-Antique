<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    public function logiconly(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login_form_only.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/pre-reservation', name: 'app_pre_reservation')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // call loginonly method
        $response = $this->logiconly($authenticationUtils);

        return $this->render('security/login.html.twig', ['response' => $response]);
    }

    // #[Route(path: '/pre-reservation', name: 'app_pre_reservation')]
    // public function reservation(AuthenticationUtils $authenticationUtils): Response
    // {
    //     // call loginonly method
    //     $response = $this->logiconly($authenticationUtils);

    //     return $this->render('reservation/book.html.twig', ['response' => $response]);
    // }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
