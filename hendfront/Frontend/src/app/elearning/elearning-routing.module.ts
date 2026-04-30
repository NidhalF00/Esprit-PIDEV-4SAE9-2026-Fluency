import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guestOnly, requireStudent, requireTeacher } from '../guards/auth.guard';
import { LandingHomeComponent } from '../front-office/landing-home/landing-home.component';
import { StudentLayoutComponent } from '../layouts/student-layout/student-layout.component';
import { TeacherLayoutComponent } from '../layouts/teacher-layout/teacher-layout.component';
import { ModuleListComponent } from '../pages/modules/module-list/module-list.component';
import { ModuleFormComponent } from '../pages/modules/module-form/module-form.component';
import { ModuleDetailComponent } from '../pages/modules/module-detail/module-detail.component';
import { CoursListComponent } from '../pages/cours/cours-list/cours-list.component';
import { CoursFormComponent } from '../pages/cours/cours-form/cours-form.component';
import { CoursDetailComponent } from '../pages/cours/cours-detail/cours-detail.component';
import { QuizListComponent } from '../pages/quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from '../pages/quizzes/quiz-form/quiz-form.component';
import { QuizDetailComponent } from '../pages/quizzes/quiz-detail/quiz-detail.component';
import { QuestionListComponent } from '../pages/questions/question-list/question-list.component';
import { QuestionFormComponent } from '../pages/questions/question-form/question-form.component';
import { QuestionDetailComponent } from '../pages/questions/question-detail/question-detail.component';
import { ReponseListComponent } from '../pages/reponses/reponse-list/reponse-list.component';
import { ReponseFormComponent } from '../pages/reponses/reponse-form/reponse-form.component';
import { ReponseDetailComponent } from '../pages/reponses/reponse-detail/reponse-detail.component';
import { QuizPassComponent } from '../pages/quizzes/quiz-pass/quiz-pass.component';
import { RecommandationsModulesComponent } from '../pages/recommandations/recommandations-modules.component';
import { RecommandationsCoursComponent } from '../pages/recommandations/recommandations-cours.component';
import { RechercheModulesComponent } from '../pages/recherche/recherche-modules.component';
import { RechercheCoursComponent } from '../pages/recherche/recherche-cours.component';
import { DashboardAdminComponent } from '../pages/admin/dashboard-admin.component';
import { StudentModulesComponent } from '../pages/student/student-modules/student-modules.component';
import { StudentModuleCoursComponent } from '../pages/student/student-module-cours/student-module-cours.component';
import { StudentAllCoursComponent } from '../pages/student/student-all-cours/student-all-cours.component';
import { StudentRecommandationsComponent } from '../pages/student/student-recommandations/student-recommandations.component';
import { StudentRechercheComponent } from '../pages/student/student-recherche/student-recherche.component';
import { StudentStatistiquesComponent } from '../pages/student/student-statistiques/student-statistiques.component';
import { StudentQuizResultComponent } from '../pages/student/student-quiz-result/student-quiz-result.component';
import { StudentCertificatsListComponent } from '../pages/student/student-certificats-list/student-certificats-list.component';
import { StudentCertificatDetailComponent } from '../pages/student/student-certificat-detail/student-certificat-detail.component';
import { TeacherDashboardComponent } from '../pages/teacher/teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  { path: '', component: LandingHomeComponent },
  {
    path: 'login',
    loadComponent: () => import('../pages/auth/login/login.component').then((m) => m.LoginComponent),
    canActivate: [guestOnly],
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    canActivate: [requireStudent],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'modules' },
      { path: 'modules', component: StudentModulesComponent },
      { path: 'cours', component: StudentAllCoursComponent },
      { path: 'modules/:moduleId/cours', component: StudentModuleCoursComponent },
      { path: 'quiz/:id', component: QuizPassComponent },
      { path: 'resultat', component: StudentQuizResultComponent },
      { path: 'certificats', component: StudentCertificatsListComponent },
      { path: 'certificats/:id', component: StudentCertificatDetailComponent },
      { path: 'recommandations', component: StudentRecommandationsComponent },
      { path: 'recherche', component: StudentRechercheComponent },
      { path: 'statistiques', component: StudentStatistiquesComponent },
    ],
  },
  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    canActivate: [requireTeacher],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: TeacherDashboardComponent },
      { path: 'modules/new', component: ModuleFormComponent },
      { path: 'modules/edit/:id', component: ModuleFormComponent },
      { path: 'modules/:id', component: ModuleDetailComponent },
      { path: 'modules', component: ModuleListComponent },
      { path: 'cours/new', component: CoursFormComponent },
      { path: 'cours/edit/:id', component: CoursFormComponent },
      { path: 'cours/:id', component: CoursDetailComponent },
      { path: 'cours', component: CoursListComponent },
      { path: 'quizzes/new', component: QuizFormComponent },
      { path: 'quizzes/edit/:id', component: QuizFormComponent },
      { path: 'quizzes/:id/pass', component: QuizPassComponent },
      { path: 'quizzes/:id', component: QuizDetailComponent },
      { path: 'quizzes', component: QuizListComponent },
      { path: 'questions/new', component: QuestionFormComponent },
      { path: 'questions/edit/:id', component: QuestionFormComponent },
      { path: 'questions/:id', component: QuestionDetailComponent },
      { path: 'questions', component: QuestionListComponent },
      { path: 'reponses/new', component: ReponseFormComponent },
      { path: 'reponses/edit/:id', component: ReponseFormComponent },
      { path: 'reponses/:id', component: ReponseDetailComponent },
      { path: 'reponses', component: ReponseListComponent },
    ],
  },

  /* Routes legacy (hors espaces role-based) */
  { path: 'modules/new', component: ModuleFormComponent },
  { path: 'modules/edit/:id', component: ModuleFormComponent },
  { path: 'modules/:id', component: ModuleDetailComponent },
  { path: 'modules', component: ModuleListComponent },
  { path: 'cours/new', component: CoursFormComponent },
  { path: 'cours/edit/:id', component: CoursFormComponent },
  { path: 'cours/:id', component: CoursDetailComponent },
  { path: 'cours', component: CoursListComponent },
  { path: 'quizzes/new', component: QuizFormComponent },
  { path: 'quizzes/edit/:id', component: QuizFormComponent },
  { path: 'quizzes/:id/pass', component: QuizPassComponent },
  { path: 'quizzes/:id', component: QuizDetailComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'recommandations/modules', component: RecommandationsModulesComponent },
  { path: 'recommandations/cours', component: RecommandationsCoursComponent },
  { path: 'recherche/modules', component: RechercheModulesComponent },
  { path: 'recherche/cours', component: RechercheCoursComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'questions/new', component: QuestionFormComponent },
  { path: 'questions/edit/:id', component: QuestionFormComponent },
  { path: 'questions/:id', component: QuestionDetailComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'reponses/new', component: ReponseFormComponent },
  { path: 'reponses/edit/:id', component: ReponseFormComponent },
  { path: 'reponses/:id', component: ReponseDetailComponent },
  { path: 'reponses', component: ReponseListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElearningRoutingModule {}
