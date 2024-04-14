import { Component } from '@angular/core';
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";
import { PageServiceComponent } from "../../components/page-service/page-service.component";
import { AboutServiceComponent } from '../../components/about-service/about-service.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { TeamComponent } from '../../components/team/team.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      HeaderComponent,
      CarrouselComponent, 
      PageServiceComponent,
      AboutServiceComponent,
      CategoriesComponent,
      CoursesComponent,
      TeamComponent,
      FooterComponent
    ]
})
export class HomeComponent {

}
