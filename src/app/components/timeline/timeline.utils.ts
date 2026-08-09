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
    role: 'timeline.items.unmsm.role',
    company: 'UNMSM',
    location: 'timeline.items.unmsm.location',
    countryCode: 'pe',
    startMonth: 3,
    startYear: 2018,
    endMonth: 12,
    endYear: 2023,
    type: 'timeline.types.education',
    description: [
      'timeline.items.unmsm.desc_1'
    ]
  },
  {
    id: 'britanico',
    role: 'timeline.items.britanico.role',
    company: 'BRITÁNICO',
    location: 'timeline.items.britanico.location',
    countryCode: 'pe',
    startMonth: 1,
    startYear: 2019,
    endMonth: 12,
    endYear: 2022,
    type: 'timeline.types.education',
    description: [
      'timeline.items.britanico.desc_1'
    ]
  },
  {
    id: 'lastm',
    role: 'timeline.items.lastm.role',
    company: 'LastM Viz Group',
    location: 'timeline.items.lastm.location',
    countryCode: 'kr',
    startMonth: 10,
    startYear: 2022,
    endMonth: 11,
    endYear: 2022,
    type: 'timeline.types.work',
    description: [
      'timeline.items.lastm.desc_1',
      'timeline.items.lastm.desc_2',
      'timeline.items.lastm.desc_3'
    ]
  },
  {
    id: 'invian',
    role: 'timeline.items.invian.role',
    company: 'Invian SAC',
    location: 'timeline.items.invian.location',
    countryCode: 'pe',
    startMonth: 1,
    startYear: 2023,
    endMonth: 9,
    endYear: 2025,
    type: 'timeline.types.work',
    description: [
      'timeline.items.invian.desc_1',
      'timeline.items.invian.desc_2',
      'timeline.items.invian.desc_3'
    ]
  },
  {
    id: 'bluemarbel',
    role: 'timeline.items.bluemarbel.role',
    company: 'Big Pebble Design',
    location: 'timeline.items.bluemarbel.location',
    countryCode: 'us',
    startMonth: 9,
    startYear: 2025,
    endMonth: 6,
    endYear: 2026,
    type: 'timeline.types.work',
    description: [
      'timeline.items.bluemarbel.desc_1',
      'timeline.items.bluemarbel.desc_2',
      'timeline.items.bluemarbel.desc_3',
      'timeline.items.bluemarbel.desc_4'
    ]
  }
];

