export interface Topic {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
  categoryId: number;
  authorEmail: string;
  replyCount?: number;
}
