import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { Contact } from './features/contact/contact';
import { Education } from './features/education/education';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './features/footer/footer';

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
