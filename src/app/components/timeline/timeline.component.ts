import { Component, signal, computed } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { TimelineItem, PositionedItem } from './timeline.model';
import {
  INITIAL_TIMELINE_ITEMS,
  MONTH_NAMES,
  MIN_YEAR,
  MAX_YEAR,
  TOTAL_MONTHS
} from './timeline.utils';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, FormsModule, TranslocoModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  selectedItemId = signal<string>('bluemarbel');
  animateDetails = signal<boolean>(false);
  activeYear = signal<number>(2018);

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  timelineItems = signal<TimelineItem[]>(INITIAL_TIMELINE_ITEMS);

  minYear = MIN_YEAR;
  maxYear = MAX_YEAR;
  totalMonths = TOTAL_MONTHS;

  yearsScale = computed(() => {
    const years = [];
    for (let y = this.minYear; y <= this.maxYear; y++) {
      years.push({
        year: y,
        left: ((y - this.minYear) * 12 / this.totalMonths) * 100
      });
    }
    return years;
  });

  monthsScale = computed(() => {
    const ticks = [];
    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let y = this.minYear; y <= this.maxYear; y++) {
      for (let m = 1; m <= 12; m++) {
        const monthIndex = ((y - this.minYear) * 12) + (m - 1);
        ticks.push({
          id: `${y}-${m}`,
          month: m,
          label: shortMonths[m - 1],
          left: (monthIndex / this.totalMonths) * 100
        });
      }
    }
    return ticks;
  });

  positionedItems = computed<PositionedItem[]>(() => {
    const items = this.timelineItems();
    const getMonthOffset = (m: number, y: number) => {
      return ((y - this.minYear) * 12) + (m - 1);
    };

    const tempPositioned = items.map(item => {
      const startOffset = getMonthOffset(item.startMonth, item.startYear);
      const endY = item.endYear || this.maxYear;
      const endM = item.endMonth || 6;
      const endOffset = getMonthOffset(endM, endY) + 1;
      
      const left = (startOffset / this.totalMonths) * 100;
      const width = ((endOffset - startOffset) / this.totalMonths) * 100;

      const startMonthStr = MONTH_NAMES[item.startMonth - 1];
      const endMonthStr = item.endYear ? MONTH_NAMES[item.endMonth - 1] : 'Present';
      const endYearStr = item.endYear ? `, ${item.endYear}` : '';
      const displayPeriod = `${startMonthStr}, ${item.startYear} - ${endMonthStr}${endYearStr}`;

      return {
        ...item,
        left,
        width,
        startOffset,
        endOffset,
        displayPeriod,
        row: 0
      };
    });

    tempPositioned.sort((a, b) => a.startOffset - b.startOffset);

    const rowEndOffsets: number[] = [];
    const finalItems = tempPositioned.map(item => {
      let assignedRow = 0;
      while (assignedRow < rowEndOffsets.length) {
        if (rowEndOffsets[assignedRow] <= item.startOffset) {
          break;
        }
        assignedRow++;
      }
      rowEndOffsets[assignedRow] = item.endOffset;
      item.row = assignedRow;
      return item;
    });

    return finalItems;
  });

  totalRows = computed(() => {
    const items = this.positionedItems();
    if (items.length === 0) return 1;
    return Math.max(...items.map(i => i.row)) + 1;
  });

  selectedItem = computed(() => {
    return this.positionedItems().find(i => i.id === this.selectedItemId()) || this.positionedItems()[0];
  });

  selectItem(id: string) {
    this.selectedItemId.set(id);
    this.animateDetails.set(true);
    setTimeout(() => {
      this.animateDetails.set(false);
    }, 500);

    this.scrollToDetails();
  }

  scrollToDetails() {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const panel = document.querySelector('.experience-timeline__details-panel');
        if (panel) {
          const rect = panel.getBoundingClientRect();
          const targetY = window.pageYOffset + rect.top - 120;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      }
    }, 120);
  }

  scrollToYear(year: number) {
    this.activeYear.set(year);
    if (typeof document !== 'undefined') {
      const container = document.querySelector('.experience-timeline__viewport');
      if (container) {
        const totalScrollWidth = container.scrollWidth - container.clientWidth;
        const pct = (year - this.minYear) / (this.maxYear - this.minYear);
        container.scrollTo({
          left: pct * totalScrollWidth,
          behavior: 'smooth'
        });
      }
    }
  }

  prevYear() {
    const current = this.activeYear();
    if (current > this.minYear) {
      this.scrollToYear(current - 1);
    }
  }

  nextYear() {
    const current = this.activeYear();
    if (current < this.maxYear) {
      this.scrollToYear(current + 1);
    }
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    if (scrollWidth > 0) {
      const pct = scrollLeft / scrollWidth;
      const yearFloat = this.minYear + (pct * (this.maxYear - this.minYear));
      this.activeYear.set(Math.round(yearFloat));
    }
  }

  onYearInputChanged(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    let val = parseInt(inputEl.value);
    
    if (isNaN(val)) {
      inputEl.value = this.activeYear().toString();
      return;
    }

    if (val.toString().length > 4) {
      val = parseInt(val.toString().substring(0, 4));
    }

    if (val < this.minYear) {
      val = this.minYear;
    } else if (val > this.maxYear) {
      val = this.maxYear;
    }

    inputEl.value = val.toString();
    this.scrollToYear(val);
  }

  // Mouse Drag Scroll Handlers
  onMouseDown(event: MouseEvent) {
    if (typeof document === 'undefined') return;
    const container = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const container = event.currentTarget as HTMLElement;
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    container.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
    const container = event.currentTarget as HTMLElement;
    container.style.cursor = 'grab';
  }

  onMouseLeave(event: MouseEvent) {
    this.isDragging = false;
    const container = event.currentTarget as HTMLElement;
    container.style.cursor = 'grab';
  }
}
