package tn.esprit.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tn.esprit.backend.Entity.Certificat;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface CertificatRepository extends JpaRepository<Certificat, Long> {

    List<Certificat> findByUser_IdOrderByDateObtentionDesc(Long userId);

    Optional<Certificat> findByCodeCertificat(String codeCertificat);

    boolean existsByCodeCertificat(String codeCertificat);

    boolean existsByUser_IdAndQuiz_Id(Long userId, Long quizId);

    Optional<Certificat> findByUser_IdAndQuiz_Id(Long userId, Long quizId);

    @Query("SELECT DISTINCT c FROM Certificat c JOIN FETCH c.user JOIN FETCH c.quiz q JOIN FETCH q.cours co LEFT JOIN FETCH co.module WHERE c.id = :id")
    Optional<Certificat> findByIdForPdf(@Param("id") Long id);
}
