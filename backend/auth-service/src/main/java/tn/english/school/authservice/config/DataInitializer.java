package tn.english.school.authservice.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import tn.english.school.authservice.entity.AppUser;
import tn.english.school.authservice.enums.Role;
import tn.english.school.authservice.repository.UserRepository;
import tn.english.school.authservice.service.StudentAcademicProfileService;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final StudentAcademicProfileService profileService;

    @Override
    public void run(String... args) {
        seedUsers();
        profileService.seedProfiles();
    }

    private void seedUsers() {
        if (!userRepository.existsByEmail("zeinebnecib@gmail.com")) {
            userRepository.save(AppUser.builder()
                    .firstName("Zeineb")
                    .lastName("Necib")
                    .email("zeinebnecib@gmail.com")
                    .password(passwordEncoder.encode("123456"))
                    .role(Role.STUDENT)
                    .build());
            log.info("[DataInitializer] Student user created: zeinebnecib@gmail.com");
        }

        if (!userRepository.existsByEmail("admin@gmail.com")) {
            userRepository.save(AppUser.builder()
                    .firstName("Admin")
                    .lastName("Platform")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("123456"))
                    .role(Role.ADMIN)
                    .build());
            log.info("[DataInitializer] Admin user created: admin@gmail.com");
        }
    }
}