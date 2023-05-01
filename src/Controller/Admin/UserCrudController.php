<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Utilisateurs')
            ->setEntityLabelInSingular('Utilisateur')

            ->setPageTitle("index", "Quai Antique - Administration des utilisateurs")

            ->setPaginatorPageSize(10);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            TextField::new('firstName'),
            TextField::new('lastName'),
            TextField::new('email'),
            TextField::new('phone'),
            ArrayField::new('roles'),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('updatedAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
        ];
    }
}
