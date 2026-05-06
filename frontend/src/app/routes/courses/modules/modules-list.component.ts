import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageHeader } from '@shared';
import { ModuleService } from '../services/module.service';
import { Module } from '../models/module.model';
import { ModuleFormDialogComponent } from './module-form-dialog.component';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, PageHeader, ModuleFormDialogComponent],
})
export class ModulesListComponent implements OnInit, AfterViewInit {
  private svc = inject(ModuleService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Module>();
  loading = true;
  search = '';
  displayedColumns = ['titre', 'niveau', 'categorie', 'dureeTotale', 'actif', 'actions'];

  ngOnInit() {
    this.load();
    this.dataSource.filterPredicate = (d, f) =>
      d.titre.toLowerCase().includes(f) || (d.categorie?.toLowerCase().includes(f) ?? false);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  load() {
    this.loading = true;
    this.svc.getAll().subscribe({
      next: data => { this.dataSource.data = data; this.loading = false; setTimeout(() => { this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; }); },
      error: () => this.loading = false,
    });
  }

  applyFilter() {
    this.dataSource.filter = this.search.toLowerCase().trim();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  openForm(m?: Module) {
    this.dialog.open(ModuleFormDialogComponent, { width: '540px', data: m ?? null })
      .afterClosed().subscribe(r => { if (r) this.load(); });
  }

  delete(m: Module) {
    if (!m.id) return;
    const sb = this.snack.open(`Delete "${m.titre}"?`, 'Yes, Delete', { duration: 5000 });
    sb.onAction().subscribe(() => {
      this.svc.delete(m.id!).subscribe({
        next: () => { this.snack.open('Module deleted.', 'Close', { duration: 3000 }); this.load(); },
        error: () => this.snack.open('Could not delete module.', 'Close', { duration: 3000 }),
      });
    });
  }
}
