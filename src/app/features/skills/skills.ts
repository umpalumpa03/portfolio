import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS_DATA } from './config/skills.config';
import { Skill } from './models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  public readonly skills: Skill[] = SKILLS_DATA;

  public readonly duplicatedSkills: Skill[] = [...SKILLS_DATA, ...SKILLS_DATA];
}
