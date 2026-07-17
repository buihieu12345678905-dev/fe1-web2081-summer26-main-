import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Stories } from './pages/stories/stories';
import { AddStory } from './app-story/app-story';
import { Lab6 } from './lab6/lab6';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: About,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'app-story',
    component: AddStory,
  },
  {
    path: 'lab6',
    component: Lab6
  }
];
