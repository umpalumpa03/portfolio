export interface Project {
  id: number;
  title: string;
  titleKa?: string;
  description: string;
  descriptionKa?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}
