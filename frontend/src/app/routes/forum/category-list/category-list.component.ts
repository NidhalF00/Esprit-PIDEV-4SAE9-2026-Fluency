import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { AuthService } from '@core';
import { ForumCategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-forum-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatChipsModule],
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  private auth = inject(AuthService);
  private svc = inject(ForumCategoryService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  categories: Category[] = [];
  isAdmin = false;

  showForm = false;
  current: Category = { name: '', description: '' };
  deleteTargetId: number | null = null;

  ngOnInit() {
    this.auth.user().subscribe(u => {
      const role: string = (u as any)['role'] ?? '';
      this.isAdmin = role === 'ADMIN' || role === 'ROLE_ADMIN';
      this.cdr.markForCheck();
    });
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(data => { this.categories = data; this.cdr.markForCheck(); });
  }

  save() {
    if (!this.current.name?.trim() || this.current.name.trim().length < 3) return;
    const obs = this.current.id
      ? this.svc.update(this.current.id, this.current)
      : this.svc.create(this.current);
    obs.subscribe(() => { this.load(); this.cancelForm(); });
  }

  edit(c: Category) { this.current = { ...c }; this.showForm = true; }
  cancelForm() { this.showForm = false; this.current = { name: '', description: '' }; }

  confirmDelete(id: number) { this.deleteTargetId = id; }
  cancelDelete() { this.deleteTargetId = null; }
  doDelete() {
    if (this.deleteTargetId == null) return;
    this.svc.delete(this.deleteTargetId).subscribe(() => { this.deleteTargetId = null; this.load(); });
  }

  viewTopics(c: Category) { this.router.navigate(['/forum/categories', c.id, 'topics']); }

  get totalTopics(): number { return this.categories.reduce((s, c) => s + (c.topicCount ?? 0), 0); }

  getColor(i: number): string {
    return ['#0891b2','#d97706','#7c3aed','#059669','#e11d48','#2563eb'][i % 6];
  }
}
