import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/coursesService';
import {DialogService} from '../../../shared/services/dialog.service';
import {MatDialog} from '@angular/material/dialog';
import {AddCourseComponent} from '../../components/add-course-component/add-course-component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  standalone: false
})
export class Courses implements AfterViewInit, OnInit {

  private coursesService = inject(CoursesService);
  private dialogService = inject(DialogService)

  courses = new MatTableDataSource<Course>();
  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = ['title', 'content', 'coefficient', 'hoursNumber', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.courses.paginator = this.paginator;
  }

  ngOnInit() {
    this.getCourses();
  }

  private getCourses() {
    this.coursesService.getCourses().subscribe({
      next: (data) => {
        this.courses.data = data;
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.courses.data = [];
      },
    });
  }

  openDialog() {
    console.log('addCourse')
    const dialogRef = this.dialog.open(AddCourseComponent, {
      data: {},
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(course => {
      if (course) {
        console.log('Données reçues de la popup :', course);
        this.coursesService.addCourse(course).subscribe({
          next: (data) => {
            alert("✅ Course added successfully");
            this.getCourses();
          },
          error: (err) => {
            console.error('Erreur API:', err);
            alert("❌ Error adding course");
          }
        });
      }
    });
  }

  editCourse(course: any) {
    console.log('editCourse', course)
    const dialogRef = this.dialog.open(AddCourseComponent, {
      data: course,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Données reçues de la popup :', result);
        this.coursesService.updateCourse(course.id, result).subscribe({
          next: (data) => {
            alert("✅ Course added successfully");
            this.getCourses();
          },
          error: (err) => {
            console.error('Erreur API:', err);
            alert("❌ Error adding course");
          }
        });
      }
    });
  }

  updateCourse() {
    // this.courses.data = this.courses.data.map(course =>
    //   course.title === this.editingCourse!.title ? this.editingCourse! : course
    // );
    // this.editingCourse = '';
  }

  deleteCourse(course: Course) {
    console.log('deleteCourse', course);

    const dialogData = {
      title: 'Confirm Deletion',
      message: `⚠️ Are you sure you want to delete this course: ${course.title}?`
    };
    this.dialogService.confirm(dialogData).subscribe(result => {
      if (result) {
        this.coursesService.deleteCourse(course.id).subscribe({
          next: (data) => {
            alert("✅ Course deleted successfully");
            this.getCourses();
          },
          error: (err) => {
            console.error('Erreur API:', err);
            alert("❌ Error deleting course");
          }
        });
      } else {
        console.log('Deletion cancelled.');
      }
    });
  }
}
