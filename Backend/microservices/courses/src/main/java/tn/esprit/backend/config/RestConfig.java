package tn.esprit.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import tn.esprit.backend.Entity.*;
import tn.esprit.backend.Entity.Module;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(
            RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(
                User.class,
                Module.class,
                Cours.class,
                Quiz.class,
                Question.class,
                Reponse.class,
                QuizAnswerInference.class,
                Certificat.class);
    }
}
