import { ResourceType } from './resource-type';

export interface Resource {
  id?: number;
  title: string;
  description?: string;
  url: string;
  topicId: number;
  type: ResourceType;
}
