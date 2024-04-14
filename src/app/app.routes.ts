import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesPageComponent } from './pages/courses/courses.component';
import { BarbeiroInicianteComponent } from './pages/barbeiro-iniciante/barbeiro-iniciante.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'courses', component: CoursesPageComponent},
    {'path': 'courses/barbeiro-iniciante', component: BarbeiroInicianteComponent}
];
