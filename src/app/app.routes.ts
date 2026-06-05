import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Dashboard} from './pages/dashboard/dashboard';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
 
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];