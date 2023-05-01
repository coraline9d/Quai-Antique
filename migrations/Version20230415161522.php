<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230415161522 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation CHANGE schedule_id schedule_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', CHANGE allergy allergy LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation CHANGE schedule_id schedule_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', CHANGE allergy allergy LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\'');
    }
}
