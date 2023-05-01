<?php

namespace App\Controller\Admin;

use App\Entity\Menu;
use App\Entity\Formula;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class FormulaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Formula::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Formules')
            ->setEntityLabelInSingular('Formule')

            ->setPageTitle("index", "Quai Antique - Administration des formules");
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('description'),
            NumberField::new('price'),
            AssociationField::new('menu')
                ->setRequired(true),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('updatedAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
        ];
    }
}
