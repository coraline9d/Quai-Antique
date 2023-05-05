<?php

namespace App\Form;

use App\Entity\Reservation;
use App\EventSubscriber\DateSubscriber;
use App\EventSubscriber\UserSubscriber;
use Symfony\Component\Form\AbstractType;
use Karser\Recaptcha3Bundle\Form\Recaptcha3Type;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Validator\Constraints\LessThanOrEqual;
use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;
use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;

class ReservationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['user'];
        $scheduleRepository = $options['schedule_repository'];
        $reservationRepository = $options['reservation_repository'];
        $managerRegistry = $options['manager_registry'];

        if ($user) {
            $builder->addEventSubscriber(new UserSubscriber($managerRegistry, $user));
        }

        $builder
            ->add('firstname', TextType::class, [
                'label' => 'Prénom :',
                'constraints' => [
                    new GreaterThanOrEqual([
                        'value' => 60,
                        'message' => 'Votre prénom ne peut pas faire plus de 60 caractères'
                    ]),
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre prénom'
                    ]),
                ]
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom :',
                'constraints' => [
                    new GreaterThanOrEqual([
                        'value' => 60,
                        'message' => 'Votre nom ne peut pas faire plus de 60 caractères'
                    ]),
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre nom'
                    ]),
                ]
            ])

            ->add('number_of_guest', IntegerType::class, [
                'label' => 'Nombre de personnes :',
                'attr' => [
                    'id' => 'number_of_guest',
                    'min' => 1
                ],
                'constraints' => [
                    new LessThanOrEqual([
                        'value' => 30,
                        'message' => 'Nous ne pouvons pas accueillir plus de 30 personnes'
                    ]),
                    new NotBlank([
                        'message' => 'Veuillez renseigner le nombre de convives s\'il vous plait'
                    ])
                ]
            ])->add('allergy', ChoiceType::class, [
                'label' => 'Allergie(s) :',
                'choices' => [
                    'Aucune' => 'Aucune',
                    'Gluten' => 'Gluten',
                    'Lactose' => 'Lactose',
                    'Fruits à coques' => 'Fruits à coques',
                    'Oeuf' => 'Oeuf',
                    'Arachide' => 'Arachide',
                    'Soja' => 'Soja',
                    'Crustacés' => 'Crustacés',
                    'Autre (Nous contacter par téléphone)' => 'Autre'
                ],
                'placeholder' => 'Choisir une allergie',
                'multiple' => true,
                'expanded' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre allergie sinon séléctionnez \'Aucune\''
                    ])
                ]
            ])
            ->add('date', DateType::class, [
                'label' => 'Date :',
                'widget' => 'single_text',
                'attr' => ['min' => date('Y-m-d')],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une date pour votre repas s\'il vous plait'
                    ])
                ],
            ])
            ->add('captcha', Recaptcha3Type::class, [
                'constraints' => new Recaptcha3(),
                'action_name' => 'Inscription',
            ])
            ->addEventSubscriber(new DateSubscriber($scheduleRepository, $reservationRepository));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Reservation::class,
            'schedule_repository' => null,
            'reservation_repository' => null,
            'manager_registry' => null,
            'user' => null,
        ]);
    }
}
