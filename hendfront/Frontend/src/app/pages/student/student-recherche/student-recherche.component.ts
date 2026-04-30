import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { Cours } from '../../../models/cours.model';
import { Module } from '../../../models/module.model';
import { RechercheService } from '../../../services/recherche.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-recherche',
  standalone: false,
  templateUrl: './student-recherche.component.html',
  styleUrl: './student-recherche.component.css',
})
export class StudentRechercheComponent {
  private recherche = inject(RechercheService);
  private router = inject(Router);

  tab = 0;

  motCle = '';
  niveau = '';
  categorie = '';
  readonly modules = signal<Module[]>([]);
  readonly loadingM = signal(false);
  readonly errM = signal<string | null>(null);

  titre = '';
  typeContenu = '';
  publieFiltre: '' | 'oui' | 'non' = '';
  readonly cours = signal<Cours[]>([]);
  readonly loadingC = signal(false);
  readonly errC = signal<string | null>(null);

  typeSeul = '';

  searchModules(): void {
    this.loadingM.set(true);
    this.errM.set(null);
    this.recherche
      .searchModules({
        motCle: this.motCle,
        niveau: this.niveau,
        categorie: this.categorie,
      })
      .pipe(
        timeout(HTTP_TIMEOUT_MS),
        catchError(() => {
          this.errM.set('Échec de la recherche modules (réseau ou délai).');
          return of([] as Module[]);
        }),
        finalize(() => this.loadingM.set(false)),
      )
      .subscribe({
        next: (data) => this.modules.set(data),
      });
  }

  searchCours(): void {
    let publie: boolean | undefined;
    if (this.publieFiltre === 'oui') {
      publie = true;
    } else if (this.publieFiltre === 'non') {
      publie = false;
    } else {
      publie = undefined;
    }
    this.loadingC.set(true);
    this.errC.set(null);
    this.recherche
      .searchCours({
        titre: this.titre,
        typeContenu: this.typeContenu,
        publie,
      })
      .pipe(
        timeout(HTTP_TIMEOUT_MS),
        catchError(() => {
          this.errC.set('Échec de la recherche cours (réseau ou délai).');
          return of([] as Cours[]);
        }),
        finalize(() => this.loadingC.set(false)),
      )
      .subscribe({
        next: (data) => this.cours.set(data),
      });
  }

  searchParType(): void {
    const t = this.typeSeul.trim();
    if (!t) {
      return;
    }
    this.loadingC.set(true);
    this.errC.set(null);
    this.recherche
      .searchCoursParTypeSeul(t)
      .pipe(
        timeout(HTTP_TIMEOUT_MS),
        catchError(() => {
          this.errC.set('Échec recherche par type (réseau ou délai).');
          return of([] as Cours[]);
        }),
        finalize(() => this.loadingC.set(false)),
      )
      .subscribe({
        next: (data) => this.cours.set(data),
      });
  }

  openModule(m: Module): void {
    if (m.id != null) {
      void this.router.navigate(['/student/modules', m.id, 'cours']);
    }
  }

  openCours(c: Cours): void {
    if (c.id != null) {
      void this.router.navigate(['/cours', c.id]);
    }
  }
}
