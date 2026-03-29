import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EducationItem } from './models/education.model';
import { EDUCATION_DATA } from './config/education.config';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  private readonly languageService = inject(LanguageService);
  public readonly education: EducationItem[] = EDUCATION_DATA;

  protected getVal(item: EducationItem, key: 'institution' | 'program' | 'description'): string {
    const kaKey = (key + 'Ka') as keyof EducationItem;
    return this.languageService.language() === 'ka' && item[kaKey]
      ? (item[kaKey] as string)
      : (item[key] as string);
  }
}
