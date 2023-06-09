<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email :',
                'constraints' => [
                    new Email([
                        'message' => 'Veuillez renseigner une adresse email valide',
                    ]),
                ],
            ])
            ->add(
                'firstname',
                TextType::class,
                [
                    'label' => 'Prénom :',
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez renseigner votre prénom',
                        ])
                    ]
                ]
            )
            ->add(
                'lastname',
                TextType::class,
                [
                    'label' => 'Nom de Famille :',
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez renseigner votre nom',
                        ])
                    ]
                ]
            )
            ->add('phone', null, [
                'label' => 'Numéro de Téléphone :',
                'constraints' => [
                    new Regex([
                        'pattern' => '/^\+33[67]\d{8}$/',
                        'message' => 'Le numéro de téléphone doit être de la forme +33625122512'
                    ]),
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre numéro de téléphone',
                    ])
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
