import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { workspacePath } from '../../../core/router-utils';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-module-detail',
  standalone: false,
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.css',
})
export class ModuleDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private moduleService = inject(ModuleService);

  module: Module | null = null;
  readonly loading = signal(true);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.module = null;
        }),
        switchMap((id) => {
          if (!id || !Number.isFinite(+id)) {
            this.loading.set(false);
            void this.router.navigate(workspacePath(this.router, 'modules'));
            return EMPTY;
          }
          return this.moduleService.getById(+id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.loading.set(false);
              alert('Module introuvable.');
              void this.router.navigate(workspacePath(this.router, 'modules'));
              return EMPTY;
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: (m) => {
          this.module = m;
        },
      });
  }

  back(): void {
    void this.router.navigate(workspacePath(this.router, 'modules'));
  }

  edit(): void {
    if (this.module?.id != null) {
      void this.router.navigate(workspacePath(this.router, 'modules', 'edit', this.module.id));
    }
  }
}
