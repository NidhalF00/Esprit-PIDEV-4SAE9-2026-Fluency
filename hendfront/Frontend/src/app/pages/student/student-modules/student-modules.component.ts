import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter, merge, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';
import { StudentModuleCoursesDialogComponent } from '../dialogs/student-module-courses-dialog.component';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-modules',
  standalone: false,
  templateUrl: './student-modules.component.html',
  styleUrl: './student-modules.component.css',
})
export class StudentModulesComponent {
  private moduleService = inject(ModuleService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  readonly modules = signal<Module[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  /** Illustrations variées pour les cartes. */
  readonly covers = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
  ];

  constructor() {
    merge(
      of(null),
      this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    )
      .pipe(
        takeUntilDestroyed(),
        map(() => this.router.url.split('?')[0].replace(/\/$/, '')),
        distinctUntilChanged(),
        filter((url) => /\/student\/modules$/.test(url)),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
        }),
        switchMap(() =>
          this.moduleService.getAll().pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.modules.set([]);
              this.error.set('Impossible de charger les modules (réseau, délai ou serveur).');
              return of([] as Module[]);
            }),
            finalize(() => this.loading.set(false)),
          ),
        ),
      )
      .subscribe({
        next: (data) => {
          this.modules.set(data);
        },
      });
  }

  coverFor(m: Module, index: number): string {
    const i = (m.id ?? index) % this.covers.length;
    return this.covers[i];
  }

  openCours(m: Module): void {
    if (m.id == null) {
      return;
    }
    this.dialog.open(StudentModuleCoursesDialogComponent, {
      data: { module: m },
      width: 'min(960px, 96vw)',
      maxHeight: '92vh',
      autoFocus: 'first-tabbable',
    });
  }
}
