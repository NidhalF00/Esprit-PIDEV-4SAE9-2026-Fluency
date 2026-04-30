import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { workspacePath } from '../../../core/router-utils';
import { Cours } from '../../../models/cours.model';
import { CoursService } from '../../../services/cours.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-cours-detail',
  standalone: false,
  templateUrl: './cours-detail.component.html',
  styleUrl: './cours-detail.component.css',
})
export class CoursDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private coursService = inject(CoursService);

  cours: Cours | null = null;
  readonly loading = signal(true);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.cours = null;
        }),
        switchMap((id) => {
          if (!id || !Number.isFinite(+id)) {
            this.loading.set(false);
            void this.router.navigate(workspacePath(this.router, 'cours'));
            return EMPTY;
          }
          return this.coursService.getById(+id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.loading.set(false);
              alert('Cours introuvable.');
              void this.router.navigate(workspacePath(this.router, 'cours'));
              return EMPTY;
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: (c) => {
          this.cours = c;
        },
      });
  }

  back(): void {
    void this.router.navigate(workspacePath(this.router, 'cours'));
  }

  edit(): void {
    if (this.cours?.id != null) {
      void this.router.navigate(workspacePath(this.router, 'cours', 'edit', this.cours.id));
    }
  }
}
