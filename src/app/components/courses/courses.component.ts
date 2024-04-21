import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  coursesList = [    
    {
      id: 1,      
      name: 'Curso de Barbeiro Iniciante',
      description: 'Curso completo para iniciar na Profissão de Barbeiro',
      imgSource: '/assets/img/Barbeiro01_Edited.png',
      link: 'courses/barbeiro-iniciante'
    },
    {
      id: 2,
      name: 'Bartender Profissional',
      description: 'Curso completo de Bartender para trabalhar em bares e casas noturnas',
      imgSource: '/assets/img/bartender1.png',
      link: 'courses/bartender'
    },
    {
      id: 3,      
      name: 'Domine Sua Ansiedade',
      description: 'Aprenda as melhores técnicas para vencer a ansiedade e alcançar a vida que sempre quis.',
      imgSource: '/assets/img/ansiedade.png',
      link: 'courses/ansiedade'
    },
    {
      id: 4,      
      name: 'Marmita Fit Congelada',
      description: 'Aprenda a fazer deliciosas marmitas congeladas em pouco tempo',
      imgSource: '/assets/img/marmitafit.png',
      link: 'courses/marmita'
    },    
    {
      id: 5,
      name: 'Adestramento de Cães em Casa',
      description: 'Siga os passos deste e-book e tranforme seu cachorro bagunceiro em um cão obediente e dócil.',
      imgSource: '/assets/img/adestramento.png',
      link: 'courses/adestramento'
    }
  ];
}
