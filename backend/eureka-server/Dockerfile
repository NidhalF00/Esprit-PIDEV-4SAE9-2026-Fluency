FROM maven:3.9-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY eureka-server/pom.xml eureka-server/pom.xml
COPY gateway-service/pom.xml gateway-service/pom.xml
COPY auth-service/pom.xml auth-service/pom.xml
COPY claim-service/pom.xml claim-service/pom.xml
COPY retake-service/pom.xml retake-service/pom.xml
COPY course-service/pom.xml course-service/pom.xml
COPY forum-service/pom.xml forum-service/pom.xml
COPY resource-service/pom.xml resource-service/pom.xml
COPY eureka-server/src eureka-server/src
RUN mvn package -pl eureka-server -DskipTests -q

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/eureka-server/target/*.jar app.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "app.jar"]
