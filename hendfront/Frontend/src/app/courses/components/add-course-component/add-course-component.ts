import {Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {ConfirmDialogData} from '../../../shared/components/confirmation-dialog/confirmation-dialog';
import {Course} from '../../model/course';

@Component({
  selector: 'app-add-course-component',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './add-course-component.html',
  styleUrl: './add-course-component.css',
  standalone: true,
})
export class AddCourseComponent {

  dataForm: FormGroup;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Course) {
    console.log("****************", data);
    this.dataForm = this.fb.group({
      title: [data.title ?? '', Validators.required],
      content: [data.content ?? '', Validators.required],
      coefficient: [data.coefficient ?? '', Validators.required],
      hoursNumber: [data.hoursNumber ?? '', Validators.required],
    });
  }
}
