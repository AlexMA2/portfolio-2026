import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SkillNode } from './skills.model';
import { INITIAL_SKILLS } from './skills.utils';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [UpperCasePipe, TranslocoModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  selectedNodeId = signal<string>('angular');
  activeCategory = signal<string>('all');

  skillsList = signal<SkillNode[]>(INITIAL_SKILLS);

  filteredSkills = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.skillsList();
    return this.skillsList().filter(s => s.category === cat);
  });

  selectedNode = computed(() => {
    return this.skillsList().find(s => s.id === this.selectedNodeId()) || this.skillsList()[0];
  });

  isNodeConnected(nodeId: string): boolean {
    const active = this.selectedNode();
    if (!active) return false;
    return active.id === nodeId || active.connections.includes(nodeId) || this.skillsList().find(s => s.id === nodeId)?.connections.includes(active.id) || false;
  }

  selectNode(id: string) {
    this.selectedNodeId.set(id);
  }

  setCategory(category: string) {
    this.activeCategory.set(category);
  }
}
