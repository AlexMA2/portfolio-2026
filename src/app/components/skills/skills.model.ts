export interface SkillNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'testing' | 'productivity';
  level: 'Expert' | 'Advanced' | 'Proficient';
  description: string;
  connections: string[];
  experience: string;
}
