import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-social-stats',
  standalone: true,
  imports: [CommonModule, CounterComponent, ScrollRevealDirective],
  template: `
    <div class="stats-container reveal-bottom" appScrollReveal>
      <div class="stats-row">
        <div class="stat-block">
          <div class="stat-value">
            <app-counter [target]="200" suffix="K"></app-counter>
          </div>
          <div class="stat-label">Monthly Bills Generated</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-block">
          <div class="stat-value">
            <app-counter [target]="30000" suffix="+"></app-counter>
          </div>
          <div class="stat-label">SKUs Tracked</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-block">
          <div class="stat-value">
            <app-counter [target]="10" prefix="₹" suffix="Cr"></app-counter>
          </div>
          <div class="stat-label">Monthly Revenue</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-container {
      padding: 10rem 0;
      display: flex;
      justify-content: center;
      position: relative;
      background: transparent;
      z-index: 5;
    }

    .stats-row {
      display: flex;
      align-items: center;
      gap: 4rem;
      padding: 3.5rem 7rem; /* Increased breathing room */
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 100px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 
        0 40px 100px -20px rgba(0, 0, 0, 0.06),
        0 4px 20px rgba(0, 0, 0, 0.02);
    }

    .stat-block {
      text-align: center;
      min-width: 200px;
    }

    .stat-value {
      font-size: 4rem;
      font-weight: 950;
      color: #5b5ff7; /* High-impact blue/indigo from reference */
      line-height: 1;
      margin-bottom: 0.75rem;
      letter-spacing: -0.04em;
    }

    .stat-label {
      font-size: 0.8rem; /* Slightly larger */
      font-weight: 900;
      color: #64748b; /* Deeper slate for better contrast */
      text-transform: uppercase;
      letter-spacing: 0.18em; /* More premium tracking */
      white-space: nowrap;
      opacity: 0.9;
    }

    .stat-divider {
      width: 1px;
      height: 60px;
      background: rgba(99, 102, 241, 0.1);
    }

    @media (max-width: 1100px) {
      .stats-container { padding: 4rem 0; }
      .stats-row {
        flex-direction: column;
        gap: 2.5rem;
        padding: 3rem 2rem;
        border-radius: 40px;
        width: calc(100% - 3rem);
      }
      .stat-divider {
        width: 80px;
        height: 1px;
        opacity: 0.1;
      }
    }

    @media (max-width: 640px) {
      .stats-container { padding: 4rem 0 6rem; }
      .stats-row { 
        padding: 3rem 1.5rem; 
        gap: 2.5rem; 
        border-radius: 32px;
        width: 100%;
        max-width: 320px; /* Locked width for better stacking control */
        margin: 0 auto;
        flex-direction: column;
      }
      .stat-value { font-size: 2.8rem; letter-spacing: -0.05em; }
      .stat-block { min-width: auto; width: 100%; }
      .stat-label { 
        font-size: 0.75rem; 
        white-space: normal; 
        line-height: 1.4;
        max-width: 90%;
        margin: 0 auto;
        opacity: 0.8;
      }
      .stat-divider { width: 40px; height: 1px; opacity: 0.1; }
    }

    @media (max-width: 480px) {
      .stats-container { padding: 2.5rem 0 4rem; }
      .stats-row {
        padding: 2.5rem 1.25rem;
        border-radius: 28px;
        max-width: 300px;
      }
      .stat-value { font-size: 2.4rem; }
      .stat-label { font-size: 0.7rem; letter-spacing: 0.15em; }
      .stat-divider { width: 36px; }
    }
  `]
})
export class SocialStatsComponent { }
