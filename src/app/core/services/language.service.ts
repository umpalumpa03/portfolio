import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

export type Language = 'en' | 'ka';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  
  private currentLanguage = signal<Language>('en');
  public readonly language = this.currentLanguage.asReadonly();

  constructor() {
    this.translate.addLangs(['en', 'ka']);
    this.translate.setDefaultLang('en');
  }

  public initLanguage(): void {
    // Sync language with URL on initial load and route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.syncWithUrl();
    });
    
    // Initial sync
    this.syncWithUrl();
  }

  private syncWithUrl(): void {
    const root = this.router.routerState.snapshot.root;
    let route = root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    
    const lang = route.params['lang'] as Language;
    if (lang && (lang === 'en' || lang === 'ka')) {
      this.applyLanguage(lang);
    } else if (this.router.url === '/') {
       this.router.navigate(['/en']);
    }
  }

  public setLanguage(lang: Language): void {
    this.router.navigate([`/${lang}`]);
  }

  private applyLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
}
