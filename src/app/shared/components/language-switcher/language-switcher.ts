import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full p-1 shadow-lg">
      <button 
        (click)="setLanguage('en')"
        class="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
        [class.bg-emerald-500]="currentLang() === 'en'"
        [class.text-white]="currentLang() === 'en'"
        [class.text-gray-400]="currentLang() !== 'en'"
        [class.hover:text-emerald-400]="currentLang() !== 'en'"
      >
        EN
      </button>
      <button 
        (click)="setLanguage('ka')"
        class="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
        [class.bg-emerald-500]="currentLang() === 'ka'"
        [class.text-white]="currentLang() === 'ka'"
        [class.text-gray-400]="currentLang() !== 'ka'"
        [class.hover:text-emerald-400]="currentLang() !== 'ka'"
      >
        KA
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  private readonly languageService = inject(LanguageService);
  protected readonly currentLang = this.languageService.language;

  protected setLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
  }
}
