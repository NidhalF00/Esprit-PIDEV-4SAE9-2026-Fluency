import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student-layout',
  standalone: false,
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css',
})
export class StudentLayoutComponent {
  protected auth = inject(AuthService);
  private router = inject(Router);

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/']);
  }
}
