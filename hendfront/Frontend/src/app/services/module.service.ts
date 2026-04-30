import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Module } from '../models/module.model';

/** Corps sans id ni collections (l’id est généré côté serveur). */
function moduleWriteBody(m: Module): Omit<Module, 'id' | 'cours'> {
  return {
    titre: m.titre,
    description: m.description,
    niveau: m.niveau,
    categorie: m.categorie,
    dureeTotale: m.dureeTotale,
    actif: m.actif,
  };
}

@Injectable({ providedIn: 'root' })
export class ModuleService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAll(): Observable<Module[]> {
    return this.http.get<unknown>(`${this.apiUrl}/modules`).pipe(map((raw) => unwrapArrayResponse<Module>(raw)));
  }

  getById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.apiUrl}/modules/${id}`);
  }

  create(module: Module): Observable<Module> {
    return this.http.post<Module>(`${this.apiUrl}/modules`, moduleWriteBody(module));
  }

  update(id: number, module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/modules/${id}`, moduleWriteBody(module));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/modules/${id}`);
  }
}
