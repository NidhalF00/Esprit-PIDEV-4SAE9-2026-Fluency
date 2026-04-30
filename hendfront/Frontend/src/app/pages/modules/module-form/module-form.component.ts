import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { num } from '../../../core/api-helpers';
import { workspacePath } from '../../../core/router-utils';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-module-form',
  standalone: false,
  templateUrl: './module-form.component.html',
  styleUrl: './module-form.component.css',
})
export class ModuleFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private moduleService = inject(ModuleService);

  editId: number | null = null;
  readonly loading = signal(false);

  form = this.fb.nonNullable.group({
    titre: ['', Validators.required],
    description: ['', Validators.required],
    niveau: ['', Validators.required],
    categorie: ['', Validators.required],
    dureeTotale: [0, [Validators.required, Validators.min(0)]],
    actif: [true],
  });

  constructor() {
    combineLatest([this.route.paramMap, this.route.url])
      .pipe(
        takeUntilDestroyed(),
        map(([pm, segs]) => {
          const paths = segs.map((s) => s.path);
          const isEditRoute = paths.includes('edit');
          const raw = pm.get('id');
          const id = raw != null && Number.isFinite(+raw) ? +raw : null;
          return isEditRoute && id != null ? id : null;
        }),
        distinctUntilChanged(),
        tap((editId) => {
          if (editId == null) {
            this.editId = null;
            this.form.reset({
              titre: '',
              description: '',
              niveau: '',
              categorie: '',
              dureeTotale: 0,
              actif: true,
            });
          }
        }),
        switchMap((editId) => {
          if (editId == null) {
            return of(undefined);
          }
          this.editId = editId;
          this.loading.set(true);
          return this.moduleService.getById(editId).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap((m) => {
              this.form.patchValue({
                titre: m.titre,
                description: m.description,
                niveau: m.niveau,
                categorie: m.categorie,
                dureeTotale: m.dureeTotale,
                actif: m.actif,
              });
            }),
            catchError(() => {
              alert('Impossible de charger le module.');
              void this.router.navigate(workspacePath(this.router, 'modules'));
              return of(undefined);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  cancel(): void {
    void this.router.navigate(workspacePath(this.router, 'modules'));
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload: Module = {
      titre: v.titre.trim(),
      description: v.description.trim(),
      niveau: v.niveau.trim(),
      categorie: v.categorie.trim(),
      dureeTotale: num(v.dureeTotale),
      actif: !!v.actif,
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.moduleService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, 'modules', this.editId!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la mise à jour.')),
      });
    } else {
      this.moduleService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, 'modules', created.id!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création.')),
      });
    }
  }
}
