# Change Log

## 2026-04-13
- Files modified: `AGENTS.md.txt` -> `AGENT.md` (rename), `CHANGE_LOG.md` (created)
- What changed: Renamed the Codex rules file to the requested name and added this change log file.
- Why: User requested the rules file be renamed to `AGENT.md`, and the rules require maintaining `CHANGE_LOG.md` after edits.

### Main page update
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/user/main/main.html`, `frontEnd/EnglishPlateforme/src/app/features/user/main/main.ts`
- What changed: Removed the entire "Choose Your Plan" pricing section (Basic, Premium, VIP cards) from `/main`, and removed the unused `packages` data source from the corresponding component class.
- Why: User requested complete removal of the pricing block from the `/main` page without changing other sections or backend code.

### Main header and CTA update
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/shared/navbar/navbar.ts`, `frontEnd/EnglishPlateforme/src/app/features/shared/navbar/navbar.html`, `frontEnd/EnglishPlateforme/src/app/features/user/main/main.html`
- What changed: Added a `showNavLinks` input (default `true`) to the shared navbar, hid nav links only on `/main` via `<app-navbar [showNavLinks]="false">`, and changed the `/main` CTA "Enroll Now" route from `/signup` to `/register`.
- Why: User requested removing navbar links only on `/main` while preserving other pages, and updating the CTA destination.

### Phase 3.1 tutor students visibility
- Files modified: `backEnd/microservices/User/src/main/java/tn/spring/user/Controllers/UserController.java`, `frontEnd/EnglishPlateforme/src/app/services/user.service.ts`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.ts`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.html`
- What changed: Allowed `TUTOR` role to access `GET /api/users/students`, added `getStudents()` in frontend user service, loaded students in tutor dashboard, and added a simple "Registered Students" section in tutor dashboard UI.
- Why: Phase 3.1 requirement to let tutors see registered students in tutor area without touching quiz/admin/routing flows.

### Prerequisite identity fix for Phase 3.2
- Files modified: `backEnd/microservices/User/src/main/java/tn/spring/user/Services/AuthService.java`, `frontEnd/EnglishPlateforme/src/app/features/user/login/login.ts`
- What changed: Included `user.id` in both standard login and Google login `UserDetailsDTO` responses, and updated frontend login handling to store `USER_ID` only when present. If a tutor logs in without `id`, a clear error is shown and tutor-dependent flow does not continue.
- Why: Ensure `USER_ID` is reliably available before implementing tutor-to-student quiz assignment.

### Phase 3.2 first edit: tutor starts quiz assignment
- Files modified: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Models/QuizAssignment.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Repositories/QuizAssignmentRepository.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/DTO/AssignQuizRequest.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/QuizAssignmentService.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/QuizAssignmentController.java`, `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.ts`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.html`
- What changed: Added a new quiz-assignment backend model/API (`POST /api/quiz-assignments`), added `assignQuiz()` in frontend quiz service, and added tutor dashboard UI (Assign Quiz button + minimal panel) to select a student, load courses, load quizzes by selected course, and submit assignment.
- Why: Implement the first assignment action for tutors while keeping existing cards/schedule, routing, admin flow, and student quiz visibility unchanged.

### Phase 3.3 first edit: student assigned quiz list
- Files modified: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/DTO/AssignedQuizResponse.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Repositories/QuizAssignmentRepository.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/QuizAssignmentService.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/QuizAssignmentController.java`, `frontEnd/EnglishPlateforme/src/app/services/quiz.service.ts`, `frontEnd/EnglishPlateforme/src/app/features/student/student-home/student-home.ts`, `frontEnd/EnglishPlateforme/src/app/features/student/student-home/student-home.html`
- What changed: Added `GET /api/quiz-assignments/student/{studentId}/quizzes` returning lightweight assigned quiz data, added frontend service method to fetch assigned quizzes, and displayed assigned quizzes in student home with links to existing `/quizDetails/:quizId`.
- Why: Enable students to see quizzes assigned to them after login while keeping tutor/admin flows, routing, and old course-based quiz pages unchanged.

### Phase 3.4 minimal fix: quiz-details uses real student identity
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
- What changed: Removed hardcoded student/course behavior in quiz-details. Student identity now comes from `AuthService.getUser()?.id` with `USER_ID` fallback, course id is resolved from assigned quizzes API for the current quiz, status/submit calls use real student id, submit result now sets `quizScore` and `passedQuiz` from backend response, and certificate payload uses resolved `studentId`, `courseId`, and `quizScore`.
- Why: Make assigned-student quiz attempt flow work correctly from `/quizDetails/:quizId` without backend/tutor/admin/routing changes.

### Phase 3.5A frontend wording polish: membership wording in student quiz success flow
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.html`, `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
- What changed: Updated student-facing wording from certificate to membership in passed-state button/popup/title/messages, changed pass success alert to `Welcome, you can generate your membership`, and changed frontend download filename label to `membership.pdf`.
- Why: Align student success flow wording with membership terminology without changing backend or feature logic.

### Phase 3.5B backend wording polish: membership wording in generated email/PDF text
- Files modified: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/EmailService.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Controllers/CertificateController.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/CertificatePdfService.java`
- What changed: Updated backend-visible wording from certificate to membership in email subject/body, attachment/download filename labels, certificate verify endpoint messages, and generated PDF title/body text.
- Why: Keep backend-generated student-facing wording consistent with the new membership terminology while keeping existing endpoints and flow intact.

### Phase 3.5C final wording polish: natural membership phrasing
- Files modified: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/EmailService.java`, `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Services/CertificatePdfService.java`
- What changed: Refined wording to more natural English by changing email subject/body to "membership certificate" phrasing and updating PDF title/body to "CERTIFICATE OF MEMBERSHIP" with a smoother sentence.
- Why: Improve professionalism and readability of membership text without changing logic or endpoints.

### Login hotfix: allow tutor navigation when user id is missing
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/user/login/login.ts`
- What changed: Removed the tutor login hard-stop when `res.user.id` is missing. The flow now logs a warning and continues with role-based navigation.
- Why: Prevent successful tutor logins from being blocked solely by temporary missing `user.id` in login response.

### Tutor dashboard UI focus update: Registered Students at top
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.html`
- What changed: Removed tutor dashboard summary UI blocks (welcome header, subtitle, 3 stats cards, and Today's Schedule table), leaving Registered Students as the top/main content area. Kept Registered Students loading/error/empty/table behavior and Assign Quiz button/modal markup unchanged.
- Why: User requested making Registered Students the primary tutor dashboard content while preserving existing assignment behavior.

### Welcome Quizzes minimal tutor-course model
- Files modified: `backEnd/microservices/Quiz/src/main/java/tn/spring/quiz/Config/DataInitializer.java`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.ts`, `frontEnd/EnglishPlateforme/src/app/features/courses/courses.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`
- What changed: Added startup ensure-if-missing logic for a course named `Welcome Quizzes` (without deleting/modifying existing courses), filtered tutor Assign Quiz modal courses to `Welcome Quizzes` only, filtered tutor `/tutor/courses` view to `Welcome Quizzes` only, and added a tutor-only guard in add-quiz to block quiz creation on non-Welcome course IDs.
- Why: Implement the smallest safe single-course tutor model while keeping assignment logic, student flow, and public courses behavior intact.

### Frontend compile hotfix: course image literal typing
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/courses/courses.ts`
- What changed: Adjusted mapped course `image` typing to a literal (`'book' icon literal via `as const``) so it matches the existing `Course` interface type and fixes Angular TypeScript compile errors.
- Why: Restore frontend compilation with a minimal typing-only fix and no behavior changes.

### Tutor UI redesign: focused Welcome Quizzes experience
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/shared/tutor-sidebar/tutor-sidebar.ts`, `frontEnd/EnglishPlateforme/src/app/features/shared/tutor-sidebar/tutor-sidebar.html`, `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.html`, `frontEnd/EnglishPlateforme/src/app/features/courses/courses.ts`, `frontEnd/EnglishPlateforme/src/app/features/courses/courses.html`
- What changed: Simplified the tutor sidebar to `Dashboard` plus `Create Welcome Quizzes`, redesigned the tutor dashboard so Registered Students is presented as the main polished workspace with stronger student cards and button styling, and added a tutor-only `/tutor/courses` view that removes the public hero/filter UI and shows only the Welcome Quizzes content in a dashboard-matching layout.
- Why: User requested a cleaner tutor-facing UI focused on the Welcome Quizzes workflow without changing backend logic, assignment behavior, student flow, or public courses pages.

### Add-quiz bugfix: keep previous questions visible during creation
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`
- What changed: Removed the local reset of `quiz.questions` after saving a new question. The component now keeps the existing questions array, appends the saved question, and clears the question input.
- Why: Prevent previously created questions from disappearing from the page while continuing to use the existing backend question-create flow.

### Add-quiz bugfix: allow selecting the correct answer during creation
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.html`
- What changed: Added a simple `Correct answer` checkbox in create mode, stored its value in component state, sent that value in the existing add-answer payload, and reset both the answer text and the correct-answer checkbox after a successful save.
- Why: Let tutors mark the correct answer while creating quiz answers without changing backend code or redesigning the page.

### Add-quiz improvement: finish flow after creation
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.html`
- What changed: Added a `Finish Quiz` button that appears once a quiz exists, plus a small `finishQuiz()` method that navigates to `/quizDetails/:quizId` when possible and falls back to `/tutor/courses` otherwise.
- Why: Give tutors a clean final action after step-by-step quiz creation without changing backend behavior or redesigning the whole page.

### Quiz flow polish: finish redirect and delete confirmation
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/add-quiz/add-quiz.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
- What changed: Updated `Finish Quiz` to return to `/quiz/:courseId` using the existing add-quiz route parameter when valid, added a confirmation dialog before quiz deletion, and redirected successful delete operations to `/quiz/:courseId` when a valid course id is available or `/tutor/courses` otherwise.
- Why: Align tutor quiz creation and deletion with the course quiz-list flow while keeping backend and student behavior unchanged.

### Quiz-details frontend fix: top save updates title only
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.html`
- What changed: Restricted the top save action to a title-only payload, stopped replacing the full local quiz object with the partial backend response, updated the local title state explicitly after save, renamed the top button to `Update Title`, and added helper text clarifying that questions and answers are saved individually.
- Why: Remove confusion around the quiz-details save flow while keeping the existing per-question and per-answer save actions unchanged.

### Quiz-details frontend improvement: orchestrated full update button
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.html`
- What changed: Renamed the top button to `Update`, removed the helper text, and changed the top save flow to orchestrate existing title, question, and answer update APIs together. The UI now exits edit mode and copies `editedQuiz` into `quiz` only after all update requests succeed, and shows a single success or error message.
- Why: Provide one low-risk top-level update action for title, question text, answer text, and correct-answer edits without changing backend code or add/delete behavior.

### Quiz-details fix: one correct answer per question
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`, `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.html`
- What changed: Replaced the independent correct-answer checkbox behavior in edit mode with single-choice per-question selection. Choosing one answer as correct now automatically sets all sibling answers in that question to `false`.
- Why: Ensure exactly one correct answer can be selected per question while continuing to use the existing frontend save flow and backend answer update APIs.

### Quiz-details UI cleanup: use only the main Update button
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.html`
- What changed: Removed the small per-question save button and the small per-answer save/check button in edit mode, and added helper text telling tutors to click the main `Update` button to save all changes.
- Why: Simplify the edit experience and avoid confusion now that the main top `Update` flow correctly saves the whole quiz.

### Quiz-details frontend fix: refresh displayed state after update
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/quiz/quiz-details/quiz-details.component.ts`
- What changed: Kept the orchestrated save flow, but after a successful update the component now rebuilds the derived correct-answer display state from the newly copied quiz data and shows the success message `Quiz updated`.
- Why: Ensure the page reflects updated quiz values immediately after clicking `Update`, without needing a manual refresh.

### Tutor dashboard reliability fix: retry student loading once
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/tutor/dashboard/tutor-dashboard.ts`
- What changed: Added a single retry after a short delay when loading registered students fails, and improved the tutor dashboard error message to show session-expired, server-unavailable, or generic fallback text based on the HTTP status.
- Why: Make intermittent student loading more reliable and easier for tutors to understand without changing backend code.

### Student-home redesign: onboarding-first assigned quiz flow
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/student/student-home/student-home.html`
- What changed: Removed the old hero CTA buttons, learning-tools grid, active-enrollments promo block, and private-lesson CTA banner. Replaced the top of the page with a clean onboarding message and placed the existing assigned quizzes section directly under it.
- Why: Align the student home page with the new onboarding logic while keeping the assigned quiz loading and quiz-opening behavior unchanged.

### Student-home UI refresh: hide public nav links and strengthen onboarding layout
- Files modified: `frontEnd/EnglishPlateforme/src/app/features/student/student-home/student-home.html`
- What changed: Hid the public navbar links only on student-home by using the existing `showNavLinks` input, and redesigned the student page with a stronger onboarding hero, subtle visual layers, support chips, small status cards, and a fuller premium-style assigned-quizzes section.
- Why: Make the student home page feel more modern and focused on the onboarding quiz flow without changing any student logic or shared page behavior elsewhere.
