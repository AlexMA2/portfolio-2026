export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  countryCode?: string; // e.g. 'pe', 'us', 'kr'
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number;   // 1-12
  endYear: number;     // 0 if Present
  type: string;
  description: string[];
}

export interface PositionedItem extends TimelineItem {
  left: number;       // percentage
  width: number;      // percentage
  row: number;        // grid track row index
  displayPeriod: string;
}
