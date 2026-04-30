import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { Certificat } from '../../../models/certificat.model';
import { AuthService } from '../../../services/auth.service';
import { CertificatService } from '../../../services/certificat.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-certificat-detail',
  standalone: false,
  templateUrl: './student-certificat-detail.component.html',
  styleUrl: './student-certificat-detail.component.scss',
})
export class StudentCertificatDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private certificats = inject(CertificatService);
  protected auth = inject(AuthService);

  readonly cert = signal<Certificat | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
        }),
        switchMap((raw) => {
          const id = raw != null ? Math.trunc(Number(raw)) : NaN;
          if (!Number.isFinite(id) || id <= 0) {
            this.error.set('Identifiant de certificat invalide.');
            this.cert.set(null);
            this.loading.set(false);
            return EMPTY;
          }
          return this.certificats.getById(id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap({
              next: (c) => {
                this.cert.set(c);
                this.error.set(null);
              },
            }),
            catchError(() => {
              this.error.set('Certificat introuvable ou serveur indisponible.');
              this.cert.set(null);
              return of(null);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  back(): void {
    void this.router.navigate(['/student/certificats']);
  }

  downloadPdf(): void {
    const c = this.cert();
    if (c) {
      this.certificats.telechargerPdf(c);
    }
  }

  formatPct(c: Certificat): string {
    const p = c.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return '—';
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }

  ownerMismatch(): boolean {
    const uid = this.auth.userId();
    const c = this.cert();
    if (uid == null || c?.userId == null) {
      return false;
    }
    return c.userId !== uid;
  }
}
