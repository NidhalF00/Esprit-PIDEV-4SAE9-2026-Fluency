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
import { ReponseService } from '../services/reponse.service';
import { Reponse } from '../models/reponse.model';
import { ReponseFormDialogComponent } from './reponse-form-dialog.component';

@Component({
  selector: 'app-reponses-list',
  templateUrl: './reponses-list.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, PageHeader, ReponseFormDialogComponent],
})
export class ReponsesListComponent implements OnInit, AfterViewInit {
  private svc = inject(ReponseService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Reponse>();
  loading = true;
  search = '';
  displayedColumns = ['texte', 'correcte', 'actions'];

  ngOnInit() {
    this.load();
    this.dataSource.filterPredicate = (d, f) => d.texte.toLowerCase().includes(f);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  load() {
    this.loading = true;
    this.svc.getAll().subscribe({
      next: data => { this.dataSource.data = data; setTimeout(() => { this.loading = false; this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; }); },
      error: () => { setTimeout(() => { this.loading = false; }); },
    });
  }

  applyFilter() {
    this.dataSource.filter = this.search.toLowerCase().trim();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  openForm(r?: Reponse) {
    this.dialog.open(ReponseFormDialogComponent, { width: '500px', data: r ?? null })
      .afterClosed().subscribe(res => { if (res) this.load(); });
  }

  delete(r: Reponse) {
    if (!r.id) return;
    this.snack.open('Delete this answer?', 'Yes, Delete', { duration: 5000 })
      .onAction().subscribe(() => {
        this.svc.delete(r.id!).subscribe({
          next: () => { this.snack.open('Answer deleted.', 'Close', { duration: 3000 }); this.load(); },
          error: () => this.snack.open('Could not delete answer.', 'Close', { duration: 3000 }),
        });
      });
  }
}
