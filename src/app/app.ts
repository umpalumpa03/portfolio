import { ChangeDetectionStrategy, Component, ElementRef, viewChild, inject, OnInit } from '@angular/core';
import { Contact } from './features/contact/contact';
import { Education } from './features/education/education';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './features/footer/footer';
import { Toast } from './shared/components/toast/toast';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [Hero, Skills, Projects, Education, Contact, Footer, Toast, LanguageSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly languageService = inject(LanguageService);
  protected readonly currentLang = this.languageService.language;
  protected projectsRef = viewChild<ElementRef>('projectsRef');

  ngOnInit() {
    this.languageService.initLanguage();
  }

  public scrollToProjects(): void {
    this.projectsRef()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
