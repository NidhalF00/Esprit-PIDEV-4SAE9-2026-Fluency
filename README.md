# Fluency English Learning Platform

## Project Overview

Fluency is an English learning platform built with an Angular frontend and Spring Boot microservices.
The project includes an API Gateway, User microservice, Quiz microservice, Eureka service discovery, PostgreSQL, and Docker Compose.

Sprint 3 DevOps work is already available in the repository, including Docker, Jenkins, SonarQube, monitoring, and Kubernetes manifests.
This README focuses on the Sprint 2 Spring-Angular features, business rules, security, tests, and demo flow.

## Architecture

The main request flow is:

```text
Angular Frontend -> API Gateway -> User / Quiz Microservices
```

- Angular frontend provides the user interface for students, tutors, admins, applicants, and public visitors.
- API Gateway centralizes backend routing and forwards requests to the correct microservice.
- User microservice handles authentication, users, roles, registration rules, and the Tutor CV Builder.
- Quiz microservice handles courses, quizzes, questions, attempts, feedback, applications, certificates, and the Fluency Assistant.
- Eureka supports service discovery between backend services.
- PostgreSQL stores application data.
- Docker Compose runs the local development stack.

## Roles

- `STUDENT`: takes quizzes, sees feedback, retakes quizzes, practices pronunciation, uses the assistant, and generates certificates when eligible.
- `TUTOR`: sees students, assigns Welcome Quizzes, and supports the student learning path.
- `ADMIN`: manages users and tutor applications.
- `SUPER_ADMIN`: has the highest administration permissions, including role-management actions.

## Sprint 2 Business Features

- Login error handling and role-based redirects for `STUDENT`, `TUTOR`, `ADMIN`, and `SUPER_ADMIN`.
- Pronunciation Helper on the student home page using browser speech synthesis.
- Smart Quiz Feedback based on score, pass/fail status, and placement level.
- Retake Quiz feature with randomized question and answer order.
- Fluency Assistant chatbot with a Gemini-ready backend and guided fallback answers.
- Tutor CV Builder CRUD for applicants who do not already have a CV.
- English Quality Checker using the free LanguageTool API.
- Registration duplicate email and phone validation.
- Tutor quiz assignment workflow.
- Admin application workflow for reviewing applications, interviews, and CV downloads.
- Branded dynamic Angular UI for main, auth, student, tutor, admin, quiz, and CV pages.

## AA1: Business Logic and Dynamic Angular

The project transforms learning needs into business rules:

- Quiz score is converted into clear feedback and a learning recommendation.
- Placement quiz titles such as A1, A2, and B1 are used to show recommended English level guidance.
- Retake Quiz resets the previous attempt and randomizes questions and answers while keeping backend IDs valid.
- Tutor CV Builder supports create, read, update, and delete operations.
- CV ownership uses an edit token so applicants can manage their CV before registration.
- English Quality Checker returns grammar and spelling suggestions.
- Student, Tutor, and Admin dashboards show dynamic state, actions, badges, alerts, and workflows.

## AA2: Architecture, Gateway, and OpenFeign

The frontend communicates with the backend mainly through the API Gateway.
The Gateway routes requests to the User and Quiz microservices.

OpenFeign is enabled in the Gateway and used for a typed User service call.
Most Gateway routes use proxy controllers and a generic `ProxyForwarder`, while OpenFeign is used for a specific User microservice call.

This is the honest architecture summary:

- Gateway centralizes routes from Angular.
- Proxy controllers forward most requests to User or Quiz.
- OpenFeign exists and is used for one typed User service communication.
- Eureka supports discovery in the microservice architecture.

## AA3: Security and Access

The project uses JWT authentication and role-based access.

After login:

1. The backend returns a JWT token and user role.
2. Angular stores the token and role in browser storage.
3. Angular sends the token with protected requests.
4. Angular route guards protect role pages for better user experience.
5. Gateway protects important API routes.
6. User and Quiz microservices enforce detailed role checks using backend security annotations.

Examples:

- Public routes by design: login, register, public apply page, and CV Builder creation.
- Student actions: quiz attempts and certificate generation.
- Tutor actions: assigning quizzes to students.
- Admin actions: managing applications, users, interviews, and CV downloads.

Frontend guards are useful for navigation, but backend security is the real protection.

## AA4: Tests, Git, Standards, and Documentation

The project includes backend and frontend quality work:

- Backend tests for Tutor CV Builder CRUD.
- Backend tests for LanguageTool English checking and fallback behavior.
- Backend tests for Fluency Assistant fallback, Gemini response parsing, and guided answers.
- Backend tests for quiz assignment rules.
- Gateway context test.
- Angular spec files for multiple components and services.
- Frontend build has passed with existing warnings only.
- Git history uses clear feature-based commits.
- Secrets and `.env` values must not be committed.
- Personal markdown notes are intentionally left uncommitted.

Useful commands are listed below for testing and building the project.

## AA5: Innovation

The project includes several innovation and user-experience improvements:

- LanguageTool external API integration for CV English Quality checking.
- Gemini-ready Fluency Assistant with guided fallback answers.
- Tutor CV Builder with live preview and print/save as PDF.
- Pronunciation Helper using browser speech synthesis.
- Smart Quiz Feedback and retake flow.
- Modern branded Angular UI with animated backgrounds, glass cards, gradient actions, and a draggable chatbot launcher.

## How To Run Locally

From the project root:

```powershell
docker compose up -d
```

Open the frontend:

```text
http://localhost:4200
```

Common local service URLs:

- Frontend: `http://localhost:4200`
- Gateway: `http://localhost:8090`
- Eureka: `http://localhost:8761`
- User service: `http://localhost:8081`
- Quiz service: `http://localhost:8056`

## Build and Test Commands

User microservice:

```powershell
cd backEnd/microservices/User
.\mvnw.cmd test
.\mvnw.cmd clean package
```

Quiz microservice:

```powershell
cd backEnd/microservices/Quiz
.\mvnw.cmd test
.\mvnw.cmd clean package
```

Gateway:

```powershell
cd backEnd/Gateway
.\mvnw.cmd test
.\mvnw.cmd clean package
```

Frontend:

```powershell
cd frontEnd/EnglishPlateforme
npm run build
```

## Demo Checklist

- Login as a student and verify role redirect.
- Open Student Home.
- Test the Pronunciation Helper.
- Open an assigned placement quiz.
- Submit a quiz and view Smart Quiz Feedback.
- Use Retake Quiz and confirm questions/answers are shuffled.
- Open Fluency Assistant and ask about placement quizzes.
- Open the Apply page.
- Use the CV Builder to create a tutor CV.
- Use English Quality Checker on CV text.
- Login as tutor and assign a Welcome Quiz to a student.
- Login as admin and review applications.
- Show security checks with protected endpoints and roles.

## Security Notes

- Do not commit `.env` files.
- Do not commit API keys.
- Do not commit real JWT secrets.
- Do not commit passwords or tokens.
- Gemini API key must be provided as an environment variable, not stored in source code.
- CV edit tokens are returned once and stored only in the user's browser localStorage.
- Public CV endpoints use edit-token ownership for read, update, and delete.

## Known Warnings

The frontend build may show existing warnings:

- Angular initial bundle budget warning.
- `file-saver` CommonJS optimization warning.
- One skipped CSS selector warning.

These are warnings, not build failures.
