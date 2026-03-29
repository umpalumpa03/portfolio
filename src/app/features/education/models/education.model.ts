import { LucideIconData } from 'lucide-angular';

export interface EducationItem {
  id: number;
  institution: string;
  institutionKa?: string;
  program: string;
  programKa?: string;
  description: string;
  descriptionKa?: string;
  color: string;
  icon: LucideIconData;
}
