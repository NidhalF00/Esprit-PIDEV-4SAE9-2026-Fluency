# PROJECT AUDIT

## What was inspected
- Root instruction/config files: `AGENT.md`, `frontEnd/EnglishPlateforme/package.json`, `frontEnd/EnglishPlateforme/angular.json`, backend `pom.xml` files, all `application.properties`.
- Frontend source: `frontEnd/EnglishPlateforme/src/app/**` (routing, modules, guards, services, major feature components).
- Discovery and gateway: `backEnd/eureka/src/main/**`, `backEnd/Gateway/src/main/**`.
- Microservices: `backEnd/microservices/User/src/main/**`, `backEnd/microservices/Quiz/src/main/**`, and `backEnd/microservices/Course/**`.
- Endpoint scans and annotation scans across controllers/models/repositories/security.

---

## 1) Executive summary

### What this project is (simple)
This repository is an English-learning/job-application platform with:
- Angular frontend (`frontEnd/EnglishPlateforme`)
- Spring Boot backend services (`eureka`, `Gateway`, `User`, `Quiz`)
- PostgreSQL persistence (configured in `User` and `Quiz`)

### Main goal from user point of view
From the UI and APIs, the application supports:
- User authentication/registration (student/admin/tutor)
- Viewing courses and quizzes
- Taking quizzes and checking attempts
- Submitting applications (with CV upload), scheduling interviews, and certificate generation/sending

### Main technologies
- Frontend: Angular 16, RxJS, Bootstrap, Tailwind (`frontEnd/EnglishPlateforme/package.json`)
- Backend: Spring Boot 4.x, Spring MVC, Spring Security, Spring Data JPA, Eureka client/server, PostgreSQL (`backEnd/**/pom.xml`)
- Extra backend libraries:
  - JWT (`io.jsonwebtoken`) in `User`
  - Email (`spring-boot-starter-mail`) and PDF (`itext`) in `Quiz`
  - Google token verification (`google-api-client`) in `User`

### Global architecture (one simple view)
- Browser loads Angular app.
- Angular calls:
  - Gateway for auth/user endpoints (`http://localhost:8090/api/auth`, `http://localhost:8090/api/users`)
  - Quiz service directly for courses/quizzes/applications/certificates (`http://localhost:8056/api/...`)
- Gateway forwards selected calls to `User` and `Quiz` by hardcoded URLs.
- Services register to Eureka, but gateway forwarding is still manual URL-based (not dynamic route discovery).

---

## 2) Full folder and module map

### Root folders
- `frontEnd/EnglishPlateforme`: Angular client application.
- `backEnd/eureka`: service registry server.
- `backEnd/Gateway`: API proxy gateway layer.
- `backEnd/microservices/User`: auth/user management service.
- `backEnd/microservices/Quiz`: quiz/course/application/certificate service.
- `backEnd/microservices/Course`: skeleton/placeholder course service folder (all files currently empty).
- `backEnd/uploads`, `backEnd/microservices/Quiz/uploads`: uploaded document storage paths.

### How backend modules relate
- `eureka`:
  - Runs registry at port `8761` (`backEnd/eureka/src/main/resources/application.properties`).
  - Other services point to it via `eureka.client.service-url.defaultZone`.
- `Gateway`:
  - Runs on `8090` (`backEnd/Gateway/src/main/resources/application.properties`).
  - Exposes `/api/auth`, `/api/users`, `/api/courses`, `/api/quiz`.
  - Forwards requests via `RestTemplate` to hardcoded ports (`8081`, `8056`).
- `User` service:
  - Runs on `8081`.
  - Provides auth and user APIs.
- `Quiz` service:
  - Runs on `8056`.
  - Provides courses, quizzes, attempts, applications, certificates.
- `Course` folder:
  - Exists under `backEnd/microservices/Course`, but files are size `0` (empty); no working implementation is visible from current files.

### Frontend-backend relation
- Frontend environment defines `gatewayUrl = http://localhost:8090` in `frontEnd/EnglishPlateforme/src/environments/environment.ts`.
- Auth and user services use gateway URL.
- Course/quiz/application/certificate frontend services call `http://localhost:8056` directly.

---
## 3) Frontend analysis (Angular)

### App structure
- Bootstrap: `frontEnd/EnglishPlateforme/src/main.ts`
- Root module: `frontEnd/EnglishPlateforme/src/app/app.module.ts`
- Root router: `frontEnd/EnglishPlateforme/src/app/app-routing.module.ts`
- Root template: `frontEnd/EnglishPlateforme/src/app/app.component.html` (`<router-outlet></router-outlet>`)

### Features and shared
- Feature areas in `frontEnd/EnglishPlateforme/src/app/features/`:
  - `user` (login/register/main/forgot-password)
  - `admin` (layout/dashboard/user-list/add-teacher)
  - `student` (student-home)
  - `tutor` (layout/dashboard)
  - `courses`, `quiz`, `application`, `application-list`
  - `shared` (navbar/footer/sidebar/tutor-sidebar)

### Modules
- `SharedModule`: `frontEnd/EnglishPlateforme/src/app/features/shared/shared.module.ts`
- `UserModule`: `frontEnd/EnglishPlateforme/src/app/features/user-module.ts`
- `AdminModule`: `frontEnd/EnglishPlateforme/src/app/features/admin/admin-module.ts`
- `TutorModule`: `frontEnd/EnglishPlateforme/src/app/features/tutor/tutor-module.ts`
- `StudentModule`: `frontEnd/EnglishPlateforme/src/app/features/student/student.module.ts`

Observation:
- `AppModule` imports `TutorModule` and `StudentModule`, but does not import `UserModule` or `AdminModule` (`frontEnd/EnglishPlateforme/src/app/app.module.ts`). Routing still references user/admin components directly.

### Routing structure
- Main routes in `frontEnd/EnglishPlateforme/src/app/app-routing.module.ts`:
  - Public-like: `/login`, `/register`, `/main`, `/courses`, `/coursesDetails/:id`, `/quiz/:id`, `/AddQuiz/:courseId`, `/quizDetails/:id`, `/apply`, `/listApplications`
  - Guarded:
    - `/admin/**` with `authGuard`
    - `/tutor/**` with `authGuard` + `data.roles = ['TUTOR']`
    - `/student-home` with `authGuard` + `data.roles = ['STUDENT']`

### Guard and auth flow
- Guard file: `frontEnd/EnglishPlateforme/src/app/guards/auth.guard.ts`
- Behavior:
  - If not logged in (`AuthService.isLoggedIn()`), redirect to `/login`.
  - If route has `data.roles`, compare with `authService.getUser()?.role`.

### Services and API communication

#### Core services
| File path | Purpose | Key methods | API target visible |
|---|---|---|---|
| `frontEnd/EnglishPlateforme/src/app/services/auth.service.ts` | Login/signup/session state | `login`, `signup`, `getUser`, `logout`, `isLoggedIn` | `${environment.gatewayUrl}/api/auth` |
| `frontEnd/EnglishPlateforme/src/app/services/user.service.ts` | Admin user management | `getAllUsers`, `createUser`, `updateUser`, `blockUser`, `unblockUser`, `deleteUser` | `${environment.gatewayUrl}/api/users` |
| `frontEnd/EnglishPlateforme/src/app/services/courses.service.ts` | Course retrieval | `getAllCourses`, `getCourseById` | Direct `http://localhost:8056/api/courses` |
| `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts` | Quiz CRUD + attempts + Q/A management | `getAllQuizzes`, `getQuizById`, `addQuiz`, `submitQuiz`, `getQuizStatus`, `addQuestion`, `addAnswer`, etc. | Direct `http://localhost:8056/api/quizzes` and `/api/quiz-attempts` |
| `frontEnd/EnglishPlateforme/src/app/services/application.service.ts` | Teacher application submission + admin handling | `submitApplication`, `getAll`, `createSlots`, `scheduleInterview`, status changes | Direct `http://localhost:8056/api/applications` |
| `frontEnd/EnglishPlateforme/src/app/services/certificate.service.ts` | Certificate retrieval/generation | `getCertificate`, `generateAndSend` | Direct `http://localhost:8056/api/certificates` |

#### Important components by feature
| File path | Role in frontend | Key responsibilities | Backend touchpoint visible |
|---|---|---|---|
| `frontEnd/EnglishPlateforme/src/app/features/user/login/login.ts` | Login screen | Sends login payload, stores role/user id in localStorage, routes by role | `AuthService.login` |
| `frontEnd/EnglishPlateforme/src/app/features/user/register/register.ts` | Register screen | Sends signup form to backend | `AuthService.signup` |
| `frontEnd/EnglishPlateforme/src/app/features/admin/dashboard/dashboard.component.ts` | Admin applications board | Lists applications, schedules interview, accepts/rejects, downloads CV | `ApplicationService`, direct GET download URL |
| `frontEnd/EnglishPlateforme/src/app/features/admin/user-list/user-list.ts` | Admin user CRUD UI | list/edit/create/block/unblock/delete users | `UserService` |
| `frontEnd/EnglishPlateforme/src/app/features/courses/courses.ts` | Course listing | Loads all courses and navigates to details | `CourseService` |
| `frontEnd/EnglishPlateforme/src/app/features/courses/course-details/course-details.component.ts` | Course details page | Loads one course and links to quizzes/add-quiz | `CourseService` |
| `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz/quiz.component.ts` | Quiz list per course | loads quizzes by course id | `QuizService.getQuizzesByCourse` |
| `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts` | Quiz attempt/edit/certificate page | load questions/answers, submit quiz, check status, generate certificate | `QuizService`, `CertificateService` |
| `frontEnd/EnglishPlateforme/src/app/features/application/application.component.ts` | Application submit | uploads email + CV | `ApplicationService.submitApplication` |

### Reusable frontend patterns
- Service-based API abstraction under `src/app/services`.
- Route guard (`authGuard`) for protected routes.
- Shared UI module for navbar/footer/sidebars.
- Local storage session usage (`token`, `user`, `ROLE`, `USER_ID`).

### Frontend observations
- API usage is mixed:
  - via gateway for auth/user
  - direct to quiz service for most business data
- `forgot-password` template is full standalone HTML document (contains `<html>`, `<head>`, inline script) in component template:
  - `frontEnd/EnglishPlateforme/src/app/features/user/forgot-password/forgot-password.html`
- Some route links appear inconsistent:
  - `routerLink="/signup"` appears in `frontEnd/EnglishPlateforme/src/app/features/user/main/main.html`, but route is `/register`.

---

## 4) Eureka analysis

### Purpose in this project
Eureka acts as service registry/discovery server.

### Key files
- Startup class: `backEnd/eureka/src/main/java/tn/spring/eureka/EurekaApplication.java`
  - Uses `@EnableEurekaServer`
- Config: `backEnd/eureka/src/main/resources/application.properties`
  - `spring.application.name=eureka`
  - `server.port=8761`
  - `eureka.client.register-with-eureka=false`
  - `eureka.client.fetch-registry=false`

### Registration behavior
- `Gateway`, `User`, and `Quiz` point to Eureka server using:
  - `eureka.client.service-url.defaultZone=http://localhost:8761/eureka`
- Service names found in properties:
  - `Gateway`, `User`, `Quiz`, `eureka`

---

## 5) Gateway analysis

### Purpose
Gateway is implemented as a Spring MVC proxy layer that forwards selected API requests to backend services.

### Key files
- `backEnd/Gateway/src/main/java/tn/spring/gateway/GatewayApplication.java`
- `backEnd/Gateway/src/main/resources/application.properties`
- `backEnd/Gateway/src/main/java/tn/spring/gateway/Config/SecurityConfig.java`
- `backEnd/Gateway/src/main/java/tn/spring/gateway/Controllers/ProxyForwarder.java`
- Proxy controllers:
  - `AuthProxyController.java`
  - `UserProxyController.java`
  - `CoursesProxyController.java`
  - `QuizProxyController.java`

### Routing style (simple language)
- No `spring.cloud.gateway.routes` route table is defined.
- Each controller method receives HTTP request, then calls `ProxyForwarder.forward(...)` with a hardcoded destination URL.

### How requests are forwarded
- `ProxyForwarder` copies selected headers from incoming request:
  - `Authorization`, `Cookie`, `Accept`, `Content-Type`
- Uses `RestTemplate.exchange`.
- Copies back `Set-Cookie` from downstream response.

### Exposed gateway routes (visible)
- `/api/auth/*` forwarded to `http://localhost:8081/api/auth/*`
- `/api/users/*` forwarded to `http://localhost:8081/api/users/*`
- `/api/courses/*` forwarded to `http://localhost:8056/api/courses/*`
- `/api/quiz/*` forwarded to `http://localhost:8056/api/quizzes/*`

### CORS/security
- CORS allows `http://localhost:4200` in both properties and security config.
- Security (`SecurityConfig`) currently permits all requests (`anyRequest().permitAll()`), while explicitly listing some paths as permitAll too.

### Eureka usage in Gateway
- Gateway registers with Eureka and fetches registry via properties.
- Forwarding itself uses fixed URLs (`localhost:8081`, `localhost:8056`), not service-id based load-balanced calls.

---
## 6) Microservices analysis

## 6.1 User microservice (`backEnd/microservices/User`)

### Business role
- Handles authentication, registration, role-based user management, JWT handling, Google login verification, password reset token flow.

### Startup/config
- Startup: `backEnd/microservices/User/src/main/java/tn/spring/user/UserApplication.java`
- Extra test hello endpoint class: `UserRestAPI.java` (`/mic1/users/hello`)
- Main config: `backEnd/microservices/User/src/main/resources/application.properties`
  - App name `User`, port `8081`
  - PostgreSQL datasource (`CandidatAndEval`)
  - `jwt.secret`, `google.clientId`, Eureka URL
  - `spring.jpa.hibernate.ddl-auto=update`

### Main package map
- `Controllers`: auth/user HTTP endpoints.
- `Services`: auth logic, token handling, user operations.
- `Repositories`: JPA repositories (`UserRepos`, `StudentRepos`, `TutorRepos`, `PasswordResetTokenRepo`).
- `Models`: `User`, `Student`, `Tutor`, `PasswordResetToken`, `Address`.
- `DTOs`: request/response contracts for auth and role changes.
- `Filters`: `JwtAuthenticationFilter`.
- `Config`: security and user-detail service.
- `Enums`: `UserRole`, `AvailableStatus`.
- `Exceptions`: custom runtime exception classes.

### Controllers and endpoints
- Auth controller: `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/AuthController.java`
  - `/api/auth/register-client`
  - `/api/auth/login`
  - `/api/auth/ForgotPassword/`
  - `/api/auth/logout`
  - `/api/auth/google`
  - `/api/auth/refresh`
  - `/api/auth/reset-password/confirm`
- User controller: `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/UserController.java`
  - `/api/users/create-employee`
  - `/api/users/create-user`
  - `/api/users/{id}` (PUT/GET)
  - `/api/users/block/{id}`, `/unblock/{id}`
  - `/api/users/role/{id}`
  - `/api/users/admins`, `/students`, `/tutors`

### Services and responsibilities
- `AuthService.java`:
  - login, register, Google login, refresh token, forgot/reset password token flow.
- `JwtService.java`:
  - token generation/validation and refresh-cookie management.
- `UserService.java`:
  - create/update/block/unblock/change role/list users.
- `GoogleTokenVerifierService.java`:
  - verifies Google ID tokens.
- `TokenUtil.java`:
  - random token generation + SHA-256 hashing.

### Repository/data ownership
- `UserRepos`: main `users` table access + role filtering.
- `StudentRepos`, `TutorRepos`: subtype tables.
- `PasswordResetTokenRepo`: reset token storage and revocation updates.

### Internal flow example
- `UserController.createClient` -> `UserService.createStudentOrTutor` -> `StudentRepos`/`TutorRepos.save` -> DB.
- `AuthController.login` -> `AuthService.login` -> `authenticationManager` + `UserRepos` + `JwtService` -> response token/cookie.

---

## 6.2 Quiz microservice (`backEnd/microservices/Quiz`)

### Business role
- Manages courses/quizzes/questions/answers/quiz attempts.
- Handles application submission with CV upload and interview scheduling.
- Generates and emails certificates.

### Startup/config
- Startup: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/QuizApplication.java` (`@EnableDiscoveryClient`)
- Health/demo endpoint: `QuizRestApi.java` (`/mic/quiz/hello`)
- Main config: `backEnd/microservices/Quiz/src/main/resources/application.properties`
  - App name `Quiz`, port `8056`
  - PostgreSQL datasource (`CandidatAndEval`)
  - Email SMTP settings configured
  - Security auto-config exclude line present
  - Eureka registration enabled

### Main package map
- `Controllers`: course, quiz, attempt, application, certificate, email endpoints.
- `Services`: business logic for each domain.
- `Repositories`: JPA access for all entities.
- `Models`: entities for courses/quizzes/attempts/application/certificate/etc.
- `DTO`: submission and request payload classes.
- `Config`: security + data seeding.
- `Enums`: role/status enums.

### Controllers and endpoints (visible)
- `CourseController.java` -> `/api/courses/all`, `/api/courses/getCourseById/{id}`
- `QuizController.java` -> `/api/quizzes/*` (CRUD + question/answer operations)
- `QuizAttemptController.java` -> `/api/quiz-attempts/submit`, `/api/quiz-attempts/status`
- `ApplicationController.java` -> submit/list/schedule/status/download endpoints under `/api/applications`
- `CertificateController.java` -> `/api/certificates/generate-and-send`, `/verify/{id}`, `/by-course/{courseId}/student/{studentId}`
- `EmailSend.java` -> `/send-email`

### Services and responsibilities
- `QuizService.java`: quiz CRUD + loading questions/answers.
- `QuestionService.java`: add/update/delete question and answer entities.
- `QuizAttemptService.java`: grading, attempts storage, completion check, certificate trigger.
- `CourseService.java`: read courses.
- `ApplicationService.java`: application status transitions and notification triggers.
- `CertificatePdfService.java`: certificate PDF rendering + QR generation.
- `EmailService.java`: plain email + certificate attachment email.

### Repositories and entities
- Repositories:
  - `CourseRepository`, `QuizRepository`, `QuestionRepository`, `AnswerRepository`
  - `QuizAttemptRepository`, `ApplicationRepository`, `InterviewSlotRepository`, `CertificateRepository`, `ContentRepository`
- Core entity chain:
  - `Course` -> many `Quiz`
  - `Quiz` -> many `Question`
  - `Question` -> many `Answer`
  - `QuizAttempt` links `Quiz` + `studentId`
  - `Certificate` links `Course` + `studentId`
  - `Application` + related `InterviewSlot`

### Internal flow example
- `QuizController.addQuestion` -> `QuestionService.addQuestion` -> `QuestionRepository.save` -> DB.
- `QuizAttemptController.submitQuiz` -> `QuizAttemptService.submitQuiz` -> `QuizAttemptRepository.save` (+ possibly `CertificateRepository.save`) -> DB.
- `ApplicationController.submitApplication` writes file to `uploads/`, then calls `ApplicationService.submitApplication` -> `ApplicationRepository.save`.

### File upload handling
- CV uploads handled in `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/ApplicationController.java` under `/api/applications/submit`.
- Files are written under relative folder `uploads/`.

---

## 6.3 Course microservice folder (`backEnd/microservices/Course`)

### Current state from files
- Folder has standard microservice-like structure (`Controllers`, `Services`, `Repositories`, `Models`, `DTO`, etc.).
- Every file in this folder is currently empty (size `0` bytes), including:
  - `CourseApplication.java`
  - `CourseRestApi.java`
  - all controllers/services/models/repos/dto/mapper/config/exception files.
- No `pom.xml` is present in this folder.

### Conclusion
- Functional behavior for this module is **unclear from current files**.
- Course endpoints actually used by frontend/backend are currently implemented in the `Quiz` service (`/api/courses/...` in `Quiz` module).

---

## 7) API and communication map

### High-level flow
- Browser -> Angular app (`frontEnd/EnglishPlateforme`)
- Angular -> Gateway for auth/user
- Angular -> Quiz service directly for course/quiz/application/certificate
- Gateway -> forwards to User/Quiz via hardcoded localhost URLs
- Services -> PostgreSQL `CandidatAndEval`

### Route map table (key routes)
| Frontend source file | Called URL/path | Gateway route or direct target | Backend controller file |
|---|---|---|---|
| `frontEnd/EnglishPlateforme/src/app/services/auth.service.ts` | `POST /api/auth/login` | via `http://localhost:8090` | `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/AuthController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/auth.service.ts` | `POST /api/auth/register-client` | via `http://localhost:8090` | `.../AuthController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/user.service.ts` | `/api/users/*` | via `http://localhost:8090` | `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/UserController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/courses.service.ts` | `GET http://localhost:8056/api/courses/all` | direct to Quiz service | `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/CourseController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/courses.service.ts` | `GET /api/courses/getCourseById/{id}` | direct to Quiz service | `.../CourseController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts` | `/api/quizzes/*` | direct to Quiz service | `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/QuizController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts` | `/api/quiz-attempts/*` | direct to Quiz service | `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/QuizAttemptController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/application.service.ts` | `/api/applications/*` | direct to Quiz service | `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/ApplicationController.java` |
| `frontEnd/EnglishPlateforme/src/app/services/certificate.service.ts` | `/api/certificates/*` | direct to Quiz service | `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/CertificateController.java` |
| `frontEnd/EnglishPlateforme/src/app/features/admin/dashboard/dashboard.component.ts` | `GET /api/applications/download/{id}` | direct to Quiz service | `.../ApplicationController.java` |

### Important clarification
- Frontend does **not** use gateway for most domain APIs (courses/quizzes/applications/certificates). It calls `8056` directly.

---

## 8) Authentication and authorization

### Frontend side
- Files:
  - `frontEnd/EnglishPlateforme/src/app/services/auth.service.ts`
  - `frontEnd/EnglishPlateforme/src/app/guards/auth.guard.ts`
  - `frontEnd/EnglishPlateforme/src/app/app-routing.module.ts`
- Token handling:
  - Access token stored in localStorage key `token`.
  - User object stored in localStorage key `user`.
  - Role also stored separately as `ROLE` in login component.
- Route authorization:
  - Guard checks login status and route `data.roles`.
  - Admin/tutor/student-home routes guarded.

### Backend side (User service)
- Security config:
  - `backEnd/microservices/User/src/main/java/tn/spring/user/Config/WebSecurityConfig.java`
- JWT filter:
  - `backEnd/microservices/User/src/main/java/tn/spring/user/Filters/JwtAuthenticationFilter.java`
- JWT service:
  - `backEnd/microservices/User/src/main/java/tn/spring/user/Services/JwtService.java`
- Auth API:
  - `AuthController.java`
- Roles:
  - Enum in `.../Enums/UserRole.java`: `SUPER_ADMIN`, `ADMIN`, `STUDENT`, `TUTOR`
- Method-level authorization:
  - `@PreAuthorize` on user management endpoints in `UserController.java`.

### Backend side (Gateway and Quiz)
- Gateway security (`SecurityConfig`) effectively permits all requests.
- Quiz security config permits all requests (`requestMatchers("/**").permitAll()`).
- Quiz has `@PreAuthorize` annotations in `QuizController`, but no clear method-security enabling annotation was found in current Quiz files; enforcement is **unclear from current files**.

---
## 9) Database and data model

### Database config
- User service datasource:
  - `backEnd/microservices/User/src/main/resources/application.properties`
  - PostgreSQL: `jdbc:postgresql://localhost:5432/CandidatAndEval`
- Quiz service datasource:
  - `backEnd/microservices/Quiz/src/main/resources/application.properties`
  - Same PostgreSQL URL/database.

### Migration files
- No SQL migration files (`.sql`, Flyway, Liquibase config) found in current files.
- Schema management appears to rely on `spring.jpa.hibernate.ddl-auto=update`.

### Data ownership by service
- User service:
  - Owns users/auth entities (`User`, `Student`, `Tutor`, `PasswordResetToken`).
- Quiz service:
  - Owns course/quiz/application/certificate entities.

### Key relationships (simple)
- In Quiz service:
  - One `Course` -> many `Quiz`
  - One `Quiz` -> many `Question`
  - One `Question` -> many `Answer`
  - Attempts and certificates linked by `studentId` UUID + related course/quiz.
- In User service:
  - `Student` and `Tutor` extend `User` (joined inheritance).

### Coupling observation
- User and Quiz services share same physical DB name (`CandidatAndEval`) and both define `users`-related model classes (Quiz also includes `User`, `Student`, `Tutor` classes). This indicates tight data coupling.

---

## 10) End-to-end feature tracing

### A) Login/Register
1. Frontend screen:
   - Login: `frontEnd/EnglishPlateforme/src/app/features/user/login/login.ts`
   - Register: `frontEnd/EnglishPlateforme/src/app/features/user/register/register.ts`
2. Frontend service:
   - `frontEnd/EnglishPlateforme/src/app/services/auth.service.ts`
3. Gateway route:
   - `/api/auth/login`, `/api/auth/register-client`
   - `backEnd/Gateway/src/main/java/tn/spring/gateway/Controllers/AuthProxyController.java`
4. User controller:
   - `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/AuthController.java`
5. Service logic:
   - `backEnd/microservices/User/src/main/java/tn/spring/user/Services/AuthService.java`
6. Repositories/entities:
   - `UserRepos`, `StudentRepos`, `TutorRepos`, `PasswordResetTokenRepo`
   - Models under `.../Models/*`

### B) Courses browsing
1. Frontend:
   - `frontEnd/EnglishPlateforme/src/app/features/courses/courses.ts`
   - `frontEnd/EnglishPlateforme/src/app/features/courses/course-details/course-details.component.ts`
2. Frontend service:
   - `frontEnd/EnglishPlateforme/src/app/services/courses.service.ts`
3. Backend target:
   - Direct `http://localhost:8056/api/courses/*`
4. Controller/service/repo:
   - `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/CourseController.java`
   - `.../Services/CourseService.java`
   - `.../Repositories/CourseRepository.java`

### C) Quiz lifecycle (view, edit, submit)
1. Frontend:
   - `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz/quiz.component.ts`
   - `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
   - `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`
2. Frontend service:
   - `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts`
3. Backend controller:
   - `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/QuizController.java`
   - `.../Controllers/QuizAttemptController.java`
4. Services:
   - `QuizService`, `QuestionService`, `QuizAttemptService`
5. Data layer:
   - `QuizRepository`, `QuestionRepository`, `AnswerRepository`, `QuizAttemptRepository`

### D) Applications and admin review
1. Frontend:
   - Candidate submit: `frontEnd/EnglishPlateforme/src/app/features/application/application.component.ts`
   - Admin review: `frontEnd/EnglishPlateforme/src/app/features/admin/dashboard/dashboard.component.ts`
2. Frontend service:
   - `frontEnd/EnglishPlateforme/src/app/services/application.service.ts`
3. Backend controller:
   - `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/ApplicationController.java`
4. Service/data:
   - `ApplicationService`, `ApplicationRepository`, `InterviewSlotRepository`
5. File storage:
   - Upload path handling in `ApplicationController`, saves under `uploads/`.

### E) Certificate generation
1. Frontend:
   - `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
   - `frontEnd/EnglishPlateforme/src/app/services/certificate.service.ts`
2. Backend controller:
   - `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/CertificateController.java`
3. Business logic:
   - `CertificatePdfService` generates PDF
   - `EmailService` sends attachment
4. Repository/entity:
   - `CertificateRepository` and `Certificate` model

---

## 11) Configuration inventory

### Frontend
- `frontEnd/EnglishPlateforme/package.json`
  - npm scripts (`start`, `build`, `test`) and frontend dependencies.
- `frontEnd/EnglishPlateforme/angular.json`
  - Angular build/serve/test configuration and style assets.
- `frontEnd/EnglishPlateforme/src/environments/environment.ts`
  - `gatewayUrl` for auth/user API base.

### Eureka
- `backEnd/eureka/pom.xml`
  - Eureka server dependency.
- `backEnd/eureka/src/main/resources/application.properties`
  - service name, port, and non-client Eureka settings.

### Gateway
- `backEnd/Gateway/pom.xml`
  - MVC/security/eureka/loadbalancer dependencies.
- `backEnd/Gateway/src/main/resources/application.properties`
  - app name, port, CORS, Eureka URL, JWT/Google properties.
- `backEnd/Gateway/src/main/java/tn/spring/gateway/Config/SecurityConfig.java`
  - CORS and security filter chain.

### User service
- `backEnd/microservices/User/pom.xml`
  - JPA/security/JWT/google/postgres dependencies.
- `backEnd/microservices/User/src/main/resources/application.properties`
  - datasource, JWT secret, Google client id, Eureka, JPA behavior.

### Quiz service
- `backEnd/microservices/Quiz/pom.xml`
  - JPA/security/mail/pdf/QR/postgres dependencies.
- `backEnd/microservices/Quiz/src/main/resources/application.properties`
  - datasource, eureka, mail SMTP settings, security auto-config exclusion.

### Root instruction file
- `AGENT.md`
  - local working instructions for edits/process.

---

## 12) Risks, weak spots, and technical observations (report only)

### Hardcoded URLs/ports/credentials
- Multiple frontend services hardcode `http://localhost:8056` instead of using environment config:
  - `courses.service.ts`, `quiz.service.ts`, `application.service.ts`, `certificate.service.ts`
- Backend has hardcoded secrets and credentials in properties:
  - JWT secret in Gateway/User
  - DB password (`postgres/0000`)
  - SMTP username/password in Quiz
- Certificate QR verification URL points to `http://localhost:8080/...` in `CertificatePdfService`, while service runs on `8056` in current config.

### Coupling and architecture concerns
- Gateway forwarding uses hardcoded host:ports, not service-id routing from Eureka.
- Frontend bypasses gateway for most business APIs.
- User and Quiz share same database and overlapping user-like models; microservice boundaries are weak.
- Course microservice folder is present but empty; course functionality lives in Quiz service.

### Contract mismatches
- Frontend registration forms use `fullName`, but backend `RegisterClientRequest` expects `name` and `lastName`.
- `UserService.deleteUser()` exists in frontend, but no `@DeleteMapping` found in User controller or Gateway user proxy.
- `main.html` links to `/signup`, but route defined is `/register`.
- `CourseDetailsComponent` reads `courseId` route param, but route is `coursesDetails/:id`; `courseId` can be invalid.

### Auth/security inconsistencies
- Quiz service effectively permits all routes; `@PreAuthorize` presence may not enforce as expected (unclear from current files).
- User security permits `/api/users/**` at HTTP level while also using `@PreAuthorize`; behavior depends on method security/auth context.
- Refresh cookie path is `/auth`, while API path is `/api/auth/*`; cookie transmission behavior can be inconsistent.
- `QuizDetailsComponent` uses hardcoded `studentId`.

### UI/maintainability concerns
- `forgot-password.html` is a full standalone HTML page inside Angular component template.
- Some feature modules are declared but not clearly wired via imports in root module.
- `Course` module files are empty, which is confusing for learners/presenters.

### Documentation gap
- No backend README/architecture documentation found in current files.
- No migration scripts found; DB evolution strategy is implicit via JPA auto-update.

---

## 13) Teacher-presentation section (student-friendly)

### Simple architecture explanation
- This project uses a frontend Angular app and multiple backend Spring Boot services.
- Eureka is a directory of services.
- Gateway is a single entry point for some APIs.
- User service handles authentication and user management.
- Quiz service handles courses, quizzes, applications, and certificates.

### Why Eureka is used
- To register services (`User`, `Quiz`, `Gateway`) in one registry (`eureka`), so service instances can be discoverable.
- In this codebase, registration exists, but request forwarding is still mostly hardcoded by URL.

### Why Gateway is used
- To centralize auth/user API calls from frontend.
- To forward requests and preserve headers/cookies.
- To provide one access point (`localhost:8090`) for selected backend routes.

### Why microservices are separated
- Separation by business concerns:
  - User/auth concerns in `User`
  - Learning/quiz/application concerns in `Quiz`
  - Registry in `eureka`
  - Proxy layer in `Gateway`

### How frontend reaches backend
- Login/register/user management -> Gateway -> User service.
- Courses/quizzes/applications/certificates -> frontend direct -> Quiz service.

### One end-to-end example (simple)
1. Student opens quiz page in Angular.
2. Angular calls `QuizService` (`/api/quizzes/...` and `/api/quiz-attempts/submit` on port `8056`).
3. `QuizController` and `QuizAttemptController` receive request.
4. Services compute score and save attempt via repositories.
5. If course completion criteria are met, certificate logic can create certificate record.

---

## Final note
This audit is based only on current repository files. Where implementation is missing or contradictory, the report explicitly marks it as `unclear from current files`.
