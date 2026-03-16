import { Skill } from '../models/skills.model';

const ICON_PATHS = {
  fileCode: [
    'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4',
    'M14 2v4a2 2 0 0 0 2 2h4',
    'm9 18 3-3-3-3',
    'm5 12-3 3 3 3',
  ],
  palette: [
    'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
  ],
  droplet: [
    'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z',
  ],
  fileType: [
    'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4',
    'M14 2v4a2 2 0 0 0 2 2h4',
    'M2 12h6',
    'M5 12v6',
  ],
  triangle: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'],
  workflow: ['M7 11v4a2 2 0 0 0 2 2h4', 'M3 3h8v8H3z', 'M13 13h8v8h-8z'],
  database: [
    'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5',
    'M3 12c0 1.66 4 3 9 3s9-1.34 9-3',
    'M12 8c-4.97 0-9-1.34-9-3s4.03-3 9-3 9 1.34 9 3-4.03 3-9 3z',
  ],
} as const;

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML5', color: 'from-orange-500 to-red-500', iconPaths: ICON_PATHS.fileCode },
  { name: 'CSS3', color: 'from-blue-500 to-cyan-500', iconPaths: ICON_PATHS.palette },
  { name: 'Sass', color: 'from-pink-500 to-rose-500', iconPaths: ICON_PATHS.droplet },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-400', iconPaths: ICON_PATHS.fileType },
  { name: 'Angular', color: 'from-red-600 to-pink-500', iconPaths: ICON_PATHS.triangle },
  { name: 'RxJS', color: 'from-purple-500 to-indigo-500', iconPaths: ICON_PATHS.workflow },
  { name: 'NgRx', color: 'from-violet-500 to-purple-600', iconPaths: ICON_PATHS.database },
];
