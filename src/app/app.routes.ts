import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: ':lang',
    component: App,
    title: 'Ucha Sephiskveradze | Angular Developer',
  },
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'en',
  },
];
