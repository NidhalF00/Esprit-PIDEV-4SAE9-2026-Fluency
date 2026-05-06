import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Module } from '../models/module.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class ModuleService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Module[]> {
    return this.http.get<unknown>(`${this.api}/modules`).pipe(map(r => unwrapArray<Module>(r)));
  }

  getById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.api}/modules/${id}`);
  }

  create(m: Module): Observable<Module> {
    const { id: _id, ...body } = m;
    return this.http.post<Module>(`${this.api}/modules`, body);
  }

  update(id: number, m: Module): Observable<Module> {
    const { id: _id, ...body } = m;
    return this.http.put<Module>(`${this.api}/modules/${id}`, body);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/modules/${id}`);
  }
}