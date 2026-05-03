FROM eclipse-temurin:17-jre

WORKDIR /app

COPY target/Quiz-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8056

ENTRYPOINT ["java", "-jar", "app.jar"]
