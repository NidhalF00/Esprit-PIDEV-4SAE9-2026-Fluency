import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CoursService } from '../services/cours.service';
import { ModuleService } from '../services/module.service';
import { Cours } from '../models/cours.model';
import { Module } from '../models/module.model';

@Component({
  selector: 'app-cours-form-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule],
  template: `
    <h2 mat-dialog-title style="font-weight:700;color:#0f172a;">{{ data?.id ? 'Edit Course' : 'New Course' }}</h2>
    <mat-dialog-content style="min-width:500px;padding-top:8px;">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="form.titre" required>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Content</mat-label>
          <textarea matInput [(ngModel)]="form.contenu" rows="4"></textarea>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Module</mat-label>
          <mat-select [(ngModel)]="form.moduleId" required>
            <mat-option *ngFor="let m of modules" [value]="m.id">{{ m.titre }}</mat-option>
          </mat-select>
        </mat-form-field>
        <div style="display:flex;gap:12px;">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Type</mat-label>
            <mat-select [(ngModel)]="form.typeContenu">
              <mat-option value="TEXTE">Texte</mat-option>
              <mat-option value="VIDEO">Vidéo</mat-option>
              <mat-option value="PDF">PDF</mat-option>
              <mat-option value="AUDIO">Audio</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Order</mat-label>
            <input matInput type="number" [(ngModel)]="form.ordreCours" min="1">
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Duration (min)</mat-label>
            <input matInput type="number" [(ngModel)]="form.duree" min="0">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Resource URL</mat-label>
          <input matInput [(ngModel)]="form.urlRessource">
        </mat-form-field>
        <div style="display:flex;gap:24px;">
          <mat-slide-toggle [(ngModel)]="form.publie" color="primary">Published</mat-slide-toggle>
          <mat-slide-toggle [(ngModel)]="form.gratuit" color="accent">Free</mat-slide-toggle>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!form.titre || !form.moduleId || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;">
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class CoursFormDialogComponent implements OnInit {
  private svc = inject(CoursService);
  private moduleSvc = inject(ModuleService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<CoursFormDialogComponent>);

  saving = false;
  modules: Module[] = [];
  form: Cours;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partial<Cours> | null) {
    const defaults: Cours = { titre: '', contenu: '', ordreCours: 1, duree: 0, typeContenu: 'TEXTE', urlRessource: '', gratuit: false, publie: false };
    this.form = data ? { ...defaults, ...data } as Cours : defaults;
  }

  ngOnInit() {
    this.moduleSvc.getAll().subscribe(m => { setTimeout(() => { this.modules = m; }); });
  }

  save() {
    this.saving = true;
    const obs = this.data?.id ? this.svc.update(this.data.id!, this.form) : this.svc.create(this.form);
    obs.subscribe({
      next: () => { this.snack.open('Course saved.', 'Close', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error saving course.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
