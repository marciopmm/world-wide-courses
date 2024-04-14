import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { CoursesComponent } from '../../components/courses/courses.component';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, CategoriesComponent, CoursesComponent ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesPageComponent {

}
