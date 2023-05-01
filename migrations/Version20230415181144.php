<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230415181144 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card_menu DROP FOREIGN KEY FK_913638314ACC9A20');
        $this->addSql('ALTER TABLE card_menu DROP FOREIGN KEY FK_91363831CCD7E912');
        $this->addSql('DROP TABLE card_menu');
        $this->addSql('ALTER TABLE menu ADD card_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\'');
        $this->addSql('ALTER TABLE menu ADD CONSTRAINT FK_7D053A934ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id)');
        $this->addSql('CREATE INDEX IDX_7D053A934ACC9A20 ON menu (card_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE card_menu (card_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', menu_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_913638314ACC9A20 (card_id), INDEX IDX_91363831CCD7E912 (menu_id), PRIMARY KEY(card_id, menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE card_menu ADD CONSTRAINT FK_913638314ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE card_menu ADD CONSTRAINT FK_91363831CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE menu DROP FOREIGN KEY FK_7D053A934ACC9A20');
        $this->addSql('DROP INDEX IDX_7D053A934ACC9A20 ON menu');
        $this->addSql('ALTER TABLE menu DROP card_id');
    }
}
