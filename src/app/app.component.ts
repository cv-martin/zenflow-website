import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Subtle page background -->
    <div class="scanning-grid"></div>
    <div class="hero-glow"></div>
    
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 2;
    }
    /* Classy scanning grid: barely-there lines, no pulse */
    .scanning-grid {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background:
        linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px),
        linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px);
      background-size: 80px 80px;
      z-index: 0;
      pointer-events: none;
      transform: translate3d(0, 0, 0);
      /* Softer fade at edges so it doesn't feel like a grid sticker */
      -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%);
      mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%);
    }
    /* Subtle top-right glow — adds warmth without screaming purple */
    .hero-glow {
      position: fixed;
      top: -15%;
      right: -5%;
      width: 60vw;
      height: 60vh;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 70%);
      filter: blur(90px);
      z-index: 0;
      pointer-events: none;
      transform: translate3d(0,0,0);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Zenflow - Modern Retail OS';
  currentWatermark = 'Zenflow';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      this.updateWatermark(url);
    });
  }

  private updateWatermark(url: string) {
    if (url.includes('billing')) this.currentWatermark = 'BILLING';
    else if (url.includes('inventory')) this.currentWatermark = 'INVENTORY';
    else if (url.includes('accounting')) this.currentWatermark = 'ACCOUNTING';
    else if (url.includes('omnichannel')) this.currentWatermark = 'OMNICHANNEL';
    else if (url.includes('pricing')) this.currentWatermark = 'PRICING';
    else if (url.includes('contact')) this.currentWatermark = 'CONTACT';
    else this.currentWatermark = 'Zenflow';
  }
}
