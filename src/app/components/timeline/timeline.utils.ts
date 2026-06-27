import { TimelineItem } from './timeline.model';

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const MIN_YEAR = 2018;
export const MAX_YEAR = 2026;
export const TOTAL_MONTHS = (MAX_YEAR - MIN_YEAR + 1) * 12;

export const INITIAL_TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'unmsm',
    role: 'Bachiller en Ingeniería de Software',
    company: 'UNMSM',
    location: 'Lima, Perú',
    countryCode: 'pe',
    startMonth: 3,
    startYear: 2018,
    endMonth: 12,
    endYear: 2023,
    type: 'education',
    description: [
      'Committed to full academic software engineering syllabus, graduating with high grades by focusing on web development, systems designs, and databases administration.'
    ]
  },
  {
    id: 'britanico',
    role: 'Inglés Avanzado',
    company: 'BRITÁNICO',
    location: 'Lima, Perú',
    countryCode: 'pe',
    startMonth: 1,
    startYear: 2019,
    endMonth: 12,
    endYear: 2022,
    type: 'education',
    description: [
      'Certified advanced oral and written English proficiency, passing with Distinction level by completing a comprehensive 36-month language program.'
    ]
  },
  {
    id: 'lastm',
    role: 'Full Stack Developer',
    company: 'LastM Viz Group',
    location: 'South Korea (Remote)',
    countryCode: 'kr',
    startMonth: 10,
    startYear: 2022,
    endMonth: 11,
    endYear: 2022,
    type: 'work',
    description: [
      'Acquired 10k+ platform registrations by designing, architecting, and deploying the company\'s landing page within Angular 14 and Firebase.',
      'Created high-availability backend flows, achieving 99.9% uptime by utilizing Firebase Functions and Firestore.',
      'Secured monetary checkouts, reducing abandonment by 18% by integrating PayPal API and reactive metrics panels.'
    ]
  },
  {
    id: 'invian',
    role: 'Front End Developer',
    company: 'Invian SAC',
    location: 'Perú (Remote)',
    countryCode: 'pe',
    startMonth: 1,
    startYear: 2023,
    endMonth: 9,
    endYear: 2025,
    type: 'work',
    description: [
      'Boosted client platform adoption by 40% by leading graphical analysis and developing dynamic components using Angular 16 and Tailwind CSS.',
      'Reduced visual template creation overhead by 50% by building metadata-driven dynamic forms and mapping modules for DOOH logistics.',
      'Maximized layout processor output, scaling daily visual renders by 15% by structuring business rules for Digital Out-of-Home layouts.'
    ]
  },
  {
    id: 'bluemarbel',
    role: 'Full Stack / Front End Developer',
    company: 'Big Pebble Design',
    location: 'USA (Remote)',
    countryCode: 'us',
    startMonth: 9,
    startYear: 2025,
    endMonth: 6,
    endYear: 2026,
    type: 'work',
    description: [
      'Optimized system speed and UI modularity, improving rendering efficiency by 15% by using Angular 19, Firebase, and Nx to construct critical platform modules.',
      'Reduced developer code redundancy by 25% by designing custom directives and abstract standard reuse workflows.',
      'Decreased testing time by 20% by building a bespoke browser extension to optimize continuous integration flows.',
      'Reduced query authentication latency by 30% by developing a custom browser tool for Swagger integration.'
    ]
  }
];
