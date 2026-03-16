import { Project } from '../models/projects.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Final Demo Project',
    description:
      'A comprehensive demonstration of Angular best practices featuring state management with NgRx, reactive programming with RxJS, and modern Angular Signals for optimal performance.',
    image:
      'https://images.unsplash.com/photo-1770579908684-b135e110fd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmd1bGFyJTIwd2ViJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzY4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular 21', 'NgRx', 'Signals', 'RxJS'],
    liveUrl: 'https://uchabank.netlify.app/bank/dashboard',
    githubUrl: 'https://github.com/umpalumpa03/final-demo',
  },
  {
    id: 2,
    title: 'Travel Banking Dashboard',
    description:
      'A modern fintech dashboard for travel banking services, built with Angular and styled using TailwindCSS and PrimeNG components. Features real-time data updates and responsive design.',
    image:
      'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBiYW5raW5nJTIwZmludGVjaCUyMGFwcHxlbnwxfHx8fDE3NzM2ODE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular 21', 'TailwindCSS', 'PrimeNG', 'Signals'],
    liveUrl: 'https://tailwind-digitalbanking.netlify.app',
    githubUrl: 'https://github.com/umpalumpa03/hackathon-tailwind',
  },
  {
    id: 3,
    title: 'Quiz Application',
    description:
      'An interactive quiz platform leveraging NgRx Signal Store for state management and Reactive Forms for dynamic question handling. Built with TypeScript for type-safety and maintainability.',
    image:
      'https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2UlMjBtb2JpbGV8ZW58MXx8fHwxNzczNjgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['NgRx Signal Store', 'Reactive Forms', 'TypeScript'],
    liveUrl: 'https://uchaquiz.netlify.app',
    githubUrl: 'https://github.com/umpalumpa03/angular-quiz-app',
  },
];
