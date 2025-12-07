import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Archive} from './archive/archive';
export const routes: Routes = [
  {path: "home", component: Home},
  {path: "about", component: About},
  {path: "archive", component: Archive},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", redirectTo: "home"}
];
