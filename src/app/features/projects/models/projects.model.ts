export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}
