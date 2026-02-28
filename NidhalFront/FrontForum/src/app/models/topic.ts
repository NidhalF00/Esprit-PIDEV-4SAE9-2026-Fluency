export interface Topic {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
  categoryId: number;   // pour savoir à quelle catégorie appartient le topic
}