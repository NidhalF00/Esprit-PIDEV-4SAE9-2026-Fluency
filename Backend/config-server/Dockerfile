<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3d2679db (clean initial version)
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
EXPOSE 8899
ENTRYPOINT ["java","-jar","/app/app.jar"]
<<<<<<< HEAD
=======
=======
# ── Build stage ──────────────────────────────
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -q
COPY src ./src
RUN mvn package -DskipTests -q

# ── Run stage ─────────────────────────────────
FROM eclipse-temurin:17-jre-alpine
RUN apk add --no-cache curl
WORKDIR /app
VOLUME /tmp
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8899
ENTRYPOINT ["java", "-jar", "app.jar"]
>>>>>>> 4ced7214 (revision de test)
>>>>>>> 3d2679db (clean initial version)
