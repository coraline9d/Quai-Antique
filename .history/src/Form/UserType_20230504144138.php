<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Karser\Recaptcha3Bundle\Form\Recaptcha3Type;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;

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
            ->add('phone', NumberType::class, [
                'label' => 'Numéro de Téléphone :',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre numéro de téléphone',
                    ])]
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4'
                ],
                'label' => 'Modifier mon profil'
            ])
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
