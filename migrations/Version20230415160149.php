<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230415160149 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE schedule CHANGE opening_hour opening_hour INT NOT NULL, CHANGE beginning_break_hour beginning_break_hour INT NOT NULL, CHANGE ending_break_hour ending_break_hour INT NOT NULL, CHANGE closing_hour closing_hour INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE schedule CHANGE opening_hour opening_hour TIME NOT NULL, CHANGE beginning_break_hour beginning_break_hour TIME NOT NULL, CHANGE ending_break_hour ending_break_hour TIME NOT NULL, CHANGE closing_hour closing_hour TIME NOT NULL');
    }
}
