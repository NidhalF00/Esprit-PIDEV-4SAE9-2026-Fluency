import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Cleaned path

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const loginData = {
      login: this.loginForm.value.email,
      password: this.loginForm.value.password,
      rememberMe: false
    };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        this.loading = false;

        const role = res.user?.role;
        if (!role) {
          this.errorMessage = 'Login response is incomplete. Please try again.';
          return;
        }

        localStorage.setItem('ROLE', role);
        const userId = res.user?.id;
        if (userId) {
          localStorage.setItem('USER_ID', userId);
        }

        if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        } else if (role === 'TUTOR') {
          this.router.navigate(['/tutor/dashboard']);
        } else if (role === 'STUDENT') {
          this.router.navigate(['/student-home']);
        } else {
          this.errorMessage = 'Your account role is not supported.';
        }
      },
      error: (err: any) => {
        this.loading = false;
        if (err?.status === 400 || err?.status === 401 || err?.status === 403) {
          this.errorMessage = 'Invalid email or password.';
        } else if (err?.status === 0 || err?.status >= 500) {
          this.errorMessage = 'Login service is currently unavailable.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      }
    });
  }
}
