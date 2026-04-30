import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { ApiEndpoints, apiUrl } from '../core/api-endpoints';
import { Cours } from '../models/cours.model';
import { Module } from '../models/module.model';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private http = inject(HttpClient);

  modulesParNiveau(niveau: string): Observable<Module[]> {
    const url = apiUrl(ApiEndpoints.recommandationsModulesNiveau(niveau));
    return this.http.get<unknown>(url).pipe(map((raw) => unwrapArrayResponse<Module>(raw)));
  }

  modulesParCategorie(categorie: string): Observable<Module[]> {
    const url = apiUrl(ApiEndpoints.recommandationsModulesCategorie(categorie));
    return this.http.get<unknown>(url).pipe(map((raw) => unwrapArrayResponse<Module>(raw)));
  }

  /**
   * Cours du module (ordre). Si `apresOrdre` est défini :
   * `GET .../recommandations/cours/module/{id}/apres/{ordre}`
   */
  coursSuivants(moduleId: number, apresOrdre?: number): Observable<Cours[]> {
    const path =
      apresOrdre != null
        ? ApiEndpoints.recommandationsCoursModuleApres(moduleId, apresOrdre)
        : ApiEndpoints.recommandationsCoursModule(moduleId);
    return this.http.get<unknown>(apiUrl(path)).pipe(map((raw) => unwrapArrayResponse<Cours>(raw)));
  }
}
