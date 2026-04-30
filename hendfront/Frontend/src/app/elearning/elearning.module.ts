import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ElearningRoutingModule } from './elearning-routing.module';
import { StudentLayoutComponent } from '../layouts/student-layout/student-layout.component';
import { TeacherLayoutComponent } from '../layouts/teacher-layout/teacher-layout.component';
import { FoNavbarComponent } from '../front-office/fo-navbar/fo-navbar.component';
import { FoFooterComponent } from '../front-office/fo-footer/fo-footer.component';
import { LandingHomeComponent } from '../front-office/landing-home/landing-home.component';
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
import { StudentCertificatCelebrationComponent } from '../pages/student/student-certificat-celebration/student-certificat-celebration.component';
import { TeacherDashboardComponent } from '../pages/teacher/teacher-dashboard/teacher-dashboard.component';

@NgModule({
  declarations: [
    FoNavbarComponent,
    FoFooterComponent,
    LandingHomeComponent,
    StudentLayoutComponent,
    TeacherLayoutComponent,
    StudentModulesComponent,
    StudentModuleCoursComponent,
    StudentAllCoursComponent,
    StudentRecommandationsComponent,
    StudentRechercheComponent,
    StudentStatistiquesComponent,
    StudentQuizResultComponent,
    StudentCertificatsListComponent,
    StudentCertificatDetailComponent,
    TeacherDashboardComponent,
    ModuleListComponent,
    ModuleFormComponent,
    ModuleDetailComponent,
    CoursListComponent,
    CoursFormComponent,
    CoursDetailComponent,
    QuizListComponent,
    QuizFormComponent,
    QuizDetailComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionDetailComponent,
    ReponseListComponent,
    ReponseFormComponent,
    ReponseDetailComponent,
    QuizPassComponent,
    RecommandationsModulesComponent,
    RecommandationsCoursComponent,
    RechercheModulesComponent,
    RechercheCoursComponent,
    DashboardAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ElearningRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    StudentCertificatCelebrationComponent,
  ],
})
export class ElearningModule {}
