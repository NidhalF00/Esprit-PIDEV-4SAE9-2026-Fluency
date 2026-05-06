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
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { QuestionFormDialogComponent } from './question-form-dialog.component';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, PageHeader, QuestionFormDialogComponent],
})
export class QuestionsListComponent implements OnInit, AfterViewInit {
  private svc = inject(QuestionService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Question>();
  loading = true;
  search = '';
  displayedColumns = ['enonce', 'typeQuestion', 'points', 'actions'];

  typeLabels: Record<string, string | undefined> = { QCM: 'QCM', VRAI_FAUX: 'Vrai/Faux', TEXTE_LIBRE: 'Texte libre' };

  ngOnInit() {
    this.load();
    this.dataSource.filterPredicate = (d, f) => d.enonce.toLowerCase().includes(f);
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

  openForm(q?: Question) {
    this.dialog.open(QuestionFormDialogComponent, { width: '520px', data: q ?? null })
      .afterClosed().subscribe(r => { if (r) this.load(); });
  }

  delete(q: Question) {
    if (!q.id) return;
    this.snack.open('Delete this question?', 'Yes, Delete', { duration: 5000 })
      .onAction().subscribe(() => {
        this.svc.delete(q.id!).subscribe({
          next: () => { this.snack.open('Question deleted.', 'Close', { duration: 3000 }); this.load(); },
          error: () => this.snack.open('Could not delete question.', 'Close', { duration: 3000 }),
        });
      });
  }
}
