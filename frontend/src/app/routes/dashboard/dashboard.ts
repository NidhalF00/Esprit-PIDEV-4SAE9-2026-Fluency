import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@core';
import { StatistiqueService, GlobalStats } from '../courses/services/statistique.service';
import { ClaimService } from '../claims/services/claim.service';
import { ForumTopicService } from '../forum/services/topic.service';
import { ForumResourceService } from '../forum/services/resource.service';
import { ForumReportService } from '../forum/services/report.service';
import { CertificatService } from '../courses/services/certificat.service';

export const ELEARNING_CARDS = [
  { label: 'Modules',   key: 'totalModules',         icon: 'layers',       color: '#7c3aed', bg: '#ede9fe' },
  { label: 'Courses',   key: 'totalCours',            icon: 'menu_book',    color: '#1d4ed8', bg: '#dbeafe' },
  { label: 'Quizzes',   key: 'totalQuiz',             icon: 'quiz',         color: '#b45309', bg: '#fef3c7' },
  { label: 'Questions', key: 'totalQuestions',        icon: 'help_outline', color: '#059669', bg: '#d1fae5' },
  { label: 'Answers',   key: 'totalReponses',         icon: 'check_circle', color: '#0891b2', bg: '#cffafe' },
  { label: 'Avg Score', key: 'moyenneScoreMaxQuiz',   icon: 'emoji_events', color: '#be185d', bg: '#fce7f3' },
] as const;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
})
export class Dashboard implements OnInit {
  private auth = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private statSvc = inject(StatistiqueService);
  private claimSvc = inject(ClaimService);
  private topicSvc = inject(ForumTopicService);
  private resourceSvc = inject(ForumResourceService);
  private reportSvc = inject(ForumReportService);
  private certSvc = inject(CertificatService);

  isAdmin = false;
  userName = '';
  userEmail = '';
  loading = true;
  today = new Date();

  readonly elearningCards = ELEARNING_CARDS;

  // Admin — aggregated platform stats
  courseStats: GlobalStats | null = null;
  totalClaims = 0;
  openClaims = 0;
  totalRetakes = 0;
  pendingRetakes = 0;
  totalTopics = 0;
  totalResources = 0;
  pendingReports = 0;
  recentClaims: any[] = [];
  recentRetakes: any[] = [];

  // Student — personal data
  myClaims: any[] = [];
  myRetakes: any[] = [];
  myCertificates: any[] = [];
  myTopics: any[] = [];

  ngOnInit() {
    this.auth.user().subscribe(u => {
      const email: string = (u as any)['email'] ?? '';
      if (!email) return; // skip initial empty BehaviorSubject emission

      const roles: string[] = (u as any)['roles'] ?? [];
      this.isAdmin = roles.includes('ADMIN') || roles.includes('ROLE_ADMIN');
      this.userName = (u as any)['name'] ?? '';
      this.userEmail = email;
      this.loading = true; // reset so the correct dashboard renders
      this.cdr.markForCheck();
      this.isAdmin ? this.loadAdminData() : this.loadStudentData();
    });
  }

  private loadAdminData() {
    forkJoin({
      courses: this.statSvc.getGlobal().pipe(catchError(() => of(null))),
      claims: this.claimSvc.getAllClaims().pipe(catchError(() => of([]))),
      retakes: this.claimSvc.getAllRetakeRequests().pipe(catchError(() => of([]))),
      topics: this.topicSvc.getAll().pipe(catchError(() => of([]))),
      resources: this.resourceSvc.getAll().pipe(catchError(() => of([]))),
      reports: this.reportSvc.getAll().pipe(catchError(() => of([]))),
    }).subscribe(({ courses, claims, retakes, topics, resources, reports }) => {
      this.courseStats = courses;
      const claimsArr = claims as any[];
      const retakesArr = retakes as any[];
      this.totalClaims = claimsArr.length;
      this.openClaims = claimsArr.filter(c => c.status === 'OPEN' || c.status === 'IN_PROGRESS').length;
      this.recentClaims = claimsArr.slice(-4).reverse();
      this.totalRetakes = retakesArr.length;
      this.pendingRetakes = retakesArr.filter(r => r.status === 'PENDING').length;
      this.recentRetakes = retakesArr.filter(r => r.status === 'PENDING').slice(0, 4);
      this.totalTopics = (topics as any[]).length;
      this.totalResources = (resources as any[]).length;
      this.pendingReports = (reports as any[]).filter(r => r.status === 'PENDING').length;
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  private loadStudentData() {
    forkJoin({
      claims: this.claimSvc.getAllClaims().pipe(catchError(() => of([]))),
      retakes: this.claimSvc.getAllRetakeRequests().pipe(catchError(() => of([]))),
      topics: this.topicSvc.getAll().pipe(catchError(() => of([]))),
      certs: this.certSvc.getAll().pipe(catchError(() => of([]))),
    }).subscribe(({ claims, retakes, topics, certs }) => {
      this.myClaims = (claims as any[]).filter(c =>
        !this.userEmail || c.student?.email === this.userEmail
      ).slice(0, 5);
      this.myRetakes = (retakes as any[]).slice(0, 5);
      this.myTopics = (topics as any[]).filter(t => t.authorEmail === this.userEmail).slice(0, 5);
      this.myCertificates = (certs as any[]).slice(0, 5);
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  get greeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  }

  get displayName(): string {
    if (this.userName) return this.userName;
    if (this.userEmail) return this.userEmail.split('@')[0];
    return 'there';
  }

  claimStatusLabel(status: string): string {
    const map: Record<string, string> = {
      OPEN: 'Open', IN_PROGRESS: 'In Progress', RESOLVED: 'Resolved',
      REJECTED: 'Rejected', RETAKE_AUTHORIZED: 'Authorized', CANCELED: 'Canceled',
    };
    return map[status] ?? status;
  }

  claimStatusColor(status: string): string {
    const map: Record<string, string> = {
      OPEN: '#d97706', IN_PROGRESS: '#2563eb', RESOLVED: '#059669',
      REJECTED: '#dc2626', RETAKE_AUTHORIZED: '#7c3aed', CANCELED: '#94a3b8',
    };
    return map[status] ?? '#94a3b8';
  }

  retakeStatusColor(status: string): string {
    const map: Record<string, string> = { PENDING: '#d97706', APPROVED: '#059669', REJECTED: '#dc2626' };
    return map[status] ?? '#94a3b8';
  }

  get certRingOffset(): number {
    // Always show at least a small arc; each cert fills ~45° more
    return Math.max(40, 300 - this.myCertificates.length * 45);
  }

  getStat(key: string): number | null {
    if (!this.courseStats) return null;
    return (this.courseStats as unknown as Record<string, number>)[key] ?? null;
  }
}
