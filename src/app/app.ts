import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslocoModule } from '@ngneat/transloco';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslocoModule,
    HeaderComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Alex Mamani | Senior Front End & Full Stack Developer');

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title());

    this.meta.addTags([
      { name: 'description', content: 'Alex Mamani - Senior Full Stack & Front End Engineer specializing in Angular 19+, React, and robust cloud services.' },
      { name: 'keywords', content: 'Alex Mamani, Software Engineer, Angular 19, React, Next.js, Node.js, .NET, Remote US, Peru' },
      { name: 'author', content: 'Alex Mamani' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Alex Mamani | Portfolio' },
      { property: 'og:description', content: 'Professional portfolio showcasing next-gen web applications, offline-sync tools, and scalable software solutions.' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:image', content: 'https://alexmamani.com/profile.jpg' }
    ]);
  }
}
