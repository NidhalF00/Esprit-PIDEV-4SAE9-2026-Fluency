import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fo-navbar',
  standalone: false,
  templateUrl: './fo-navbar.component.html',
  styleUrl: './fo-navbar.component.css',
})
export class FoNavbarComponent {
  private router = inject(Router);
  menuOpen = false;

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth > 960) {
      this.menuOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  demarrer(): void {
    this.closeMenu();
    void this.router.navigate(['/modules']);
  }

  connexion(): void {
    this.closeMenu();
    void this.router.navigate(['/login']);
  }
}
