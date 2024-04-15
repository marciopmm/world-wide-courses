import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-adestramento',
  standalone: true,
  imports: [],
  template: `
    <p>
      adestramento works!
    </p>
  `,
  styleUrl: './adestramento.component.scss'
})
export class AdestramentoComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = "https://go.hotmart.com/L92278268H";
    }
  }
}
