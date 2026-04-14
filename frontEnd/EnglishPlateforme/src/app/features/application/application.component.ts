import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  email = '';
  selectedFile!: File;
  isSubmitting = false;

  // 🔥 popup state
  showPopup = false;
  popupMessage = '';
  popupSuccess = false;

  constructor(
    private appService: ApplicationService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submit() {
    if (!this.email || !this.selectedFile) {
      this.openPopup('Please provide email and CV', false);
      return;
    }

    this.isSubmitting = true;

    this.appService.submitApplication(this.email, this.selectedFile)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.openPopup('Application submitted successfully', true);
        },
        error: () => {
          this.isSubmitting = false;
          this.openPopup('Error submitting application', false);
        }
      });
  }

  openPopup(message: string, success: boolean) {
    this.popupMessage = message;
    this.popupSuccess = success;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;

    if (this.popupSuccess) {
      this.router.navigate(['/']);
    }
  }
}