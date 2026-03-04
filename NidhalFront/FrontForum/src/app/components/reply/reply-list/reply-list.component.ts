// src/app/components/reply/reply-list/reply-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Reply } from 'src/app/models/reply';
import { ReplyDto } from 'src/app/models/reply-dto';
import { ReplyService } from 'src/app/services/reply.service';
declare var bootstrap: any; // <-- for modal
@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {
  replies: ReplyDto[] = [];
  showForm = false;
  currentReply: Reply = { content: '', topicId: 0 };
  topicId!: number;

  constructor(private replyService: ReplyService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.topicId = Number(this.route.snapshot.paramMap.get('topicId'));
    this.currentReply.topicId = this.topicId;
    this.loadReplies();
  }

  loadReplies() {
    this.replyService.getByTopic(this.topicId)
      .subscribe(data => {
        this.replies = data; // Type est exactement ReplyDto[]
      });
  }

  handleSave(reply: Reply) {
  console.log('Updating reply:', reply); // Vérifie le contenu
  if (reply.id) {
    this.replyService.update(reply.id, reply)
      .subscribe({
        next: () => this.afterSave(),
        error: err => console.error('Update failed:', err)
      });
  } else {
    this.replyService.create(reply, this.topicId)
      .subscribe(() => this.afterSave());
  }
}
  editReply(replyDto: ReplyDto) {
    this.currentReply = {
      id: replyDto.id,
      content: replyDto.content,
      topicId: replyDto.topicId
    };
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
    this.currentReply = { content: '', topicId: this.topicId };
  }

  selectedReplyId: number | null = null; // <-- track which reply to delete

deleteReply(id: number) {
  this.selectedReplyId = id;
  const modalEl = document.getElementById('deleteReplyModal')!;
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

confirmDelete() {
  if (this.selectedReplyId !== null) {
    this.replyService.delete(this.selectedReplyId).subscribe(() => {
      this.loadReplies();
      this.selectedReplyId = null;

      const modalEl = document.getElementById('deleteReplyModal')!;
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal?.hide();
    });
  }
}
  private afterSave() {
    this.loadReplies();
    this.cancelForm();
  }
  goBack() {
    this.router.navigate(['/categories']);
  }
}