import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { foreignId, num } from '../../../core/api-helpers';
import { workspacePath } from '../../../core/router-utils';
import { Cours } from '../../../models/cours.model';
import { Module as ModuleEntity } from '../../../models/module.model';
import { CoursService } from '../../../services/cours.service';
import { ModuleService } from '../../../services/module.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-cours-form',
  standalone: false,
  templateUrl: './cours-form.component.html',
  styleUrl: './cours-form.component.css',
})
export class CoursFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private coursService = inject(CoursService);
  private moduleService = inject(ModuleService);

  editId: number | null = null;
  readonly loading = signal(false);
  /** Évite les doubles clics pendant POST/PUT (surtout upload PDF). */
  readonly saving = signal(false);
  readonly modules = signal<ModuleEntity[]>([]);
  /** PDF joint — uniquement à la création ; envoi vers `POST /cours/avec-pdf`. */
  pdfFile: File | null = null;

  form = this.fb.nonNullable.group({
    titre: ['', Validators.required],
    contenu: ['', Validators.required],
    ordreCours: [0, [Validators.required, Validators.min(0)]],
    duree: [0, [Validators.required, Validators.min(0)]],
    typeContenu: ['', Validators.required],
    urlRessource: [''],
    gratuit: [false],
    publie: [false],
    moduleId: [null as number | null, Validators.required],
  });

  constructor() {
    this.moduleService.getAll().subscribe({
      next: (list) => this.modules.set(list),
      error: () => this.modules.set([]),
    });

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
            this.pdfFile = null;
            this.form.reset({
              titre: '',
              contenu: '',
              ordreCours: 0,
              duree: 0,
              typeContenu: '',
              urlRessource: '',
              gratuit: false,
              publie: false,
              moduleId: null,
            });
          }
        }),
        switchMap((editId) => {
          if (editId == null) {
            return of(undefined);
          }
          this.editId = editId;
          this.loading.set(true);
          return this.coursService.getById(editId).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap((c) => {
              this.form.patchValue({
                titre: c.titre,
                contenu: c.contenu,
                ordreCours: c.ordreCours,
                duree: c.duree,
                typeContenu: c.typeContenu,
                urlRessource: c.urlRessource,
                gratuit: c.gratuit,
                publie: c.publie,
                moduleId: c.module?.id ?? null,
              });
            }),
            catchError(() => {
              alert('Impossible de charger le cours.');
              void this.router.navigate(workspacePath(this.router, 'cours'));
              return of(undefined);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  cancel(): void {
    void this.router.navigate(workspacePath(this.router, 'cours'));
  }

  onPdfSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) {
      this.pdfFile = null;
      return;
    }
    const isPdfMime = !file.type || file.type === 'application/pdf' || file.type === 'application/x-pdf';
    const isPdfExt = file.name.toLowerCase().endsWith('.pdf');
    if (!isPdfMime && !isPdfExt) {
      alert('Veuillez sélectionner un fichier PDF (.pdf).');
      input.value = '';
      this.pdfFile = null;
      return;
    }
    this.pdfFile = file;
  }

  clearPdf(input?: HTMLInputElement): void {
    this.pdfFile = null;
    if (input) {
      input.value = '';
    }
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const moduleId = foreignId(v.moduleId);
    if (moduleId == null) {
      alert('Choisis un module valide.');
      return;
    }
    const urlRessource = v.urlRessource.trim();
    const isCreate = this.editId == null;
    if (isCreate && !urlRessource && !this.pdfFile) {
      alert('Indique une URL de ressource ou joignez un fichier PDF.');
      return;
    }

    const payload: Cours = {
      titre: v.titre.trim(),
      contenu: v.contenu.trim(),
      ordreCours: Math.trunc(num(v.ordreCours)),
      duree: Math.trunc(num(v.duree)),
      typeContenu: v.typeContenu.trim(),
      urlRessource,
      gratuit: !!v.gratuit,
      publie: !!v.publie,
      moduleId,
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.saving.set(true);
      this.coursService
        .update(this.editId, payload)
        .pipe(finalize(() => this.saving.set(false)))
        .subscribe({
          next: () => void this.router.navigate(workspacePath(this.router, 'cours', this.editId!)),
          error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la mise à jour.')),
        });
    } else if (this.pdfFile) {
      this.saving.set(true);
      this.coursService
        .createWithPdf(payload, this.pdfFile)
        .pipe(finalize(() => this.saving.set(false)))
        .subscribe({
          next: (created) => {
            if (created?.id != null) {
              void this.router.navigate(workspacePath(this.router, 'cours', created.id));
            } else {
              void this.router.navigate(workspacePath(this.router, 'cours'));
            }
          },
          error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création avec PDF.')),
        });
    } else {
      this.saving.set(true);
      this.coursService
        .create(payload)
        .pipe(finalize(() => this.saving.set(false)))
        .subscribe({
          next: (created) => {
            if (created?.id != null) {
              void this.router.navigate(workspacePath(this.router, 'cours', created.id));
            } else {
              void this.router.navigate(workspacePath(this.router, 'cours'));
            }
          },
          error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création.')),
        });
    }
  }
}
