import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);
  protected auth = inject(AuthService);

  /**
   * Masque la barre globale sur la landing, login et espaces avec layout dédié
   * (front office, student, teacher).
   */
  protected readonly hideGlobalHeader = signal(this.shouldHideGlobalHeader());

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.hideGlobalHeader.set(this.shouldHideGlobalHeader()));
  }

  private shouldHideGlobalHeader(): boolean {
    const path = this.router.url.split('?')[0].split('#')[0];
    if (path === '/' || path === '') {
      return true;
    }
    if (path === '/login') {
      return true;
    }
    if (path.startsWith('/student') || path.startsWith('/teacher')) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/']);
  }
}
