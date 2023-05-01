<?php

namespace App\Controller\Admin;

use App\Entity\Schedule;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ScheduleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Schedule::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Horaires')
            ->setEntityLabelInSingular('Horaire')

            ->setPageTitle("index", "Quai Antique - Administration des horaires")

            ->setPaginatorPageSize(10);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('day'),
            NumberField::new('OpeningHour'),
            NumberField::new('BeginningBreakHour'),
            NumberField::new('EndingBreakHour'),
            NumberField::new('ClosingHour'),
            NumberField::new('Capacity'),
            DateTimeField::new('createdAt')
                ->hideOnIndex()
                ->setFormTypeOption('disabled', true),
        ];
    }
}
