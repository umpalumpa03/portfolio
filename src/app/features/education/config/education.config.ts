import { Award, BookOpen, GraduationCap, LucideIconData } from 'lucide-angular';
import { EducationItem } from '../models/education.model';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    institution: 'TBC IT Academy',
    program: 'Frontend Development',
    icon: Award,
    color: 'from-emerald-500 to-green-500',
    description: 'Intensive frontend development bootcamp',
  },
  {
    id: 2,
    institution: 'Commschool',
    program: 'Front-end with Angular',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    description: 'Specialized Angular framework training',
  },
  {
    id: 3,
    institution: 'Business and Technology University',
    program: 'Informational Technologies',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    description: "Bachelor's degree in IT",
  },
];
