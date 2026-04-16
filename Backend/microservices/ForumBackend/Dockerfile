# syntax=docker/dockerfile:1
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn -DskipTests package \
    && JAR=$(ls target/*.jar | grep -v -- '-sources' | grep -v -- '-javadoc' | grep -v original | head -1) \
    && cp "$JAR" /build/app.jar

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /build/app.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/app.jar"]
