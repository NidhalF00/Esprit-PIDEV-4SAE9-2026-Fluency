import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { CertificatService } from '../services/certificat.service';
import { Certificat } from '../models/certificat.model';

@Component({
  selector: 'app-certificats-list',
  templateUrl: './certificats-list.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTooltipModule, PageHeader],
})
export class CertificatsListComponent implements OnInit, AfterViewInit {
  private svc = inject(CertificatService);
  private snack = inject(MatSnackBar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Certificat>();
  loading = true;
  search = '';
  displayedColumns = ['codeCertificat', 'etudiantNom', 'moduleTitre', 'quizTitre', 'score', 'dateObtention', 'actions'];

  ngOnInit() {
    this.load();
    this.dataSource.filterPredicate = (d, f) =>
      (d.codeCertificat?.toLowerCase().includes(f) ?? false) ||
      (d.etudiantNom?.toLowerCase().includes(f) ?? false) ||
      (d.quizTitre?.toLowerCase().includes(f) ?? false) ||
      (d.moduleTitre?.toLowerCase().includes(f) ?? false);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  load() {
    this.loading = true;
    this.svc.getAll().subscribe({
      next: data => { this.dataSource.data = data; setTimeout(() => { this.loading = false; this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; }); },
      error: () => { setTimeout(() => { this.loading = false; this.snack.open('Error loading certificates.', 'Close', { duration: 3000 }); }); },
    });
  }

  applyFilter() {
    this.dataSource.filter = this.search.toLowerCase().trim();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  download(c: Certificat) {
    if (!c.id) return;
    this.svc.telechargerPdf(c.id, c.nomFichierPdf ?? `certificat-${c.id}.pdf`);
  }
}
