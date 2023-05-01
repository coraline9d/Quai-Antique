<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230415164802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE card (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', category_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', title VARCHAR(60) NOT NULL, description LONGTEXT NOT NULL, price INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, INDEX IDX_161498D312469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE card_menu (card_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', menu_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_913638314ACC9A20 (card_id), INDEX IDX_91363831CCD7E912 (menu_id), PRIMARY KEY(card_id, menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE card ADD CONSTRAINT FK_161498D312469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE card_menu ADD CONSTRAINT FK_913638314ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE card_menu ADD CONSTRAINT FK_91363831CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE food DROP FOREIGN KEY FK_D43829F712469DE2');
        $this->addSql('ALTER TABLE food_menu DROP FOREIGN KEY FK_C8229242BA8E87C4');
        $this->addSql('ALTER TABLE food_menu DROP FOREIGN KEY FK_C8229242CCD7E912');
        $this->addSql('DROP TABLE food');
        $this->addSql('DROP TABLE food_menu');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE food (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', category_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', title VARCHAR(60) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, price INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, INDEX IDX_D43829F712469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE food_menu (food_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', menu_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_C8229242BA8E87C4 (food_id), INDEX IDX_C8229242CCD7E912 (menu_id), PRIMARY KEY(food_id, menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE food ADD CONSTRAINT FK_D43829F712469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE food_menu ADD CONSTRAINT FK_C8229242BA8E87C4 FOREIGN KEY (food_id) REFERENCES food (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE food_menu ADD CONSTRAINT FK_C8229242CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE card DROP FOREIGN KEY FK_161498D312469DE2');
        $this->addSql('ALTER TABLE card_menu DROP FOREIGN KEY FK_913638314ACC9A20');
        $this->addSql('ALTER TABLE card_menu DROP FOREIGN KEY FK_91363831CCD7E912');
        $this->addSql('DROP TABLE card');
        $this->addSql('DROP TABLE card_menu');
    }
}
