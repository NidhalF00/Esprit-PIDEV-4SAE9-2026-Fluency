import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-teacher-layout',
  standalone: false,
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.css',
})
export class TeacherLayoutComponent {
  protected auth = inject(AuthService);
  private router = inject(Router);

  sidebarOpen = false;

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth > 1080) {
      this.sidebarOpen = false;
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/']);
  }
}
