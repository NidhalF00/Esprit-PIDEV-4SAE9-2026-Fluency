import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Applications', link: '/admin/dashboard' },
    { label: 'Add Users', link: '/admin/AddTeacher' },

  ];

  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}