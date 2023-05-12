<?php

namespace App\Repository;

use App\Entity\Reservation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Reservation>
 *
 * @method Reservation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reservation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reservation[]    findAll()
 * @method Reservation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reservation::class);
    }

    public function save(Reservation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Reservation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getNumberOfGuestsForPeriod(string $dateString, int $startHour, int $endHour): int
    {
        // Create an array to store the start and end times of each 15 minute slot
        $timeStrings = [];

        // Cycle through all times between start time and end time
        for ($i = $startHour; $i < $endHour; $i++) {
            // Cycle through all 15-minute slots for each hour
            for ($j = 0; $j < 60; $j += 15) {
                // Format the time as a string
                $timeStrings[] = sprintf('%02d:%02d', $i, $j);
            }
        }

        // Retrieve the total number of people booked for the given period
        $numberOfGuests = $this->createQueryBuilder('r')
            ->select('SUM(r.number_of_guest)')
            ->where('r.date = :date')
            ->andWhere('r.hour IN (:time_strings)')
            ->setParameter('date', $dateString)
            ->setParameter('time_strings', $timeStrings)
            ->getQuery()
            ->getSingleScalarResult();

        return (int) $numberOfGuests;
    }
    //    /**
    //     * @return Reservation[] Returns an array of Reservation objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Reservation
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
