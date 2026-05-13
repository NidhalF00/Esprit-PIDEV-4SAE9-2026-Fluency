import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './features/shared/shared.module';
import { CoursesComponent } from './features/courses/courses';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './features/user-module';
import { AdminModule } from './features/admin/admin-module';
import { TutorModule } from './features/tutor/tutor-module';
import { StudentModule } from './features/student/student.module';
import { QuizComponent } from './features/quiz/quiz/quiz.component';
import { AddQuizComponent } from './features/quiz/add-quiz/add-quiz.component';
import { CourseDetailsComponent } from './features/courses/course-details/course-details.component';
import { QuizDetailsComponent } from './features/quiz/quiz-details/quiz-details.component';
import { ApplicationComponent } from './features/application/application.component';
import { ApplicationListComponent } from './features/application-list/application-list.component';
import { AddTeacherComponent } from './features/admin/add-teacher/add-teacher.component';
import { TutorCvBuilderComponent } from './features/tutor-cv-builder/tutor-cv-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    QuizComponent,
    AddQuizComponent,
    CourseDetailsComponent,
    QuizDetailsComponent,
    ApplicationComponent,
    ApplicationListComponent,
    AddTeacherComponent,
    TutorCvBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    AdminModule,
    ReactiveFormsModule,
    RouterModule ,
    HttpClientModule,
    TutorModule,
    StudentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
