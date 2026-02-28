import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CounterComponent } from '../shared/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CounterComponent, CommonModule],
  template: `
    <section class="hero">
      <div class="hero-container">

        <!-- LEFT: Narrative -->
        <div class="hero-content">
          <div class="eyebrow">The OS for Omnichannel Growth</div>
          <h1 class="headline">
            One platform to <span class="text-gradient">Scale</span> your entire Retail ecosystem
          </h1>
          <p class="subtext">
            Eliminate compliance stress and integration gaps. Manage POS, Inventory, and Shopify in a single, 100% real-time command center.
          </p>
          <div class="cta-group">
            <a routerLink="/contact" class="btn btn-primary">Scale My Business</a>
            <a routerLink="/inventory" class="btn btn-outline">Explore the OS</a>
          </div>
        </div>

        <!-- RIGHT: All Metric Cards -->
        <div class="hero-visual">

          <!-- Row 1: Net Profit (wide) -->
          <div class="metric-card card-profit reveal-card">
            <div class="hud-corner top-left"></div>
            <div class="hud-corner bottom-right"></div>
            <span class="label">Net Profit</span>
            <div class="mini-chart line-chart complex">
              <svg viewBox="0 0 100 40" class="sparkline x-ray">
                <path d="M0 30 L 100 20" stroke="rgba(0,0,0,0.05)" stroke-dasharray="2 2" fill="none" />
                <path d="M0 35 Q 25 30, 40 10 T 80 5 T 100 15" fill="none" class="path-glow" stroke="url(#lineGradient)" stroke-width="3" />
                <line x1="25" y1="0" x2="25" y2="40" stroke="rgba(99, 102, 241, 0.1)" stroke-width="0.5" />
                <line x1="50" y1="0" x2="50" y2="40" stroke="rgba(99, 102, 241, 0.1)" stroke-width="0.5" />
                <line x1="75" y1="0" x2="75" y2="40" stroke="rgba(99, 102, 241, 0.1)" stroke-width="0.5" />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#6366f1" />
                    <stop offset="100%" style="stop-color:#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="data-point-hud" style="left: 80%; top: 5px;"></div>
            </div>
            <span class="caption">Real-time P&L</span>
          </div>

          <!-- Row 2: Sales + CAC -->
          <div class="metric-card card-sales reveal-card">
            <div class="hud-corner top-left"></div>
            <div class="hud-corner bottom-right"></div>
            <span class="label">Live Sales <span class="sys-tag">SYS: POS-OK</span></span>
            <div class="value">
              <app-counter [target]="284500" prefix="₹"></app-counter>
            </div>
          </div>

          <div class="metric-card card-cac reveal-card">
            <div class="hud-corner bottom-left"></div>
            <span class="label">CAC (Global) <span class="sys-tag">REF: ALPHA</span></span>
            <div class="value small-label">
              <span class="currency">₹</span><app-counter [target]="240"></app-counter>
              <span class="detail-tag">TARGET: ₹300</span>
            </div>
          </div>

          <!-- Row 3: Inventory (wide) -->
          <div class="metric-card card-inventory reveal-card">
            <div class="hud-corner top-right"></div>
            <span class="label">Live Inventory <span class="sys-tag">Warehouse 1</span></span>
            <div class="mini-chart bar-chart complex">
              <div class="scan-line"></div>
              <div class="bar-group">
                <div class="bar-segment" style="height: 60%"></div>
                <div class="bar-segment" style="height: 85%"></div>
                <div class="bar-segment" style="height: 45%"></div>
                <div class="bar-segment" style="height: 70%"></div>
              </div>
              <div class="chart-markers">
                <span>100%</span>
                <span>50%</span>
              </div>
            </div>
            <span class="caption">Just-in-Time Inventory Planning</span>
          </div>

          <!-- Row 4: AOV + ROAS -->
          <div class="metric-card card-aov reveal-card">
            <div class="metric-horizontal">
              <span class="label">Avg Order Value</span>
              <div class="value small">
                <app-counter [target]="2450" prefix="₹"></app-counter>
              </div>
            </div>
          </div>

          <div class="metric-card card-roas reveal-card technical-radar">
            <div class="metric-horizontal">
              <span class="label">Return on Ad Spend</span>
              <div class="roas-indicator-complex">
                <div class="radar-rings">
                  <div class="ring"></div>
                  <div class="ring"></div>
                  <div class="ring"></div>
                </div>
                <div class="radar-scanner"></div>
                <div class="target-center"></div>
                <span class="radar-value">4.2x</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent { }
