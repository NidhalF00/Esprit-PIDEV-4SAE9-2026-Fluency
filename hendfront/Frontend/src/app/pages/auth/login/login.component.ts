import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { catchError, finalize, of, take } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import type { UserRole } from '../../../core/auth-role';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private users = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email = '';
  password = '';
  /** Optionnel : id utilisateur Spring (`type="number"` → valeur parfois typée nombre par ngModel). */
  userIdApi: string | number = '';
  role: UserRole = 'student';
  error: string | null = null;
  submitting = false;

  submit(): void {
    this.error = null;
    this.submitting = true;
    let uid: number | undefined;
    const userIdStr = String(this.userIdApi ?? '').trim();
    if (this.role === 'student' && userIdStr) {
      const n = Math.trunc(Number(userIdStr));
      if (Number.isFinite(n) && n > 0) {
        uid = n;
      }
    }
    const res = this.auth.login(this.email, this.password, this.role, uid);
    if (!res.ok) {
      this.submitting = false;
      this.error = res.message;
      return;
    }

    const goAfterLogin = (): void => {
      this.submitting = false;
      const redirect = this.route.snapshot.queryParamMap.get('redirect');
      if (redirect?.startsWith('/') && !redirect.startsWith('//')) {
        void this.router.navigateByUrl(redirect);
        return;
      }
      if (this.role === 'student') {
        void this.router.navigate(['/student/modules']);
      } else {
        void this.router.navigate(['/teacher/dashboard']);
      }
    };

    if (uid != null) {
      this.submitting = true;
      this.users
        .fetchProfileEmail(uid)
        .pipe(
          take(1),
          catchError(() => of(null)),
          finalize(() => goAfterLogin()),
        )
        .subscribe((dbMail) => {
          if (dbMail) {
            this.auth.useEmailFromUserProfile(dbMail);
          }
        });
    } else {
      this.submitting = false;
      goAfterLogin();
    }
  }
}
