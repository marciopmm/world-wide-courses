import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bartender',
  standalone: true,
  imports: [],
  template: "",
  styleUrl: './bartender.component.scss'
})
export class BartenderComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = "https://go.hotmart.com/E92552450J";
    }
  }
}

