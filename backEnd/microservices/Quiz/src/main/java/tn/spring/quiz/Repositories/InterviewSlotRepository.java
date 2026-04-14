package tn.spring.quiz.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.spring.quiz.Models.InterviewSlot;

public interface InterviewSlotRepository extends JpaRepository<InterviewSlot, Long> {
}