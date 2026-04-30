import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Courses} from './pages/courses/courses';

const routes: Routes = [
  {path: '', component: Courses, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
