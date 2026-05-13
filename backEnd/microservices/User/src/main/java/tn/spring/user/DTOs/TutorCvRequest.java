package tn.spring.user.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TutorCvRequest {
    private String fullName;
    private String email;
    private String phone;
    private String city;
    private String country;
    private String englishLevel;
    private Integer yearsOfExperience;
    private String speciality;
    private String education;
    private String certifications;
    private String skills;
    private String professionalSummary;
}
