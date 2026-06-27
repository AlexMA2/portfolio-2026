import { Project } from './projects.model';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'syncroute',
    title: 'SyncRoute',
    subtitle: 'Offline-First Mobile & Web Sync Engine',
    status: 'IN_PROGRESS',
    description: 'A cross-platform database synchronization module for Capacitor and web clients. Syncs offline-local SQLite/IndexDB changes with remote PostgreSQL/MongoDB instances using automated conflict resolution and optimized compression.',
    technologies: ['TypeScript', 'SQLite', 'IndexedDB', 'Capacitor', 'Node.js', 'RxJS'],
    githubUrl: 'https://github.com/AlexMA2/syncroute'
  },
  {
    id: 'uiforge',
    title: 'UI-Forge',
    subtitle: 'AI Angular Visual Builder',
    status: 'IN_PROGRESS',
    description: 'A visual designer application translating drag-and-drop wireframes directly into standard Angular 19+ standalone components. Generates fully tree-shakable code styled with Tailwind CSS, utilizing schema-based templates.',
    technologies: ['Angular 19', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vite'],
    githubUrl: 'https://github.com/AlexMA2/ui-forge'
  },
  {
    id: 'calculator',
    title: 'Calculator Game',
    subtitle: 'Interactive Speed Calculation App',
    status: 'COMPLETED',
    description: 'An engaging web application to improve mathematical speed-solving routines. Implemented real-time scoreboards, dynamic problem generation, and session profiles.',
    technologies: ['Angular', 'Firebase Auth', 'Firestore', 'GraphQL', 'Tailwind CSS'],
    link: 'https://thecalculatorgame.netlify.app',
    githubUrl: 'https://github.com/AlexMA2/calculator-game'
  },
  {
    id: 'monkeycode',
    title: 'Monkey Code',
    subtitle: 'Developer Typetest Simulator',
    status: 'COMPLETED',
    description: 'Minimalist speed-typing testing simulator for developers. Incorporates source code snippets, speed metrics (WPM, Accuracy), authentication dashboards, and user performance progress records.',
    technologies: ['React 18', 'NextJS', 'Clerk Auth', 'Tailwind CSS', 'AWS Lambda'],
    link: 'https://monkey-code-nine.vercel.app',
    githubUrl: 'https://github.com/AlexMA2/monkey-code'
  }
];
