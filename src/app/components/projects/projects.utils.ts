import { Project } from './projects.model';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'fintech-playground',
    title: 'Fintech Playground',
    subtitle: 'projects.items.fintech-playground.subtitle',
    status: 'IN_PROGRESS',
    description: 'projects.items.fintech-playground.description',
    technologies: ['.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'JWT', 'Scalar', 'Azure'],
    githubUrl: 'https://github.com/AlexMA2/fintechplayground-api'
  },
  {
    id: 'pizza-api-nest',
    title: 'Pizza API Nest',
    subtitle: 'projects.items.pizza-api-nest.subtitle',
    status: 'IN_PROGRESS',
    description: 'projects.items.pizza-api-nest.description',
    technologies: ['NestJS', 'Typescript', 'PostgreSQL', 'JWT', 'AWS'],
    githubUrl: 'https://github.com/AlexMA2/pizza-api-nest'
  },
  {
    id: 'auto-from-swagger',
    title: 'AutoType (For Swagger)',
    subtitle: 'projects.items.auto-from-swagger.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.auto-from-swagger.description',
    technologies: ['Chrome Extension', 'Javascript', 'OpenAPI'],
    githubUrl: 'https://github.com/AlexMA2/auto-from-swagger'
  },
  {
    id: 'custom-world-map',
    title: 'Custom World Map',
    subtitle: 'projects.items.custom-world-map.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.custom-world-map.description',
    technologies: ['Angular', 'TurfJS', 'Tailwind CSS', 'ThreeJS', 'Angular Material', 'd3-geo'],
    link: 'https://custom-world-map.netlify.app/',
    githubUrl: 'https://github.com/AlexMA2/custom-world-map'
  },
  {
    id: 'git-clean-branches',
    title: 'Git Clean Branches',
    subtitle: 'projects.items.git-clean-branches.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.git-clean-branches.description',
    technologies: ['Shell', 'Git', 'Bash', 'PowerShell', 'Zsh'],
    githubUrl: 'https://github.com/AlexMA2/git-clean-branches'
  },
  {
    id: 'calculator',
    title: 'Calculator Game',
    subtitle: 'projects.items.calculator.subtitle',
    status: 'COMPLETED',
    description: 'projects.items.calculator.description',
    technologies: ['Angular', 'Firebase Auth', 'Firestore', 'Stripe', 'Tailwind CSS'],
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

