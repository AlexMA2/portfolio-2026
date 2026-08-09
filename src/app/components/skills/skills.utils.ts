import { SkillNode } from './skills.model';

export const INITIAL_SKILLS: SkillNode[] = [
  {
    id: 'angular',
    name: 'Angular 19+',
    category: 'frontend',
    level: 'skills.levels.expert',
    description: 'skills.items.angular.description',
    connections: ['typescript', 'ngrx', 'nx', 'testing'],
    experience: 'skills.items.angular.experience'
  },
  {
    id: 'react',
    name: 'React 18+ / Next.js',
    category: 'frontend',
    level: 'skills.levels.advanced',
    description: 'skills.items.react.description',
    connections: ['typescript', 'redux', 'productivity'],
    experience: 'skills.items.react.experience'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'skills.levels.expert',
    description: 'skills.items.typescript.description',
    connections: ['angular', 'react', 'node'],
    experience: 'skills.items.typescript.experience'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'skills.levels.expert',
    description: 'skills.items.tailwind.description',
    connections: ['angular', 'react'],
    experience: 'skills.items.tailwind.experience'
  },
  {
    id: 'ngrx',
    name: 'NgRx / Redux',
    category: 'frontend',
    level: 'skills.levels.advanced',
    description: 'skills.items.ngrx.description',
    connections: ['angular', 'react'],
    experience: 'skills.items.ngrx.experience'
  },
  {
    id: 'nx',
    name: 'Nx Monorepos',
    category: 'frontend',
    level: 'skills.levels.advanced',
    description: 'skills.items.nx.description',
    connections: ['angular'],
    experience: 'skills.items.nx.experience'
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    level: 'skills.levels.advanced',
    description: 'skills.items.node.description',
    connections: ['typescript', 'postgresql', 'mongodb'],
    experience: 'skills.items.node.experience'
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'backend',
    level: 'skills.levels.advanced',
    description: 'skills.items.dotnet.description',
    connections: ['postgresql'],
    experience: 'skills.items.dotnet.experience'
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'backend',
    level: 'skills.levels.advanced',
    description: 'skills.items.aws.description',
    connections: ['node', 'productivity'],
    experience: 'skills.items.aws.experience'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL / Mongo',
    category: 'backend',
    level: 'skills.levels.advanced',
    description: 'skills.items.postgresql.description',
    connections: ['node', 'dotnet'],
    experience: 'skills.items.postgresql.experience'
  },
  {
    id: 'testing',
    name: 'Unit & E2E Testing',
    category: 'testing',
    level: 'skills.levels.expert',
    description: 'skills.items.testing.description',
    connections: ['angular', 'react'],
    experience: 'skills.items.testing.experience'
  },
  {
    id: 'productivity',
    name: 'AI-Guided Dev & CI',
    category: 'productivity',
    level: 'skills.levels.expert',
    description: 'skills.items.productivity.description',
    connections: ['aws', 'testing'],
    experience: 'skills.items.productivity.experience'
  }
];
