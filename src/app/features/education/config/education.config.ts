import { Award, BookOpen, GraduationCap, LucideIconData } from 'lucide-angular';
import { EducationItem } from '../models/education.model';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    institution: 'TBC IT Academy',
    institutionKa: 'TBC IT აკადემია',
    program: 'Frontend Development',
    programKa: 'Frontend დეველოპმენტი',
    icon: Award,
    color: 'from-emerald-500 to-green-500',
    description: 'Intensive frontend development bootcamp',
    descriptionKa: 'Frontend დეველოპმენტის ინტენსიური ბუტკემპი',
  },
  {
    id: 2,
    institution: 'Commschool',
    institutionKa: 'Commschool',
    program: 'Front-end with Angular',
    programKa: 'Front-end Angular-ით',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    description: 'Specialized Angular framework training',
    descriptionKa: 'სპეციალიზებული ტრენინგი Angular ფრეიმვორკში',
  },
  {
    id: 3,
    institution: 'Business and Technology University',
    institutionKa: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი',
    program: 'Informational Technologies',
    programKa: 'საინფორმაციო ტექნოლოგიები',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    description: "Bachelor's degree in IT",
    descriptionKa: 'ბაკალავრის ხარისხი IT მიმართულებით',
  },
];
