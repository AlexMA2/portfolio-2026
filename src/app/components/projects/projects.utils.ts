import { Project } from './projects.model';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'syncroute',
    title: 'SyncRoute',
    subtitle: 'projects.items.syncroute.subtitle',
    status: 'IN_PROGRESS',
    description: 'projects.items.syncroute.description',
    technologies: ['TypeScript', 'SQLite', 'IndexedDB', 'Capacitor', 'Node.js', 'RxJS'],
    githubUrl: 'https://github.com/AlexMA2/syncroute'
  },
  {
    id: 'uiforge',
    title: 'UI-Forge',
    subtitle: 'projects.items.uiforge.subtitle',
    status: 'IN_PROGRESS',
    description: 'projects.items.uiforge.description',
    technologies: ['Angular 19', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vite'],
    githubUrl: 'https://github.com/AlexMA2/ui-forge'
  },
  {
    id: 'calculator',
    title: 'Calculator Game',
    subtitle: 'projects.items.calculator.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.calculator.description',
    technologies: ['Angular', 'Firebase Auth', 'Firestore', 'GraphQL', 'Tailwind CSS'],
    link: 'https://thecalculatorgame.netlify.app',
    githubUrl: 'https://github.com/AlexMA2/calculator-game'
  },
  {
    id: 'monkeycode',
    title: 'Monkey Code',
    subtitle: 'projects.items.monkeycode.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.monkeycode.description',
    technologies: ['React 18', 'NextJS', 'Clerk Auth', 'Tailwind CSS', 'AWS Lambda'],
    link: 'https://monkey-code-nine.vercel.app',
    githubUrl: 'https://github.com/AlexMA2/monkey-code'
  }
];

