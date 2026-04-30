import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { Certificat } from '../../../models/certificat.model';
import { AuthService } from '../../../services/auth.service';
import { CertificatService } from '../../../services/certificat.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-certificats-list',
  standalone: false,
  templateUrl: './student-certificats-list.component.html',
  styleUrl: './student-certificats-list.component.scss',
})
export class StudentCertificatsListComponent {
  private certificats = inject(CertificatService);
  private router = inject(Router);
  protected auth = inject(AuthService);

  readonly items = signal<Certificat[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    const uid = this.auth.userId();
    if (uid == null) {
      this.loading.set(false);
      this.error.set(null);
      this.items.set([]);
      return;
    }
    this.certificats
      .getByUser(uid)
      .pipe(
        takeUntilDestroyed(),
        timeout(HTTP_TIMEOUT_MS),
        catchError(() => {
          this.error.set('Impossible de charger vos certificats (réseau, délai ou URL API).');
          return of([] as Certificat[]);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (list) => {
          this.error.set(null);
          this.items.set(list);
        },
      });
  }

  back(): void {
    void this.router.navigate(['/student/modules']);
  }

  openDetail(c: Certificat): void {
    if (c.id != null) {
      void this.router.navigate(['/student/certificats', c.id]);
    }
  }

  downloadPdf(c: Certificat): void {
    this.certificats.telechargerPdf(c);
  }

  formatPct(c: Certificat): string {
    const p = c.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return '—';
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }
}
