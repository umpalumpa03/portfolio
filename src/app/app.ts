import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/layout/footer/footer';
import { Contact } from './features/contact/contact';
import { Education } from './features/education/education';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Hero, Skills, Projects, Education, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected projectsRef = viewChild<ElementRef>('projectsRef');

  public scrollToProjects(): void {
    this.projectsRef()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
