import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesPageComponent } from './pages/courses/courses.component';
import { BarbeiroInicianteComponent } from './pages/barbeiro-iniciante/barbeiro-iniciante.component';
import { MarmitaComponent } from './pages/marmita/marmita.component';
import { AnsiedadeComponent } from './pages/ansiedade/ansiedade.component';
import { BartenderComponent } from './pages/bartender/bartender.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'courses', component: CoursesPageComponent},
    {'path': 'courses/barbeiro-iniciante', component: BarbeiroInicianteComponent},
    {'path': 'courses/marmita', component: MarmitaComponent},
    {'path': 'courses/ansiedade', component: AnsiedadeComponent},
    {'path': 'courses/bartender', component: BartenderComponent}
];
