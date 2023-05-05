<?php

namespace App\Controller;

use App\Form\UserType;
use App\Form\UserPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/utilisateur/profil', name: 'app_utilisateur_profile', methods: ['GET', 'POST'])]
    public function edit(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }

        if ($this->getUser() !== $user) {
            return $this->redirectToRoute('app_login');
        }

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();

            // Vérification des modifications apportées à l'entité User
            $changes = $entityManager->getUnitOfWork()->getEntityChangeSet($user);
            if (!empty($changes)) {
                // Des modifications ont été apportées
                $this->addFlash(
                    'success',
                    'Votre profil a été modifié'
                );
            } else {
                // Aucune modification n'a été apportée
                $this->addFlash(
                    'error',
                    'Aucune modification n\'a été apportée à votre profil'
                );
            }
            return $this->redirectToRoute('app_utilisateur_profile');
        }
        return $this->render('user/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/utilisateur/modification-mot-de-passe', name: 'app_utilisateur_password', methods: ['GET', 'POST'])]
    public function password(Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $hasher): Response
    {
        $user = $this->getUser();

        $form = $this->createForm(UserPasswordType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($hasher->isPasswordValid($user, $form->getData()['plainPassword'])) {
                $user->setPassword(
                    $hasher->hashPassword(
                        $user,
                        $form->getData()['newPassword']
                    )
                );
                $manager->persist($user);
                $manager->flush();

                // Ajout d'un message flash de succès
                $this->addFlash('success', 'Votre mot de passe a été modifié avec succès !');

                return $this->redirectToRoute('app_utilisateur_password');
            } else {
                // Le mot de passe actuel est incorrect
                $this->addFlash('error', 'Le mot de passe actuel est incorrect');
            }
        } elseif ($form->isSubmitted() && !$form->isValid()) {
            // Le formulaire est invalide
            $this->addFlash('error', 'Le formulaire est invalide');
        }
        return $this->render('user/editpassword.html.twig', [
            'form' => $form,
        ]);
    }

    // #[Route('/', name: 'app_user')]
    // public function index(EntityManagerInterface $entityManager)
    // {
    //     $user = new User();

    //     $plainPassword = '';
    //     $hashedPassword = password_hash($plainPassword, PASSWORD_BCRYPT);

    //     $user
    //         ->setEmail('')
    //         ->setPassword($hashedPassword)
    //         ->setRoles(["ROLE_USER"])
    //         ->setFirstName('')
    //         ->setLastName('')
    //         ->setPhone('+')


    //     $entityManager->persist($user);
    //     $entityManager->flush();

    //     return $this->render('user/index.html.twig', [
    //         'controller_name' => 'UserController',
    //     ]);
    // }
}