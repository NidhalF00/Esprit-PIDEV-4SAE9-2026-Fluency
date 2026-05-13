package tn.spring.user.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.spring.user.Models.TutorCv;

public interface TutorCvRepository extends JpaRepository<TutorCv, Long> {
}
