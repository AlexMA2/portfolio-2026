export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: 'COMPLETED' | 'IN_PROGRESS';
  description: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
}
