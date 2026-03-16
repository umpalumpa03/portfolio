import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from './models/projects.model';
import { PROJECTS_DATA } from './config/projects.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  public readonly projects: Project[] = PROJECTS_DATA;
}
