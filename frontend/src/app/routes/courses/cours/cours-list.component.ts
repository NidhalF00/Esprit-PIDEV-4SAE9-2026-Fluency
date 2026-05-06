import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
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
import { CoursService } from '../services/cours.service';
import { Cours } from '../models/cours.model';
import { CoursFormDialogComponent } from './cours-form-dialog.component';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, PageHeader, CoursFormDialogComponent],
})
export class CoursListComponent implements OnInit, AfterViewInit {
  private svc = inject(CoursService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Cours>();
  loading = true;
  search = '';
  displayedColumns = ['titre', 'typeContenu', 'duree', 'publie', 'gratuit', 'actions'];

  typeLabels: Record<string, string | undefined> = { TEXTE: 'Text', VIDEO: 'Video', PDF: 'PDF', AUDIO: 'Audio' };

  ngOnInit() {
    this.load();
    this.dataSource.filterPredicate = (d, f) => d.titre.toLowerCase().includes(f);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  load() {
    this.loading = true;
    this.svc.getAll().subscribe({
      next: data => { this.dataSource.data = data; this.loading = false; this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; this.cdr.markForCheck(); },
      error: () => { this.loading = false; this.cdr.markForCheck(); },
    });
  }

  applyFilter() {
    this.dataSource.filter = this.search.toLowerCase().trim();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  openForm(c?: Cours) {
    this.dialog.open(CoursFormDialogComponent, { width: '580px', data: c ?? null })
      .afterClosed().subscribe(r => { if (r) this.load(); });
  }

  delete(c: Cours) {
    if (!c.id) return;
    this.snack.open(`Delete "${c.titre}"?`, 'Yes, Delete', { duration: 5000 })
      .onAction().subscribe(() => {
        this.svc.delete(c.id!).subscribe({
          next: () => { this.snack.open('Course deleted.', 'Close', { duration: 3000 }); this.load(); },
          error: () => this.snack.open('Could not delete course.', 'Close', { duration: 3000 }),
        });
      });
  }
}
