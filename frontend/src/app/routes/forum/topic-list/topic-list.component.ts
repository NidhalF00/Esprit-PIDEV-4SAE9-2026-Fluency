import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@core';
import { ForumTopicService } from '../services/topic.service';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-forum-topic-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './topic-list.component.html',
})
export class TopicListComponent implements OnInit {
  private auth = inject(AuthService);
  private svc = inject(ForumTopicService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private cdr = inject(ChangeDetectorRef);

  topics: Topic[] = [];
  categoryId!: number;
  isAdmin = false;
  userEmail = '';

  showForm = false;
  current: Topic = { title: '', content: '', categoryId: 0, authorEmail: '' };
  deleteTargetId: number | null = null;

  searchTitle = '';
  searchDateFrom = '';

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.auth.user().subscribe(u => {
      const role: string = (u as any)['role'] ?? '';
      this.isAdmin = role === 'ADMIN' || role === 'ROLE_ADMIN';
      this.userEmail = (u as any)['email'] ?? '';
      this.cdr.markForCheck();
    });
    this.load();
  }

  load() {
    this.svc.getByCategory(this.categoryId).subscribe(data => { this.topics = data; this.cdr.markForCheck(); });
  }

  onSearch() {
    if (!this.searchTitle && !this.searchDateFrom) { this.load(); return; }
    this.svc.search(this.searchTitle, this.categoryId, this.searchDateFrom).subscribe(data => { this.topics = data; this.cdr.markForCheck(); });
  }

  openCreate() {
    this.current = { title: '', content: '', categoryId: this.categoryId, authorEmail: this.userEmail };
    this.showForm = true;
  }

  save() {
    if (this.current.id) {
      this.svc.update(this.current.id, this.current).subscribe(() => { this.load(); this.cancelForm(); });
    } else {
      this.svc.create(this.current, this.categoryId).subscribe(() => { this.load(); this.cancelForm(); });
    }
  }

  edit(t: Topic) { this.current = { ...t }; this.showForm = true; }
  cancelForm() { this.showForm = false; this.current = { title: '', content: '', categoryId: this.categoryId, authorEmail: this.userEmail }; }

  confirmDelete(id: number) { this.deleteTargetId = id; }
  cancelDelete() { this.deleteTargetId = null; }
  doDelete() {
    if (this.deleteTargetId == null) return;
    this.svc.delete(this.deleteTargetId).subscribe(() => { this.load(); this.deleteTargetId = null; });
  }

  goToReplies(t: Topic) { this.router.navigate(['/forum/topics', t.id, 'replies']); }
  goBack() { this.router.navigate(['/forum']); }

  getInitials(email: string): string { return email ? email.slice(0, 2).toUpperCase() : '?'; }
  getAvatarColor(email: string): string {
    const c = ['#0891b2','#7c3aed','#059669','#d97706','#e11d48','#2563eb'];
    let h = 0; for (const ch of (email || '')) h = ch.charCodeAt(0) + ((h << 5) - h);
    return c[Math.abs(h) % c.length];
  }
}
