import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  private readonly languageService = inject(LanguageService);
  protected readonly currentLang = this.languageService.language;

  protected setLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
  }
}
