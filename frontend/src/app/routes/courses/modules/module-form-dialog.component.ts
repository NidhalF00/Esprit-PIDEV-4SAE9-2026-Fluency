import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ModuleService } from '../services/module.service';
import { Module } from '../models/module.model';

@Component({
  selector: 'app-module-form-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule],
  template: `
    <h2 mat-dialog-title style="font-weight:700;color:#0f172a;">{{ data ? 'Edit Module' : 'New Module' }}</h2>
    <mat-dialog-content style="min-width:460px;padding-top:8px;">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="form.titre" required>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="form.description" rows="3"></textarea>
        </mat-form-field>
        <div style="display:flex;gap:12px;">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Level</mat-label>
            <mat-select [(ngModel)]="form.niveau">
              <mat-option value="Débutant">Débutant</mat-option>
              <mat-option value="Intermédiaire">Intermédiaire</mat-option>
              <mat-option value="Avancé">Avancé</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Category</mat-label>
            <input matInput [(ngModel)]="form.categorie">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Total Duration (min)</mat-label>
          <input matInput type="number" [(ngModel)]="form.dureeTotale" min="0">
        </mat-form-field>
        <mat-slide-toggle [(ngModel)]="form.actif" color="primary">Active</mat-slide-toggle>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!form.titre || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;">
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class ModuleFormDialogComponent {
  private svc = inject(ModuleService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<ModuleFormDialogComponent>);

  saving = false;
  form: Module;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Module | null) {
    this.form = data
      ? { ...data }
      : { titre: '', description: '', niveau: 'Débutant', categorie: '', dureeTotale: 0, actif: true };
  }

  save() {
    this.saving = true;
    const obs = this.data?.id
      ? this.svc.update(this.data.id, this.form)
      : this.svc.create(this.form);
    obs.subscribe({
      next: () => { this.snack.open('Module saved.', 'Close', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error saving module.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
