export interface SkillNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'testing' | 'productivity';
  level: string;
  description: string;
  connections: string[];
  experience: string;
}
