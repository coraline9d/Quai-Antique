<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230416094630 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE menu CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE reservation CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE menu CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE reservation CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME DEFAULT NULL');
    }
}
