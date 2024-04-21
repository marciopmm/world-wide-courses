import { Component, AfterViewInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'World Wide Courses';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      let script = this.renderer.createElement('script');
      script.src = 'assets/js/main.js';
      this.renderer.appendChild(document.body, script); 
    }
  }

}
