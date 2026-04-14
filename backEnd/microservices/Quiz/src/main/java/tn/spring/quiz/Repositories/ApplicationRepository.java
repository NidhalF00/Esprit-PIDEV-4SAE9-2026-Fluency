package tn.spring.quiz.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.spring.quiz.Models.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
