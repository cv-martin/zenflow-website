import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-content">
      <section class="policy-section reveal-active">
        <div class="eyebrow">LEGAL</div>
        <h1 class="gradient-text">Privacy Policy</h1>
        <p class="last-updated">Last Updated: March 2026</p>
        
        <div class="policy-content glass-card">
          <div class="placeholder-notice">
            <div class="icon">📄</div>
            <h3>Content Coming Soon</h3>
            <p>We are currently updating our Privacy Policy to reflect our latest security standards. Please check back shortly.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .policy-section { padding: 8rem 0 10rem; text-align: center; }
    .last-updated { color: #64748b; font-size: 0.9rem; margin-bottom: 3rem; }
    .policy-content { max-width: 800px; margin: 0 auto; padding: 4rem !important; min-height: 400px; display: flex; align-items: center; justify-content: center; }
    .placeholder-notice {
      .icon { font-size: 3rem; margin-bottom: 1.5rem; }
      h3 { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem; }
      p { color: #475569; line-height: 1.6; }
    }
  `]
})
export class PrivacyPolicyComponent {}
