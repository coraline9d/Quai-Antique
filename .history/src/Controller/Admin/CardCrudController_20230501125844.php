<?php

namespace App\Controller\Admin;

use App\Entity\Card;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CardCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Card::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Cartes')
            ->setEntityLabelInSingular('Carte')

            ->setPageTitle("index", "Quai Antique - Administration de la carte")

            ->setPaginatorPageSize(10);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            TextField::new('description'),
            NumberField::new('price'),
            TextField::new('type')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('updatedAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
        ];
    }
}
