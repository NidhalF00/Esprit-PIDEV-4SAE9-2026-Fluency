import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPassword {
  email = '';
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.email = '';
    this.submitted = false;
  }
}
