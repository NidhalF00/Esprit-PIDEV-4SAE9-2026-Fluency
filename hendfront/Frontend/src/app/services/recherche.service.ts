import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { ApiEndpoints, apiUrl } from '../core/api-endpoints';
import { Cours } from '../models/cours.model';
import { Module } from '../models/module.model';

/** Paramètres optionnels pour `GET recherche/modules` (`motCle`, `niveau`, `categorie`). */
export interface FiltresRechercheModules {
  motCle?: string;
  niveau?: string;
  categorie?: string;
}

/** Paramètres pour `GET recherche/cours` (`titre`, `typeContenu`, `publie`). */
export interface FiltresRechercheCours {
  titre?: string;
  typeContenu?: string;
  publie?: boolean;
}

@Injectable({ providedIn: 'root' })
export class RechercheService {
  private http = inject(HttpClient);

  searchModules(f: FiltresRechercheModules): Observable<Module[]> {
    let params = new HttpParams();
    if (f.motCle?.trim()) {
      params = params.set('motCle', f.motCle.trim());
    }
    if (f.niveau?.trim()) {
      params = params.set('niveau', f.niveau.trim());
    }
    if (f.categorie?.trim()) {
      params = params.set('categorie', f.categorie.trim());
    }
    return this.http
      .get<unknown>(apiUrl(ApiEndpoints.rechercheModules), { params })
      .pipe(map((raw) => unwrapArrayResponse<Module>(raw)));
  }

  searchCours(f: FiltresRechercheCours): Observable<Cours[]> {
    let params = new HttpParams();
    if (f.titre?.trim()) {
      params = params.set('titre', f.titre.trim());
    }
    if (f.typeContenu?.trim()) {
      params = params.set('typeContenu', f.typeContenu.trim());
    }
    if (f.publie === true || f.publie === false) {
      params = params.set('publie', String(f.publie));
    }
    return this.http
      .get<unknown>(apiUrl(ApiEndpoints.rechercheCours), { params })
      .pipe(map((raw) => unwrapArrayResponse<Cours>(raw)));
  }

  /** `GET .../recherche/cours/type/{typeContenu}` (ex. PDF). */
  searchCoursParTypeSeul(typeContenu: string): Observable<Cours[]> {
    const url = apiUrl(ApiEndpoints.rechercheCoursType(typeContenu.trim()));
    return this.http.get<unknown>(url).pipe(map((raw) => unwrapArrayResponse<Cours>(raw)));
  }
}
