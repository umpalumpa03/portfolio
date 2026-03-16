import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EducationItem } from './models/education.model';
import { EDUCATION_DATA } from './config/education.config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-education',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  public readonly education: EducationItem[] = EDUCATION_DATA;
}
