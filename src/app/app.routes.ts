import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Blogs } from './pages/blogs/blogs';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'blogs',
    component: Blogs
  }
];
