import { SkillNode } from './skills.model';

export const INITIAL_SKILLS: SkillNode[] = [
  {
    id: 'angular',
    name: 'Angular 19+',
    category: 'frontend',
    level: 'Expert',
    description: 'Used for architecting high-performance enterprise applications, including custom directive frameworks and dynamic, metadata-driven form systems.',
    connections: ['typescript', 'ngrx', 'nx', 'testing'],
    experience: 'Big Pebble Design, Invian SAC, LastM Viz Group, Calculator Game'
  },
  {
    id: 'react',
    name: 'React 18+ / Next.js',
    category: 'frontend',
    level: 'Advanced',
    description: 'Leveraged for modern static and SSR web apps, integrating state management and API routes.',
    connections: ['typescript', 'redux', 'productivity'],
    experience: 'Monkey Code, Personal Projects'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'Expert',
    description: 'Core programming language for frontend and backend logic. Enforces strict type safety and scale-ready codebases.',
    connections: ['angular', 'react', 'node'],
    experience: 'Big Pebble Design, Invian SAC, LastM Viz Group'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Expert',
    description: 'Utility-first CSS styling for highly responsive, clean layouts and custom design systems.',
    connections: ['angular', 'react'],
    experience: 'Big Pebble Design, Invian SAC'
  },
  {
    id: 'ngrx',
    name: 'NgRx / Redux',
    category: 'frontend',
    level: 'Advanced',
    description: 'State management patterns for Angular and React to handle complex, scalable data flows.',
    connections: ['angular', 'react'],
    experience: 'Big Pebble Design'
  },
  {
    id: 'nx',
    name: 'Nx Monorepos',
    category: 'frontend',
    level: 'Advanced',
    description: 'Monorepo toolset used to scale codebases across multiple applications and shared libraries, simplifying build setups.',
    connections: ['angular'],
    experience: 'Big Pebble Design'
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    description: 'Building fast RESTful APIs and asynchronous backends, including third-party integrations (Stripe, Checkr).',
    connections: ['typescript', 'postgresql', 'mongodb'],
    experience: 'Big Pebble Design, Personal Projects'
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'backend',
    level: 'Advanced',
    description: 'Full stack development of secure, scalable APIs and enterprise integration logic.',
    connections: ['postgresql'],
    experience: 'Big Pebble Design'
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'backend',
    level: 'Advanced',
    description: 'Deploying and managing microservices using Lambda, S3, RDS, and API Gateway.',
    connections: ['node', 'productivity'],
    experience: 'Monkey Code'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL / Mongo',
    category: 'backend',
    level: 'Advanced',
    description: 'Relational database designs, query optimization, and NoSQL storage with Firestore and MongoDB.',
    connections: ['node', 'dotnet'],
    experience: 'Big Pebble Design, LastM Viz Group'
  },
  {
    id: 'testing',
    name: 'Unit & E2E Testing',
    category: 'testing',
    level: 'Expert',
    description: 'Comprehensive test coverage using Karma, Jest, Cypress, and custom browser extensions to optimize CI pipelines.',
    connections: ['angular', 'react'],
    experience: 'Big Pebble Design, Invian SAC'
  },
  {
    id: 'productivity',
    name: 'AI-Guided Dev & CI',
    category: 'productivity',
    level: 'Expert',
    description: 'Maximizing development productivity using advanced AI tools (Claude Code, Gemini) and building customized GitHub actions pipelines.',
    connections: ['aws', 'testing'],
    experience: 'Big Pebble Design, Workspace Automation'
  }
];
