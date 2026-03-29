import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Project } from './models/projects.model';
import { PROJECTS_DATA } from './config/projects.config';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly languageService = inject(LanguageService);
  public readonly projects: Project[] = PROJECTS_DATA;

  protected getProjectTitle(project: Project): string {
    return this.languageService.language() === 'ka' && project.titleKa
      ? project.titleKa
      : project.title;
  }

  protected getProjectDescription(project: Project): string {
    return this.languageService.language() === 'ka' && project.descriptionKa
      ? project.descriptionKa
      : project.description;
  }
}
