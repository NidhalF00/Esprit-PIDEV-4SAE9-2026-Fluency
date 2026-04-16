package tn.esprit.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("courses", r -> r.path("/courses/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://COURSES"))
                .route("forum-service", r -> r.path("/forum/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://ForumBackend"))
                // Pas de stripPrefix : les contrôleurs users sont sous /user/... (ex. /user/auth/signin).
                .route("user-service", r -> r.path("/user/**")
                        .uri("lb://user"))
                .build();
    }

    @Bean
    public CorsWebFilter corsWebFilter() {

        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.addAllowedOrigin("*");
        corsConfig.addAllowedMethod("*");
        corsConfig.addAllowedHeader("*");
        corsConfig.setAllowCredentials(false);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsWebFilter(source);
    }
}
