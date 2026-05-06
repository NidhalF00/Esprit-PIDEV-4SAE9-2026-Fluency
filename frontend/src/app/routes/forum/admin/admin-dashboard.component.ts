import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { ForumBadwordService } from '../services/badword.service';
import { ForumReportService } from '../services/report.service';
import { ForumResourceService } from '../services/resource.service';

@Component({
  selector: 'app-forum-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatChipsModule, MatBadgeModule],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  private badwordSvc = inject(ForumBadwordService);
  private reportSvc = inject(ForumReportService);
  private resourceSvc = inject(ForumResourceService);
  private cdr = inject(ChangeDetectorRef);

  badwords: any[] = [];
  newBadword = '';
  reports: any[] = [];
  resources: any[] = [];

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.badwordSvc.getAll().subscribe(d => { this.badwords = d; this.cdr.markForCheck(); });
    this.reportSvc.getAll().subscribe(d => { this.reports = d; this.cdr.markForCheck(); });
    this.resourceSvc.getAll().subscribe(d => { this.resources = d; this.cdr.markForCheck(); });
  }

  addBadword() {
    if (!this.newBadword.trim()) return;
    this.badwordSvc.add(this.newBadword.trim()).subscribe({ next: () => { this.newBadword = ''; this.badwordSvc.getAll().subscribe(d => { this.badwords = d; this.cdr.markForCheck(); }); } });
  }

  deleteBadword(id: number) {
    this.badwordSvc.delete(id).subscribe(() => this.badwordSvc.getAll().subscribe(d => { this.badwords = d; this.cdr.markForCheck(); }));
  }

  updateReportStatus(id: number, status: string) {
    this.reportSvc.updateStatus(id, status).subscribe(() => this.reportSvc.getAll().subscribe(d => { this.reports = d; this.cdr.markForCheck(); }));
  }

  updateResourceStatus(id: number, status: string) {
    this.resourceSvc.updateStatus(id, status).subscribe(() => this.resourceSvc.getAll().subscribe(d => { this.resources = d; this.cdr.markForCheck(); }));
  }

  get pendingReports(): number { return this.reports.filter(r => r.status === 'PENDING').length; }
  get pendingResources(): number { return this.resources.filter(r => !r.status || r.status === 'PENDING').length; }
}
