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
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        console.error('Signup failed', err);
      }
    });
  }
}
