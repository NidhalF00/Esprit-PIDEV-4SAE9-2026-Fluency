import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedRole: string = 'STUDENT';
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['STUDENT', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }

  setRole(role: string) {
    this.selectedRole = role.toUpperCase();
    this.registerForm.patchValue({ role: this.selectedRole });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { fullName, email, phone, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const registrationPayload = {
      name: fullName.trim(),
      lastName: '',
      prefix: '',
      email,
      phone,
      password,
      role: 'STUDENT'
    };

    this.authService.signup(registrationPayload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMessage = this.getRegistrationErrorMessage(err);
      }
    });
  }

  private getRegistrationErrorMessage(err: any): string {
    const errorText = this.extractErrorText(err).toLowerCase();

    if (errorText.includes('email')) {
      return 'This email is already used. Please sign in or use another email.';
    }

    if (errorText.includes('phone')) {
      return 'This phone number is already used. Please use another phone number.';
    }

    if (err?.status === 409) {
      return 'This email or phone number is already used. Please check your information.';
    }

    return 'Registration failed. Please try again.';
  }

  private extractErrorText(err: any): string {
    const error = err?.error;

    if (!error) {
      return '';
    }

    if (typeof error === 'string') {
      return error;
    }

    return [
      error.message,
      error.detail,
      error.error
    ].filter(Boolean).join(' ');
  }
}
