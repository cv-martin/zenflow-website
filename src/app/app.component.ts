import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyConsentComponent } from './components/privacy/privacy-consent.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PrivacyConsentComponent],
  template: `
    <!-- Global Living Background -->
    <div class="scanning-grid fixed-bg"></div>
    <div class="hero-glow fixed-bg"></div>
    <div class="brand-watermark fixed-bg" [class.page-mode]="currentWatermark !== 'Zenflow'">
      {{ currentWatermark }}
    </div>
    
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-privacy-consent />
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
    .brand-watermark {
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      &.page-mode {
        opacity: 0.015;
        letter-spacing: 0.05em;
      }
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
