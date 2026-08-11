import { Component, HostListener, OnInit, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Location } from '@angular/common';

interface LanguageOption {
  code: string;
  label: string;
  flagClass: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isDarkMode = signal<boolean>(true);
  currentLang = signal<string>('es');
  isDropdownOpen = signal<boolean>(false);

  languages = signal<LanguageOption[]>([
    { code: 'es', label: 'Español', flagClass: 'es' },
    { code: 'en', label: 'English', flagClass: 'us' },
    { code: 'pt', label: 'Português', flagClass: 'br' }
  ]);

  constructor(
    private translocoService: TranslocoService,
    private location: Location
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.setLightMode();
      } else {
        this.setDarkMode();
      }

      // Check saved language and URL
      const path = this.location.path();
      const urlLang = path.split('/')[1];
      let initialLang = 'es';
      
      if (['es', 'en', 'pt'].includes(urlLang)) {
        initialLang = urlLang;
      } else {
        initialLang = localStorage.getItem('lang') || 'es';
      }

      this.currentLang.set(initialLang);
      this.translocoService.setActiveLang(initialLang);
      this.location.replaceState(`/${initialLang}`);
    }
  }

  toggleTheme() {
    if (this.isDarkMode()) {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  toggleDropdown() {
    this.isDropdownOpen.update(val => !val);
  }

  selectLanguage(langCode: string) {
    this.currentLang.set(langCode);
    this.translocoService.setActiveLang(langCode);
    this.isDropdownOpen.set(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', langCode);
    }
    this.location.replaceState(`/${langCode}`);
  }

  getActiveLangOption(): LanguageOption {
    return this.languages().find(lang => lang.code === this.currentLang()) || this.languages()[0];
  }

  // Close dropdown on outside click
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.portfolio-header__lang-container')) {
      this.isDropdownOpen.set(false);
    }
  }

  private setDarkMode() {
    this.isDarkMode.set(true);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  private setLightMode() {
    this.isDarkMode.set(false);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  scrollToSection(sectionId: string) {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}

