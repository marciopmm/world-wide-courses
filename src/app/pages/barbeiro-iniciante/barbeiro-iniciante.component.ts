import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-barbeiro-iniciante',
  standalone: true,
  imports: [],
  templateUrl: './barbeiro-iniciante.component.html',
  styleUrl: './barbeiro-iniciante.component.scss'
})
export class BarbeiroInicianteComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = "https://go.hotmart.com/J92374765T";
    }
  }
}
