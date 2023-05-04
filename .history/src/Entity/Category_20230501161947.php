<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue('CUSTOM')]
    #[ORM\Column(type: 'uuid', unique: true)]
    #[ORM\CustomIdGenerator('doctrine.uuid_generator')]
    private ?string $id = null;

    #[ORM\Column(length: 60)]
    private ?string $name = null;

    /**
     * @var \DateTimeImmutable
     *
     * @ORM\Column(type="datetime_immutable")
     * @Gedmo\Timestampable(on="create")
     */
    private $created_at;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Card::class, orphanRemoval: true)]
    private Collection $card;

    public function __construct()
    {
        $this->card = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    /**
     * @return Collection<int, Card>
     */
    public function getCard(): Collection
    {
        return $this->card;
    }

    public function addCard(Card $card): self
    {
        if (!$this->card->contains($card)) {
            $this->card->add($card);
            $card->setCategory($this);
        }

        return $this;
    }

    public function removeCard(Card $card): self
    {
        if ($this->card->removeElement($card)) {
            // set the owning side to null (unless already changed)
            if ($card->getCategory() === $this) {
                $card->setCategory(null);
            }
        }

        return $this;
    }
}
