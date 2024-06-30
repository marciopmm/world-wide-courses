import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-marmita',
  standalone: true,
  imports: [],
  template: ''
})
export class MarmitaComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.location.href = "https://go.hotmart.com/D92279287C";
      }
    }, 2000);    
  }
}
