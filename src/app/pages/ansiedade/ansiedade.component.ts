import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ansiedade',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './ansiedade.component.scss'
})
export class AnsiedadeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = "https://go.hotmart.com/E92420669N";
    }
  }
}
