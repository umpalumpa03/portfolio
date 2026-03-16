import { LucideIconData } from 'lucide-angular';

export interface EducationItem {
  id: number;
  institution: string;
  program: string;
  description: string;
  color: string;
  icon: LucideIconData;
}
