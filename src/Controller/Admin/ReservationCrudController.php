<?php

namespace App\Controller\Admin;

use App\Entity\Reservation;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ReservationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Reservation::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Réservations')
            ->setEntityLabelInSingular('Réservation')

            ->setPageTitle("index", "Quai Antique - Administration des réservations")

            ->setPaginatorPageSize(10);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('lastname'),
            TextField::new('firstname'),
            DateField::new('date')
                ->setFormat('dd-MM-y'),
            TextField::new('hour'),
            NumberField::new('numberOfGuest'),
            ArrayField::new('allergy'),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('updatedAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
        ];
    }
}
