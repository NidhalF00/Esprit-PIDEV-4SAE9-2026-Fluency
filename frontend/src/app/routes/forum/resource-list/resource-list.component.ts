import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '@core';
import { ForumResourceService } from '../services/resource.service';
import { ForumTopicService } from '../services/topic.service';
import { Resource } from '../models/resource';
import { ResourceResponse } from '../models/resource-response';
import { ResourceType } from '../models/resource-type';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-forum-resource-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule],
  templateUrl: './resource-list.component.html',
})
export class ResourceListComponent implements OnInit {
  private auth = inject(AuthService);
  private svc = inject(ForumResourceService);
  private topicSvc = inject(ForumTopicService);
  private snack = inject(MatSnackBar);
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  resources: ResourceResponse[] = [];
  filtered: ResourceResponse[] = [];
  topics: Topic[] = [];
  types = Object.values(ResourceType);
  isAdmin = false;

  showForm = false;
  isEditing = false;
  current: Resource = this.empty();

  filterTitle = '';
  filterType: ResourceType | '' = '';

  openPreviewId: number | null = null;

  ngOnInit() {
    this.auth.user().subscribe(u => {
      const role: string = (u as any)['role'] ?? '';
      this.isAdmin = role === 'ADMIN' || role === 'ROLE_ADMIN';
      this.cdr.markForCheck();
    });
    this.load();
    this.loadTopics();
  }

  load() {
    this.svc.getAll().subscribe({ next: data => { this.resources = data; this.applyFilters(); this.cdr.markForCheck(); } });
  }

  loadTopics() { this.topicSvc.getAllDTO().subscribe(data => { this.topics = data; this.cdr.markForCheck(); }); }

  applyFilters() {
    this.filtered = this.resources.filter(r =>
      (!this.filterTitle || r.title.toLowerCase().includes(this.filterTitle.toLowerCase())) &&
      (!this.filterType || r.type === this.filterType)
    );
  }

  togglePreview(id: number) { this.openPreviewId = this.openPreviewId === id ? null : id; }

  getEmbedUrl(url: string): SafeResourceUrl {
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    const safe = yt ? `https://www.youtube.com/embed/${yt[1]}` : url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(safe);
  }

  openCreate() { this.current = this.empty(); this.isEditing = false; this.showForm = true; }
  openEdit(r: ResourceResponse) {
    this.current = { id: r.id, title: r.title, description: r.description, url: r.url, type: r.type as ResourceType, topicId: Number(r.topicId) };
    this.isEditing = true; this.showForm = true;
  }
  cancelForm() { this.showForm = false; this.current = this.empty(); }

  save() {
    this.current.topicId = Number(this.current.topicId);
    if (!this.current.title || !this.current.url || !this.current.topicId) {
      this.snack.open('Title, URL and Topic are required.', 'OK', { duration: 3000 }); return;
    }
    const obs = this.isEditing && this.current.id
      ? this.svc.update(this.current.id, this.current)
      : this.svc.create(this.current);
    obs.subscribe({
      next: () => { this.snack.open('Saved.', 'OK', { duration: 2000 }); this.cancelForm(); this.load(); },
      error: () => this.snack.open('Save failed.', 'OK', { duration: 3000 })
    });
  }

  delete(id: number) {
    if (!confirm('Delete this resource?')) return;
    this.svc.delete(id).subscribe({
      next: () => { this.resources = this.resources.filter(r => r.id !== id); this.applyFilters(); this.cdr.markForCheck(); },
      error: err => this.snack.open(err.error?.message || 'Delete failed.', 'OK', { duration: 3000 })
    });
  }

  private empty(): Resource { return { title: '', description: '', url: '', type: ResourceType.LINK, topicId: 0 }; }

  getTypeColor(type: string): string {
    const m: Record<string, string> = { VIDEO: '#d97706', PDF: '#e11d48', LINK: '#2563eb', ARTICLE: '#059669', OTHER: '#78716c' };
    return m[type] ?? '#78716c';
  }

  getTypeIcon(type: string): string {
    const m: Record<string, string> = { VIDEO: 'play_circle', PDF: 'picture_as_pdf', LINK: 'link', ARTICLE: 'article', OTHER: 'attach_file' };
    return m[type] ?? 'attach_file';
  }
}
