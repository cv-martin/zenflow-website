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
      padding: 3rem 6rem;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 100px; /* Pill shape */
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 
        0 40px 100px -20px rgba(0, 0, 0, 0.04),
        0 4px 20px rgba(0, 0, 0, 0.01);
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
      font-size: 0.75rem;
      font-weight: 900;
      color: #94a3b8; /* Slate gray labels */
      text-transform: uppercase;
      letter-spacing: 0.15em;
      white-space: nowrap;
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
      .stats-container { padding: 4rem 0; }
      .stats-row { padding: 3rem 1.5rem; gap: 3rem; }
      .stat-value { font-size: 3rem; }
      .stat-block { min-width: auto; }
      .stat-label { font-size: 0.65rem; }
    }
  `]
})
export class SocialStatsComponent { }
