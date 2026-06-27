import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { Project } from './projects.model';
import { INITIAL_PROJECTS } from './projects.utils';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedFilter = signal<'ALL' | 'COMPLETED' | 'IN_PROGRESS'>('ALL');

  projects = signal<Project[]>(INITIAL_PROJECTS);

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'ALL') return this.projects();
    return this.projects().filter(p => p.status === filter);
  });

  setFilter(filter: 'ALL' | 'COMPLETED' | 'IN_PROGRESS') {
    this.selectedFilter.set(filter);
  }
}
