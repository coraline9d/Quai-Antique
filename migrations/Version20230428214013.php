<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230428214013 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card ADD menu_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\'');
        $this->addSql('ALTER TABLE card ADD CONSTRAINT FK_161498D3CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id)');
        $this->addSql('CREATE INDEX IDX_161498D3CCD7E912 ON card (menu_id)');
        $this->addSql('ALTER TABLE menu DROP FOREIGN KEY FK_7D053A934ACC9A20');
        $this->addSql('DROP INDEX IDX_7D053A934ACC9A20 ON menu');
        $this->addSql('ALTER TABLE menu DROP card_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card DROP FOREIGN KEY FK_161498D3CCD7E912');
        $this->addSql('DROP INDEX IDX_161498D3CCD7E912 ON card');
        $this->addSql('ALTER TABLE card DROP menu_id');
        $this->addSql('ALTER TABLE menu ADD card_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\'');
        $this->addSql('ALTER TABLE menu ADD CONSTRAINT FK_7D053A934ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id)');
        $this->addSql('CREATE INDEX IDX_7D053A934ACC9A20 ON menu (card_id)');
    }
}
