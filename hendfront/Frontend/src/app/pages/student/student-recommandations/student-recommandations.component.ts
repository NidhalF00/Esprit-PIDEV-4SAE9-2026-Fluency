import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, forkJoin, merge, of } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  finalize,
  map,
  switchMap,
  tap,
  timeout,
} from 'rxjs/operators';
import { Module } from '../../../models/module.model';
import { RecommendationService } from '../../../services/recommendation.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-recommandations',
  standalone: false,
  templateUrl: './student-recommandations.component.html',
  styleUrl: './student-recommandations.component.css',
})
export class StudentRecommandationsComponent {
  private reco = inject(RecommendationService);
  private router = inject(Router);

  niveau = 'Debutant';
  categorie = 'Informatique';

  readonly modulesNiveau = signal<Module[]>([]);
  readonly modulesCat = signal<Module[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    merge(
      of(null),
      this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    )
      .pipe(
        takeUntilDestroyed(),
        map(() => this.router.url.split('?')[0].replace(/\/$/, '')),
        distinctUntilChanged(),
        filter((url) => /\/student\/recommandations$/.test(url)),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
        }),
        switchMap(() => this.fetchRecommandations$()),
      )
      .subscribe({
        error: () => {
          this.error.set('Impossible de charger les recommandations.');
          this.loading.set(false);
        },
      });
  }

  private fetchRecommandations$() {
    const n = this.niveau.trim() || 'Debutant';
    const c = this.categorie.trim() || 'Informatique';
    return forkJoin({
      mn: this.reco.modulesParNiveau(n).pipe(catchError(() => of([] as Module[]))),
      mc: this.reco.modulesParCategorie(c).pipe(catchError(() => of([] as Module[]))),
    }).pipe(
      timeout(HTTP_TIMEOUT_MS),
      tap(({ mn, mc }) => {
        this.modulesNiveau.set(mn);
        this.modulesCat.set(mc);
      }),
      catchError(() => {
        this.modulesNiveau.set([]);
        this.modulesCat.set([]);
        this.error.set('Délai dépassé ou serveur indisponible.');
        return of(null);
      }),
      finalize(() => this.loading.set(false)),
    );
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.fetchRecommandations$().subscribe({
      error: () => {
        this.error.set('Impossible de charger les recommandations.');
        this.loading.set(false);
      },
    });
  }

  openModule(m: Module): void {
    if (m.id != null) {
      void this.router.navigate(['/student/modules', m.id, 'cours']);
    }
  }
}
