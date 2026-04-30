import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { workspacePath } from '../../../core/router-utils';
import { Reponse } from '../../../models/reponse.model';
import { ReponseService } from '../../../services/reponse.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-reponse-detail',
  standalone: false,
  templateUrl: './reponse-detail.component.html',
  styleUrl: './reponse-detail.component.css',
})
export class ReponseDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reponseService = inject(ReponseService);

  reponse: Reponse | null = null;
  readonly loading = signal(true);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.reponse = null;
        }),
        switchMap((id) => {
          if (!id || !Number.isFinite(+id)) {
            this.loading.set(false);
            void this.router.navigate(workspacePath(this.router, 'reponses'));
            return EMPTY;
          }
          return this.reponseService.getById(+id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.loading.set(false);
              alert('Réponse introuvable.');
              void this.router.navigate(workspacePath(this.router, 'reponses'));
              return EMPTY;
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: (r) => {
          this.reponse = r;
        },
      });
  }

  back(): void {
    void this.router.navigate(workspacePath(this.router, 'reponses'));
  }

  edit(): void {
    if (this.reponse?.id != null) {
      void this.router.navigate(workspacePath(this.router, 'reponses', 'edit', this.reponse.id));
    }
  }
}
