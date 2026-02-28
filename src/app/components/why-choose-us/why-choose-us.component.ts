import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="why-us-section">
      <div class="container">
        <!-- Human-Centric Header -->
        <div class="section-header" appScrollReveal>
          <div class="section-label">WHY OUR CUSTOMERS CHOOSE Zenflow</div>
          <h2 class="headline">Designed for Those Who <br>Refuse to Outgrow Their Software.</h2>
          <p class="subtext">
            Power without complexity — built for modern retail growth.
          </p>
        </div>

        <!-- Asymmetric Bento Grid -->
        <div class="bento-grid">
          
          <!-- Featured Pillar 1: UX (Smartphone Simplicity) -->
          <!-- Spans 2 columns to highlight Emotional Hook -->
          <div class="bento-card featured-card stagger-1" appScrollReveal>
            <div class="card-content">
              <div class="icon-box featured-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke-width="2"/>
                  <path d="M12 18h.01" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="text-group">
                <h3>Zero-Training Interface</h3>
                <p>Forget complex manuals. Your staff can start billing in minutes with a design that feels as simple as a smartphone app.</p>
              </div>
            </div>
            <div class="visual-hint"></div>
          </div>

          <!-- Pillar 2: Pricing -->
          <div class="bento-card stagger-2" appScrollReveal>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Transparent Pricing</h3>
            <p>No hidden fees. Usage-based pricing that scales only when you do.</p>
          </div>

          <!-- Pillar 3: Control -->
          <div class="bento-card stagger-3" appScrollReveal>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke-width="2"/>
                <path d="M8 21h8M12 17v4" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Unified Commerce Control</h3>
            <p>Manage billing, inventory, and accounting from one single, calm dashboard.</p>
          </div>

          <!-- Pillar 4: Human Support -->
          <div class="bento-card stagger-4" appScrollReveal>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M12 11a4 4 0 100-8 4 4 0 000 8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>World-Class Support</h3>
            <p>Direct access to a dedicated retail expert who understands your margins.</p>
          </div>

          <!-- Pillar 5: Global Sync -->
          <div class="bento-card stagger-5" appScrollReveal>
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" stroke-width="2"/>
              </svg>
            </div>
            <h3>Global Sync Engine</h3>
            <p>Every price update and inventory shift reflects across your stores in milliseconds.</p>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-us-section {
      padding: 10rem 0;
      /* Restored white background for separation */
      background: rgba(255, 255, 255, 0.9);
      position: relative;
    }

    .section-header {
      max-width: 720px;
      margin-bottom: 5rem; /* Reduced from 6rem */
    }

    .section-label {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--primary-color);
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

    .headline {
      font-size: 3.5rem;
      font-weight: 950;
      color: #0f172a;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -0.04em;
    }

    .subtext {
      font-size: 1.25rem;
      color: #475569;
      line-height: 1.6;
      font-weight: 500;
      max-width: 600px;
    }

    /* Asymmetric Bento Grid */
    .bento-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr; /* Asymmetric balance */
      grid-template-rows: auto auto;
      gap: 2rem;
    }

    /* Featured Card - Spans 2 columns */
    .featured-card {
      grid-column: span 1;
      grid-row: span 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .bento-card {
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 24px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
    }

    .bento-card:hover {
      transform: translateY(-8px);
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 30px 60px -10px rgba(15, 23, 42, 0.1);
      border-color: var(--primary-color);
    }

    /* Featured Card Styling */
    .featured-card .card-content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .featured-card h3 { font-size: 2rem; margin-bottom: 1rem; }
    .featured-card p { font-size: 1.15rem; max-width: 400px; }

    /* Standard Card Styling */
    .bento-card h3 {
      font-size: 1.25rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .bento-card p {
      font-size: 1rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
      font-weight: 500;
    }

    .icon-box {
      width: 48px;
      height: 48px;
      background: rgba(99, 102, 241, 0.08);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
      transition: all 0.3s ease;
    }

    .featured-icon {
      width: 64px; height: 64px;
      background: rgba(99, 102, 241, 0.1);
    }

    .icon-box svg { width: 24px; height: 24px; }
    .featured-icon svg { width: 32px; height: 32px; }

    .bento-card:hover .icon-box {
      background: var(--primary-color);
      color: white;
      transform: scale(1.1);
    }

    @media (max-width: 1024px) {
      .why-us-section { padding: 6rem 0; }
      .bento-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto; 
        gap: 1.5rem;
      }
      .featured-card { grid-column: span 2; grid-row: span 1; flex-direction: row; align-items: center; gap: 2rem; }
      .featured-card .card-content { display: block; }
      .headline { font-size: 3rem; }
    }

    @media (max-width: 768px) {
      .bento-grid { grid-template-columns: 1fr; }
      .featured-card { grid-column: span 1; flex-direction: column; align-items: flex-start; gap: 1.25rem; }
      .headline { font-size: 2.25rem; }
      .section-header { margin-bottom: 3rem; }
      .subtext { font-size: 1.1rem; }
      .bento-card { padding: 2rem; }
      .featured-card h3 { font-size: 1.75rem; }
    }
  `]
})
export class WhyChooseUsComponent { }
