<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Catégories')
            ->setEntityLabelInSingular('Cayégorie')

            ->setPageTitle("index", "Quai Antique - Administration des catégories")

            ->setPaginatorPageSize(10);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            IdField::new('id')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),

        ];
    }
}
