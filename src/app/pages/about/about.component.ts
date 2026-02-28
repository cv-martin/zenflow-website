import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container page-content">
      <div class="about-hero text-center reveal-active">
        <div class="eyebrow">OUR MISSION</div>
        <h1 class="gradient-text">The Central OS for<br>Modern Retail Scale.</h1>
        <p class="lead">We are building the intelligent backbone that powers the next decade of Indian commerce.</p>
      </div>
      
      <div class="about-grid">
        <div class="about-card glass-card">
          <h3>The Zenflow Suite</h3>
          <p>
            Zenflow is a unified operating system built to simplify the complex operations of multi-chain retail stores. 
            By merging <strong>Billing</strong>, <strong>Inventory</strong>, <strong>Accounting</strong>, and <strong>Omnichannel Commerce</strong> into a single, high-fidelity platform, we eliminate the operational lag that traps capital and stifles growth.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-content { padding: 8rem 0; }
    .about-hero { max-width: 800px; margin: 0 auto 6rem; }
    h1 { font-size: 3.5rem; font-weight: 950; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 2rem; }
    .lead { font-size: 1.35rem; color: var(--text-light); font-weight: 500; line-height: 1.6; }
    
    .about-grid { max-width: 1000px; margin: 0 auto; padding: 0 2rem; }
    .about-card { padding: 3.5rem !important; border-radius: 24px !important; }
    .about-card h3 { font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; color: var(--text-dark); }
    .about-card p { font-size: 1.2rem; color: var(--text-medium); line-height: 1.8; font-weight: 500; }
    .about-card strong { color: var(--primary-color); font-weight: 800; }
    @media (max-width: 1024px) {
      .page-content { padding: 6rem 1.5rem; }
      .about-hero { margin-bottom: 4rem; }
      h1 { font-size: 2.75rem; }
      .about-card { padding: 2.5rem !important; }
    }

    @media (max-width: 640px) {
      .page-content { padding-top: 4rem; }
      h1 { font-size: 2.25rem; line-height: 1.2; }
      .lead { font-size: 1.15rem; margin-bottom: 3rem; }
      .about-card { padding: 2rem 1.5rem !important; }
      .about-card h3 { font-size: 1.6rem; }
      .about-card p { font-size: 1.1rem; }
    }
  `]
})
export class AboutComponent { }
