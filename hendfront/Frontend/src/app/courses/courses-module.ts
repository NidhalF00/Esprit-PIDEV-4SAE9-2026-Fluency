import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {CoursesRoutingModule} from './courses-routing-module';
import {Courses} from './pages/courses/courses';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [Courses],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CoursesModule { }
