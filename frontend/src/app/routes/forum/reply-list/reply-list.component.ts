import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '@core';
import { ForumReplyService } from '../services/reply.service';
import { ForumReportService } from '../services/report.service';
import { Reply } from '../models/reply';
import { ReplyDto } from '../models/reply-dto';

@Component({
  selector: 'app-forum-reply-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSnackBarModule],
  templateUrl: './reply-list.component.html',
})
export class ReplyListComponent implements OnInit {
  private auth = inject(AuthService);
  private replySvc = inject(ForumReplyService);
  private reportSvc = inject(ForumReportService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private snack = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  replies: ReplyDto[] = [];
  topicId!: number;
  isAdmin = false;

  showForm = false;
  current: Reply = { content: '', topicId: 0 };
  deleteTargetId: number | null = null;
  badWordError = '';

  reportReplyId: number | null = null;
  reportReason = 'INAPPROPRIATE';
  reportReasons = ['INAPPROPRIATE', 'SPAM', 'HARASSMENT', 'OTHER'];

  ngOnInit() {
    this.topicId = Number(this.route.snapshot.paramMap.get('topicId'));
    this.current.topicId = this.topicId;
    this.auth.user().subscribe(u => {
      const roles: string[] = (u as any)['roles'] ?? [];
      this.isAdmin = roles.includes('ADMIN') || roles.includes('ROLE_ADMIN');
      this.cdr.markForCheck();
    });
    this.load();
  }

  load() { this.replySvc.getByTopic(this.topicId).subscribe(data => { this.replies = data; this.cdr.markForCheck(); }); }

  save() {
    this.badWordError = '';
    const obs = this.current.id
      ? this.replySvc.update(this.current.id, this.current)
      : this.replySvc.create(this.current, this.topicId);
    obs.subscribe({
      next: () => { this.load(); this.cancelForm(); },
      error: err => {
        if (err.error?.message?.includes('INAPPROPRIATE_CONTENT')) {
          this.badWordError = 'Your reply contains inappropriate words. Please edit your message.';
        } else {
          this.badWordError = 'An error occurred. Please try again.';
        }
        this.cdr.markForCheck();
      }
    });
  }

  edit(r: ReplyDto) { this.current = { id: r.id, content: r.content, topicId: r.topicId }; this.showForm = true; }
  cancelForm() { this.showForm = false; this.badWordError = ''; this.current = { content: '', topicId: this.topicId }; }

  confirmDelete(id: number) { this.deleteTargetId = id; }
  cancelDelete() { this.deleteTargetId = null; }
  doDelete() {
    if (this.deleteTargetId == null) return;
    this.replySvc.delete(this.deleteTargetId).subscribe(() => { this.load(); this.deleteTargetId = null; });
  }

  openReport(id: number) { this.reportReplyId = id; this.reportReason = 'INAPPROPRIATE'; }
  cancelReport() { this.reportReplyId = null; }
  submitReport() {
    if (this.reportReplyId == null) return;
    this.reportSvc.create(this.reportReplyId, this.reportReason).subscribe({
      next: () => { this.reportReplyId = null; this.snack.open('Report submitted. Admin notified.', 'OK', { duration: 3000 }); this.cdr.markForCheck(); },
      error: err => this.snack.open(err.error?.message || 'Error submitting report.', 'OK', { duration: 3000 })
    });
  }

  goBack() { this.location.back(); }

  getInitials(email?: string): string {
    if (!email) return '?';
    const [local] = email.split('@');
    const parts = local.split(/[._-]/);
    return parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : local.slice(0, 2).toUpperCase();
  }

  getAvatarColor(email?: string): string {
    const c = ['#0891b2','#7c3aed','#059669','#d97706','#e11d48','#2563eb'];
    if (!email) return c[0];
    let h = 0; for (const ch of email) h = ch.charCodeAt(0) + ((h << 5) - h);
    return c[Math.abs(h) % c.length];
  }
}
