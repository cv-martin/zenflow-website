import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AccountingChartComponent } from './accounting-chart.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface HubTab {
  id: string;
  title: string;
  benefit: string;
  headline: string;
  subtext: string;
  features: { title: string; desc: string }[];
  visualType: 'pos' | 'inventory' | 'accounting' | 'omnichannel';
}

@Component({
  selector: 'app-solution-hub',
  standalone: true,
  imports: [CommonModule, AccountingChartComponent, RouterLink, ScrollRevealDirective],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="solution-hub">
      <div class="container relative">
        <!-- Tab Grid (Zenflow Hybrid Style) -->
        <div class="tab-grid">
          <div 
            *ngFor="let tab of tabs; let i = index" 
            class="tab-card glass-tab" 
            [class.active]="activeTab.id === tab.id"
            appScrollReveal
            (click)="onTabClick(tab, i)"
          >
            <div class="tab-info">
              <div class="tab-title">{{ tab.title }}</div>
              <div class="tab-benefit">{{ tab.benefit }}</div>
            </div>
            <!-- Stable Indicator -->
            <div class="tab-indicator" [class.active]="activeTab.id === tab.id"></div>
          </div>
        </div>

        <!-- Integrated Feature Viewport -->
        <div class="hub-viewport glass-card-main" appScrollReveal>
          <!-- Moving Gradient Background Element for Hub -->
          <div class="hub-visual-glow"></div>
          
          <!-- All 4 panels are always mounted. Only the active one is visible. -->
          <div class="hub-panels-wrapper">
            <div *ngFor="let tab of tabs" class="hub-panel" [class.active]="activeTab.id === tab.id">
              <div class="hub-content">
                <!-- Left Side: Strategic Narratives -->
                <div class="text-side">
                  <h2 class="text-gradient-premium" [innerHTML]="tab.headline"></h2>
                  <p class="hub-subheading">{{ tab.subtext }}</p>
                  
                  <ul class="sophisticated-list">
                    <li *ngFor="let feat of tab.features">
                      <div>
                        <strong>{{ feat.title }}:</strong>
                        <span> {{ feat.desc }}</span>
                      </div>
                    </li>
                  </ul>
                  
                  <a [routerLink]="['/' + tab.id]" class="btn btn-primary glass-btn">
                    <ng-container *ngIf="tab.id === 'accounting'; else defaultBtn">Discover Financial Insights &rarr;</ng-container>
                    <ng-template #defaultBtn>Learn about {{ tab.title }} &rarr;</ng-template>
                  </a>
                </div>

                <div class="visual-side">
                  <div class="visual-container glass-surface" [class.no-padding]="tab.visualType === 'inventory'">
                    <div class="hud-corner top-left"></div>
                    <div class="hud-corner bottom-right"></div>
                    
                    <!-- POS Visual -->
                    <div class="pos-terminal" *ngIf="tab.visualType === 'pos'">
                      <div class="pos-header">
                        <span>TERMINAL: GEN-01</span>
                        <span>LIVE</span>
                      </div>
                      <div class="pos-item"><span>Elite SKU-44</span><span>₹ 12,500</span></div>
                      <div class="pos-item"><span>GST (18%)</span><span>₹ 2,250</span></div>
                      <div class="pos-total"><span>TOTAL</span><span>₹ 14,750</span></div>
                      <div class="success-badge">PAYMENT RECONCILED</div>
                    </div>

                    <!-- Inventory Visual -->
                    <div class="inventory-control-pane" *ngIf="tab.visualType === 'inventory'">
                      <div class="network-canvas">
                        <div class="canvas-header">
                           <span class="engine-label">REAL TIME SYNC</span>
                        </div>
                        <div class="orchestration-map">
                          <div class="core-hub">
                            <div class="hub-rings">
                              <div class="ring-pulse"></div>
                              <div class="ring-pulse r2"></div>
                            </div>
                            <div class="hub-inner">
                              <span class="hub-brand">Zenflow</span>
                              <span class="hub-label">CORE AI</span>
                            </div>
                          </div>
                          <div class="node-pro shop s1">🏬 <span class="n-l">Store 01</span></div>
                          <div class="node-pro shop s2">🏬 <span class="n-l">Store 02</span></div>
                          <div class="node-pro wh w1">🏭 <span class="n-l">WH 01</span></div>
                          <div class="node-pro wh w2">🏭 <span class="n-l">WH 02</span></div>
                          <svg class="flow-canvas-pro" viewBox="0 0 280 220" preserveAspectRatio="none">
                            <path d="M50,40 Q140,40 140,110" fill="none" class="f-p" />
                            <path d="M50,180 Q140,180 140,110" fill="none" class="f-p" />
                            <path d="M230,40 Q140,40 140,110" fill="none" class="f-p" />
                            <path d="M230,180 Q140,180 140,110" fill="none" class="f-p" />
                            <circle r="2.5" fill="#6366f1" class="p-d"><animateMotion dur="2.2s" repeatCount="indefinite" path="M50,40 Q140,40 140,110" /></circle>
                            <circle r="2.5" fill="#6366f1" class="p-d"><animateMotion dur="2.8s" repeatCount="indefinite" path="M50,180 Q140,180 140,110" /></circle>
                            <circle r="2.5" fill="#10b981" class="p-d"><animateMotion dur="3s" repeatCount="indefinite" path="M230,40 Q140,40 140,110" /></circle>
                            <circle r="2.5" fill="#10b981" class="p-d"><animateMotion dur="2.5s" repeatCount="indefinite" path="M230,180 Q140,180 140,110" /></circle>
                          </svg>
                        </div>
                      </div>
                      <div class="executive-sidebar">
                        <div class="sidebar-header">
                          <span class="pulse-dot"></span>
                          LIVE SYNC
                        </div>
                        <div class="sidebar-metrics">
                          <div class="metric-item">
                            <span class="m-label">SYNC STATUS</span>
                            <span class="m-value green">ACTIVE</span>
                            <div class="m-bar"><div class="m-fill"></div></div>
                          </div>
                          <div class="metric-item">
                            <span class="m-label">ACTIVE NODES</span>
                            <span class="m-value">14 / 14</span>
                            <div class="status-grid">
                               <div class="dot active"></div><div class="dot active"></div><div class="dot active"></div><div class="dot active"></div>
                               <div class="dot active"></div><div class="dot active"></div><div class="dot"></div><div class="dot"></div>
                            </div>
                          </div>
                        </div>
                        <div class="sidebar-footer">
                          SYSTEM HEALTH: 99.8%
                        </div>
                      </div>
                    </div>

                    <!-- Accounting Visual -->
                    <div class="mockup-accounting" *ngIf="tab.visualType === 'accounting'">
                      <div class="acc-header">
                        <span>GST COMPLIANCE</span>
                        <div class="gst-marker">✓ GST FILED</div>
                      </div>
                      <app-accounting-chart></app-accounting-chart>
                    </div>

                    <!-- Omnichannel Visual -->
                    <div class="omni-hub-v3" *ngIf="tab.visualType === 'omnichannel'">
                      <div class="omni-status-bar">
                        <div class="omni-live-dot"></div>
                        <span class="status-main">ALL CHANNELS ACTIVE</span>
                        <span class="omni-order-count">1,284 orders today</span>
                      </div>
                      <div class="omni-sources top-row">
                        <div class="omni-source shopify">
                          <div class="omni-source-icon">
                            <svg viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.825-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.952 70.654-14.558 4.511-24.906 7.718-26.209 8.133-8.13 2.549-8.387 2.805-9.457 10.418C21.186 95.806.001 260.235.001 260.235l165.024 31.043 89.481-19.27S223.974 58.8 223.774 57.34zM174.098 42.87l-11.718 3.625c0-2.498-.253-6.104-.728-10.346 7.225 1.39 12.051 5.225 12.446 6.721zm-20.718-7.184c.832 5.622 1.37 13.627.587 21.93l-30.328 9.392c5.871-22.553 16.871-33.473 29.74-31.322zm-12.83-13.02c1.94 0 3.627.664 5.11 1.973-14.206 6.677-29.443 23.564-35.87 57.263l-23.983 7.427C92.936 66.665 107.89 22.664 140.55 22.666z" fill="#95BF47"/>
                              <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.949-2.394-1.069l-12.527 255.164 89.481-19.27S223.974 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357z" fill="#5E8E3E"/>
                              <path d="M135.553 104.585l-11.054 32.926s-9.715-5.183-21.588-5.183c-17.434 0-18.304 10.933-18.304 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.613 4.345 22.613 4.345z" fill="white"/>
                            </svg>
                          </div>
                          <span class="s-label">Shopify</span>
                        </div>
                        <div class="omni-source amazon">
                          <div class="omni-source-icon">
                            <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
                              <rect width="300" height="180" rx="24" fill="#232F3E"/>
                              <g transform="translate(40, 35) scale(0.72)">
                                <path d="M176.7 138.1c-13.7 10.1-33.5 15.5-50.6 15.5-23.9 0-45.5-8.9-61.8-23.7-1.3-1.2-.1-2.8 1.4-1.9 17.6 10.2 39.4 16.4 61.8 16.4 15.2 0 31.8-3.1 47.1-9.6 2.3-1 4.2 1.5 2.1 3.3z" fill="#FF9900"/>
                                <path d="M182.7 131.2c-1.7-2.2-11.4-1-15.8-.5-1.3.2-1.5-1-0.3-1.8 7.7-5.4 20.3-3.9 21.8-2.1 1.5 1.9-.4 14.9-7.6 21.1-1.1 1-2.2.5-1.7-.8 1.6-4.1 5.3-13.6 3.6-15.9z" fill="#FF9900"/>
                                <path d="M167.5 44.5v-7.2c0-1.1.8-1.8 1.8-1.8h31.8c1 0 1.8.7 1.8 1.8v6.1c0 1-.9 2.4-2.5 4.6l-16.5 23.5c6.1-.2 12.6.8 18.2 3.9 1.3.7 1.6 1.7 1.7 2.7v7.7c0 1-1.1 2.2-2.3 1.6-9.5-5-22.2-5.5-32.7.1-1.1.6-2.2-.6-2.2-1.6v-7.3c0-1.1 0-3 1.1-4.7L186 47.9h-16.7c-1 0-1.8-.7-1.8-1.8v-1.6zM72.8 85h-9.7c-.9-.1-1.6-.8-1.7-1.6V37.3c0-1 .8-1.8 1.8-1.8h9c.9.1 1.6.8 1.7 1.7v6h.2c2.3-5.9 6.6-8.7 12.4-8.7 5.9 0 9.6 2.8 12.2 8.7 2.3-5.9 7.5-8.7 13-8.7 4 0 8.3 1.6 10.9 5.3 3 4.1 2.4 10 2.4 15.2l0 28.8c0 1-.8 1.8-1.8 1.8h-9.7c-.9-.1-1.7-.8-1.7-1.8V57.3c0-2 .2-7.1-.3-9-.7-3.2-2.8-4.1-5.6-4.1-2.3 0-4.7 1.5-5.7 4-.9 2.5-.8 6.6-.8 9.1v26.4c0 1-.8 1.8-1.8 1.8h-9.7c-.9-.1-1.7-.8-1.7-1.8l0-26.5c0-5.4.9-13.2-5.9-13.2-6.9 0-6.6 7.7-6.6 13.2l0 26.4c-.1.9-.9 1.7-1.9 1.7zM228.3 34.5c14.4 0 22.2 12.4 22.2 28.1 0 15.2-8.6 27.3-22.2 27.3-14.1 0-21.8-12.4-21.8-27.8 0-15.5 7.8-27.6 21.8-27.6zm.1 10.2c-7.1 0-7.6 9.7-7.6 15.8 0 6.1-.1 19.1 7.5 19.1 7.5 0 7.9-10.5 7.9-16.9 0-4.2-.2-9.2-1.5-13.2-1.1-3.4-3.4-4.8-6.3-4.8zM264.2 85h-9.6c-.9-.1-1.7-.8-1.7-1.8l0-46c.1-.9.9-1.7 1.8-1.7h9c.8.1 1.5.7 1.7 1.5v7h.2c2.6-6.4 6.3-9.5 12.8-9.5 4.3 0 8.4 1.5 11.1 5.8 2.5 4 2.5 10.7 2.5 15.5v28.5c-.1.9-.9 1.6-1.8 1.6h-9.7c-.9-.1-1.6-.7-1.7-1.6V56.9c0-5.3.6-13-6-13-2.3 0-4.5 1.6-5.5 4-1.3 3-.5 8.2-1.5 11.9v23.4c0 1-.9 1.8-1.8 1.8h.2zM149.4 63.2c0 3.7.1 6.8-1.8 10.1-1.5 2.7-3.9 4.3-6.5 4.3-3.6 0-5.7-2.8-5.7-6.8 0-8 7.2-9.5 14-9.5v1.9zm9.5 23c-.6.6-1.6.6-2.3.2-3.3-2.7-3.8-4-5.6-6.6-5.4 5.5-9.2 7.1-16.1 7.1-8.2 0-14.6-5.1-14.6-15.2 0-7.9 4.3-13.3 10.4-15.9 5.3-2.3 12.7-2.7 18.3-3.4v-1.3c0-2.3.2-5-1.2-7-1.2-1.8-3.5-2.5-5.5-2.5-3.7 0-7 1.9-7.8 5.9-.2.9-.8 1.7-1.6 1.7l-9.4-1c-.7-.2-1.6-.8-1.4-2 2.2-11.6 12.7-15 22.1-15 4.8 0 11.1 1.3 14.9 5 4.8 4.5 4.3 10.4 4.3 16.9v15.3c0 4.6 1.9 6.6 3.7 9.1.6.9.8 1.9-.1 2.5-2.1 1.8-5.9 5.1-8.1 7l.4-.1zM44 63.2c0 3.7.1 6.8-1.8 10.1-1.5 2.7-3.8 4.3-6.5 4.3-3.6 0-5.7-2.8-5.7-6.8 0-8 7.2-9.5 14-9.5v1.9zm9.5 23c-.6.6-1.6.6-2.3.2-3.3-2.7-3.8-4-5.6-6.6-5.4 5.5-9.2 7.1-16.1 7.1-8.2 0-14.6-5.1-14.6-15.2 0-7.9 4.3-13.3 10.4-15.9 5.3-2.3 12.7-2.7 18.3-3.4v-1.3c0-2.3.2-5-1.2-7-1.2-1.8-3.5-2.5-5.5-2.5-3.7 0-7 1.9-7.8 5.9-.2.9-.8 1.7-1.6 1.7l-9.4-1c-.7-.2-1.6-.8-1.4-2C24 33.6 34.5 30 43.9 30c4.8 0 11.1 1.3 14.9 5 4.8 4.5 4.3 10.4 4.3 16.9v15.3c0 4.6 1.9 6.6 3.7 9.1.6.9.8 1.9-.1 2.5-2.1 1.8-5.9 5.1-8.1 7l-.1-.6z" fill="white"/>
                              </g>
                            </svg>
                          </div>
                          <span class="s-label">Amazon</span>
                        </div>
                        <div class="omni-source flipkart">
                          <div class="omni-source-icon">
                            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                              <rect width="256" height="256" rx="32" fill="#2874F0"/>
                              <path d="M88 56h80v24H112v32h48v24h-48v56H88V56z" fill="#FFFFFF"/>
                              <path d="M194 56l-16 24h22l16-24h-22z" fill="#FFE500"/>
                            </svg>
                          </div>
                          <span class="s-label">Flipkart</span>
                        </div>
                      </div>
                      <svg class="omni-flow-svg" viewBox="0 0 320 60" preserveAspectRatio="none">
                        <line x1="53" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line"/>
                        <line x1="160" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.3s"/>
                        <line x1="267" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.6s"/>
                      </svg>
                      <div class="omni-central-hub-pro">
                        <div class="hub-label-top">INTELLIGENCE LAYER</div>
                        <div class="omni-hub-core-pro">
                          <div class="hub-rings-pro">
                            <div class="ring-pro"></div>
                            <div class="ring-pro r2"></div>
                          </div>
                          <span class="omni-hub-brand">Zenflow</span>
                          <span class="omni-hub-sub">CONNECTORS</span>
                        </div>
                        <div class="hub-label-bottom">SMART ROUTING →</div>
                      </div>
                      <svg class="omni-flow-svg bottom" viewBox="0 0 320 60" preserveAspectRatio="none">
                        <line x1="160" y1="0" x2="80" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.2s"/>
                        <line x1="160" y1="0" x2="240" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.5s"/>
                      </svg>
                      <div class="omni-sources bottom-row">
                        <div class="omni-source instore">
                          <div class="omni-source-icon pro">
                            <svg viewBox="0 0 24 24" fill="none">
                              <rect width="24" height="24" rx="8" fill="#6366f1"/>
                              <path d="M5 10l7-6 7 6v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9z" stroke="white" stroke-width="2" fill="none"/>
                            </svg>
                            <div class="live-tag">LIVE</div>
                          </div>
                          <span class="s-label">Store POS</span>
                        </div>
                        <div class="omni-source mobile">
                          <div class="omni-source-icon pro">
                            <svg viewBox="0 0 24 24" fill="none">
                              <rect width="24" height="24" rx="8" fill="#ec4899"/>
                              <rect x="7" y="3" width="10" height="18" rx="2" stroke="white" stroke-width="2" fill="none"/>
                              <circle cx="12" cy="18" r="1.5" fill="white"/>
                            </svg>
                            <div class="live-tag">LIVE</div>
                          </div>
                          <span class="s-label">Mobile Hub</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .solution-hub { padding: 8rem 0 10rem; position: relative; background: transparent; overflow: visible; }
    
    .dot-pattern-matrix {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(var(--text-light) 1.2px, transparent 1.2px);
      background-size: 80px 80px; opacity: 0.15; z-index: 0; pointer-events: none;
    }

    .container.relative { position: relative; z-index: 1; max-width: 1300px; margin: 0 auto; }

    .tab-grid { 
      display: flex; 
      justify-content: center; 
      gap: 0.5rem; 
      margin-bottom: 3.5rem; 
      position: relative; 
      z-index: 10;
      background: rgba(15, 23, 42, 0.03);
      padding: 0.4rem;
      border-radius: 100px; /* Segmented Control Container */
      max-width: fit-content;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .glass-tab {
      background: transparent;
      padding: 0.8rem 1.75rem; 
      border-radius: 100px;
      border: none;
      display: flex; 
      flex-direction: column; 
      align-items: center;
      cursor: pointer; 
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none; 
      position: relative;
      gap: 0;
    }

    .glass-tab.active { 
      background: #ffffff; 
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transform: scale(1.02);
    }

    .tab-title { 
      font-weight: 800; 
      font-size: 0.9rem; 
      color: #64748b; 
      transition: color 0.3s ease; 
    }
    .tab-benefit { 
      font-size: 0.7rem; 
      color: #94a3b8; 
      font-weight: 800; 
      text-transform: uppercase; 
      letter-spacing: 0.05em; 
      opacity: 0.8;
      display: block;
    }
    .glass-tab.active .tab-title { color: var(--primary-color); }

    .glass-card-main { 
      min-height: 580px; padding: 4rem; position: relative;
      background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 28px; border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.08);
      z-index: 1; overflow: hidden;
      will-change: backdrop-filter;
    }

    /* Moving Gradient Border Signature */
    .glass-card-main::after {
      content: ''; position: absolute; inset: -2px;
      background: linear-gradient(135deg, var(--primary-color), #a855f7, var(--primary-color));
      background-size: 400% 400%; z-index: -1; opacity: 0.25;
      border-radius: 30px; animation: movingGradient 6s ease infinite;
    }

    @keyframes movingGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

    .hub-visual-glow {
      position: absolute; top: -20%; right: -20%; width: 50%; height: 50%;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
      filter: blur(50px); pointer-events: none; z-index: 0;
    }

    /* Panel stacking system: all panels mounted, only active visible */
    .hub-panels-wrapper {
      position: relative;
      z-index: 1;
      height: 100%;
    }

    .hub-panel {
      position: absolute;
      inset: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(8px);
      transition: opacity 0.28s ease-out, transform 0.28s ease-out;
      height: 100%;
    }

    .hub-panel.active {
      position: relative;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      height: 100%;
    }

    .hub-content { 
      display: grid; 
      grid-template-columns: 1fr 1.15fr; 
      gap: 3rem; 
      align-items: center; 
      position: relative; 
      z-index: 1;
      width: 100%;
      min-width: 0;
    }
 
    .text-side h2 { font-size: 2.6rem; font-weight: 900; margin-bottom: 1.25rem; letter-spacing: -0.03em; line-height: 1.1; color: #1e293b; }
    .text-side { 
      display: flex; 
      flex-direction: column;
      justify-content: center;
      padding-right: 1.5rem;
    }

    /* Premium Custom Scrollbar removed since it's hidden */
    .text-gradient-premium { color: #1e293b; }
    .text-gradient { 
      background: linear-gradient(135deg, #7C3AED 0%, #DB2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
 
    .hub-subheading { 
      font-size: 1.15rem; color: #475569; line-height: 1.6; margin-bottom: 1.5rem; font-weight: 500; max-width: 90%;
      display: -webkit-box; -webkit-line-clamp: unset; -webkit-box-orient: vertical; overflow: visible;
    }
    
    .sophisticated-list { list-style: none; padding: 0; margin-bottom: 1.75rem; }
    .sophisticated-list li { 
      margin-bottom: 0.75rem; 
      display: flex; 
      align-items: baseline; 
      gap: 0.85rem; 
      font-size: 1rem;
      position: relative;
    }
    .sophisticated-list li div {
      display: -webkit-box; -webkit-line-clamp: unset; -webkit-box-orient: vertical; overflow: visible;
      line-height: 1.5;
    }
    .sophisticated-list li::before {
      content: '';
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 2px;
      background: linear-gradient(135deg, var(--primary-color), #a855f7);
      flex-shrink: 0;
      margin-top: 0.45em; /* aligns to first line of text */
      transform: rotate(45deg);
    }

    /* Pro Inventory Engine Visuals - Restored to Light Theme Hub Context */
    .inventory-network-pro { width: 100%; height: 320px; position: relative; display: flex; flex-direction: column; overflow: visible; }
    .network-header-pro { 
      display: flex; justify-content: space-between; align-items: center; 
      padding-bottom: 1.25rem; border-bottom: 1px solid rgba(0,0,0,0.06); margin-bottom: 1.5rem;
    }
    .engine-label { font-size: 0.75rem; font-weight: 950; color: #6366f1; letter-spacing: 0.15em; }
    .sync-tag-pro { font-size: 0.65rem; font-weight: 900; color: #10b981; display: flex; align-items: center; gap: 6px; }
    .pulse-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block; animation: dotPulse 2s infinite; }
    @keyframes dotPulse { 0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); } 70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); } 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); } }

    .orchestration-map { position: relative; flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; }
    .core-hub { position: relative; z-index: 5; }
    .hub-inner {
      width: 76px; height: 76px; background: white; border: 2.5px solid #6366f1; border-radius: 50%;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      box-shadow: 0 10px 40px rgba(99,102,241,0.25);
    }
    .hub-brand { font-size: 0.75rem; font-weight: 950; color: #1e293b; line-height: 1; }
    .hub-label { font-size: 0.45rem; font-weight: 900; color: #6366f1; margin-top: 2px; letter-spacing: 0.12em; }
    
    .hub-rings { position: absolute; inset: 0; pointer-events: none; }
    .ring-pulse { position: absolute; inset: -18px; border: 1.5px solid rgba(99,102,241,0.2); border-radius: 50%; animation: engineRing 3s linear infinite; }
    .r2 { inset: -38px; animation-delay: 1.5s; opacity: 0.4; }
    @keyframes engineRing { 0% { transform: scale(0.95); opacity: 0; } 50% { opacity: 0.4; } 100% { transform: scale(1.05); opacity: 0; } }

    /* Executive Control-Pane Architecture Styles */
    .inventory-control-pane { 
      width: 100%; height: 360px; display: flex; overflow: hidden; border-radius: 24px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.08);
    }
    .network-canvas { flex: 0 0 71%; position: relative; padding: 1.5rem 2rem; border-right: 1px solid rgba(255,255,255,0.06); }
    .canvas-header { margin-bottom: 1.5rem; }
    .engine-label { font-size: 0.75rem; font-weight: 950; color: #6366f1; letter-spacing: 0.2em; filter: drop-shadow(0 0 8px rgba(99,102,241,0.4)); }

    .orchestration-map { position: relative; height: 180px; display: flex; align-items: center; justify-content: center; width: 100%; }
    .core-hub { position: relative; z-index: 5; }
    .hub-inner {
      width: 78px; height: 78px; background: #0f172a; border: 2.5px solid #6366f1; border-radius: 50%;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      box-shadow: 0 0 50px rgba(99,102,241,0.4);
    }
    .hub-brand { font-size: 0.75rem; font-weight: 950; color: white; line-height: 1; }
    .hub-label { font-size: 0.45rem; font-weight: 800; color: #6366f1; margin-top: 2px; letter-spacing: 0.15em; }
    
    .hub-rings { position: absolute; inset: 0; pointer-events: none; }
    .ring-pulse { position: absolute; inset: -20px; border: 1.5px solid rgba(99,102,241,0.15); border-radius: 50%; animation: engineRing 3s linear infinite; }
    .r2 { inset: -45px; animation-delay: 1.5s; opacity: 0.3; }

    .node-pro { 
      position: absolute; background: rgba(30,41,59,0.9); backdrop-filter: blur(8px);
      padding: 0.6rem 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);
      font-size: 0.9rem; display: flex; align-items: center; gap: 8px; z-index: 10;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      will-change: transform;
      .n-l { font-size: 0.65rem; font-weight: 800; color: #94a3b8; }
      &:hover { border-color: #6366f1; transform: translateY(-3px); }
    }
    .s1 { top: 0%; left: 0%; }
    .s2 { bottom: 0%; left: 0%; }
    .w1 { top: 0%; right: 0%; }
    .w2 { bottom: 0%; right: 0%; }

    .flow-canvas-pro { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
    .f-p { stroke: rgba(255,255,255,0.04); stroke-width: 1.5; stroke-dasharray: 6 6; }
    .p-d { filter: drop-shadow(0 0 6px currentColor); }

    /* Right: Executive Sidebar HUD (25%) */
    .executive-sidebar { 
      flex: 1; padding: 1.5rem 1rem; display: flex; flex-direction: column; gap: 1.5rem;
      background: rgba(15,23,42,0.6); backdrop-filter: blur(10px);
    }
    .sidebar-header { font-size: 0.65rem; font-weight: 950; color: #10b981; letter-spacing: 0.15em; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 1rem; }
    .pulse-dot { width: 7px; height: 7px; background: #10b981; border-radius: 50%; animation: dotPulse 2s infinite; }
    
    .sidebar-metrics { display: flex; flex-direction: column; gap: 1.75rem; }
    .metric-item { display: flex; flex-direction: column; gap: 6px; }
    .m-label { font-size: 0.55rem; font-weight: 950; color: #64748b; letter-spacing: 0.1em; }
    .m-value { font-size: 1.15rem; font-weight: 950; color: white; &.green { color: #10b981; } }
    
    .m-bar { height: 6px; background: rgba(255,255,255,0.04); border-radius: 6px; position: relative; overflow: hidden; }
    .m-fill { width: 100%; height: 100%; background: linear-gradient(90deg, #6366f1, #10b981); border-radius: 6px; transform: scaleX(0.84); transform-origin: left; animation: barGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; will-change: transform; }
    .m-bar::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); animation: scanLine 2s infinite; will-change: transform; }
    @keyframes scanLine { from { transform: translateX(-100%); } to { transform: translateX(100%); } }

    .status-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 4px; }
    .dot { width: 4px; height: 4px; background: rgba(255,255,255,0.06); border-radius: 50%; &.active { background: #10b981; box-shadow: 0 0 6px rgba(16,185,129,0.4); } }
    
    .sidebar-footer { margin-top: auto; font-size: 0.55rem; font-weight: 800; color: #334155; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1rem; }
    @keyframes scanMove { from { left: -30%; } to { left: 100%; } }
    @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(0.84); } }

    /* Omnichannel V3 Styles - Orchestration Polish */
    .omni-hub-v3 { 
      width: 100%; display: flex; flex-direction: column; align-items: center; gap: 0; 
      font-family: 'Inter', sans-serif;
      padding-top: 0.25rem;
    }
    
    .omni-status-bar { 
      width: 100%; display: flex; align-items: center; gap: 0.6rem; 
      font-size: 0.6rem; font-weight: 800; color: #64748b; 
      border-bottom: 1px solid rgba(0,0,0,0.06); padding: 0.3rem 0.5rem 0.4rem; margin-bottom: 0.3rem;
      letter-spacing: 0.1em;
    }
    .omni-live-dot { 
      width: 7px; height: 7px; border-radius: 50%; background: #10b981; flex-shrink: 0;
      box-shadow: 0 0 0 3px rgba(16,185,129,0.2);
    }

    /* Source nodes - Expanded Weight */
    .omni-sources { display: flex; gap: 2rem; justify-content: center; width: 100%; }
    .omni-source { 
      display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
      transition: transform 0.3s ease;
      will-change: transform;
      .s-label { font-size: 0.7rem; font-weight: 700; color: #64748b; }
      &:hover { transform: translateY(-2px); .omni-source-icon { box-shadow: 0 8px 20px rgba(0,0,0,0.12); border-color: #6366f1; } }
    }
    .omni-source-icon { 
      width: 42px; height: 42px; border-radius: 12px; position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1.5px solid transparent;
      &.pro { width: 46px; height: 46px; border-radius: 14px; }
      img, svg { width: 100%; height: 100%; display: block; object-fit: contain; }
    }

    .live-tag {
      position: absolute; bottom: 4px; right: 4px; background: #10b981; color: white;
      font-size: 0.55rem; font-weight: 950; padding: 2px 5px; border-radius: 4px;
    }

    /* SVG flow lines - Denser & Stronger */
    .omni-flow-svg { 
      width: 100%; height: 30px; display: block; overflow: visible;
      &.bottom { transform: scaleY(-1); }
    }
    .flow-line { 
      stroke-dashoffset: 0; stroke-opacity: 0.8; stroke-width: 1.5;
      animation: flowDash 1s linear infinite;
    }
    @keyframes flowDash { from { stroke-dashoffset: 12; } to { stroke-dashoffset: 0; } }

    /* The Brain - Expanded Core Architecture */
    .omni-central-hub-pro { 
      position: relative; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 4px; z-index: 10;
    }
    .hub-label-top { font-size: 0.55rem; font-weight: 950; color: #6366f1; letter-spacing: 0.15em; opacity: 0.8; }
    .hub-label-bottom { font-size: 0.5rem; font-weight: 900; color: #94a3b8; letter-spacing: 0.05em; font-style: italic; }

    .omni-hub-core-pro { 
      background: white; border: 2px solid #6366f1; 
      border-radius: 16px; padding: 0.6rem 1.6rem;
      box-shadow: 0 10px 30px rgba(99,102,241,0.2);
      display: flex; flex-direction: column; align-items: center; gap: 1px; position: relative;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
      will-change: transform;
      &:hover { transform: scale(1.05); box-shadow: 0 15px 40px rgba(99,102,241,0.3); }
    }
    .omni-hub-brand { font-size: 0.95rem; font-weight: 950; color: #1e293b; }
    .omni-hub-sub { font-size: 0.55rem; font-weight: 900; color: #6366f1; letter-spacing: 0.1em; text-transform: uppercase; }
    
    .hub-rings-pro { position: absolute; inset: 0; pointer-events: none; }
    .ring-pro { position: absolute; inset: -15px; border: 2px solid rgba(99, 102, 241, 0.15); border-radius: 24px; animation: pulseRing 3s ease-out infinite; }
    .r2 { inset: -35px; animation-delay: 1.5s; opacity: 0.5; }
    @keyframes pulseRing { 0% { transform: scale(0.95); opacity: 0.5; } 100% { transform: scale(1.1); opacity: 0; } }

    .glass-btn { 
      padding: 1rem 2.2rem; font-size: 1rem; border-radius: 12px; background: #0f172a;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
    }

    /* Visualization Side Refinements */
    .visual-side {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .glass-surface {
      background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 24px;
      padding: 1.25rem; height: 360px; min-height: auto; position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: center;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
    
    .glass-surface.no-padding {
      padding: 0 !important;
      background: transparent !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }

    .hud-corner {
      position: absolute; width: 18px; height: 18px; border: 2px solid var(--primary-color);
      opacity: 0.4; pointer-events: none;
    }
    .top-left { top: 18px; left: 18px; border-right: 0; border-bottom: 0; }
    .bottom-right { bottom: 18px; right: 18px; border-left: 0; border-top: 0; }

    /* Standardized Visualization Headers */
    .pos-header, .canvas-header, .acc-header, .omni-status-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      width: 100%;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 850;
      letter-spacing: 0.15em;
      color: #64748b;
      text-transform: uppercase;
    }

    /* POS Terminal Visuals */
    .pos-terminal { width: 100%; font-family: 'Inter', sans-serif; }
    .pos-item { display: flex; justify-content: space-between; margin-bottom: 0.85rem; font-size: 1rem; font-weight: 600; color: #1e293b; }
    .pos-total { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 2px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; font-size: 1.4rem; font-weight: 800; color: var(--primary-color); }
    .success-badge { margin-top: 2rem; background: #10b981; color: white; padding: 0.6rem 1.2rem; border-radius: 12px; text-align: center; font-weight: 800; font-size: 0.85rem; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); }

    /* Inventory Visuals */
    .inventory-tracker { width: 100%; }
    .inventory-header { display: flex; justify-content: space-between; margin-bottom: 2.5rem; color: #64748b; font-size: 0.8rem; font-weight: 800; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .stock-item { margin-bottom: 2rem; }
    .stock-info { display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-weight: 700; color: #1e293b; }
    .stock-bar { height: 10px; background: rgba(0,0,0,0.05); border-radius: 99px; overflow: hidden; position: relative; }
    .stock-level { height: 100%; background: var(--primary-color); border-radius: 99px; transition: width 1s ease-out; }
    .stock-level.alert { background: #f43f5e; }
    .low-stock-alert { color: #f43f5e; font-size: 0.7rem; background: rgba(244, 63, 94, 0.1); padding: 2px 8px; border-radius: 4px; margin-left: 10px; }

    /* Accounting Visuals */
    .mockup-accounting { width: 100%; }
    .gst-marker { background: #f0fdf4; color: #16a34a; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; border: 1px solid #22c55e20; }

    /* Omnichannel Pulse */
    .omni-hub { height: 320px; display: flex; align-items: center; justify-content: center; position: relative; }
    .omni-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; justify-content: space-between; color: #64748b; font-size: 0.8rem; font-weight: 800; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .pulse-center { width: 60px; height: 60px; background: var(--primary-color); border-radius: 50%; box-shadow: 0 0 30px var(--primary-color); position: relative; z-index: 2; }
    .pulse-center::after { content: ''; position: absolute; inset: -40px; border: 2px solid var(--primary-color); border-radius: 50%; opacity: 0.2; animation: pulseRing 2s infinite; }
    @keyframes pulseRing { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
    .channel-dot { position: absolute; padding: 0.8rem 1.4rem; background: white; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); font-weight: 800; font-size: 0.85rem; z-index: 3; border: 1px solid #f1f5f9; }
    @media (max-width: 1300px) {
      .glass-card-main { padding: 3rem; }
      .hub-content { gap: 3rem; }
    }

    @media (max-width: 1024px) {
      .solution-hub { padding: 6rem 0; }
      
      .tab-grid {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 1rem;
        margin-right: -1.5rem;
        margin-left: -1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
      }

      .inventory-control-pane {
        flex-direction: column;
        height: auto;
      }
      .network-canvas {
        flex: 1 1 auto;
        padding: 1.5rem;
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .executive-sidebar {
        flex: 1 1 auto;
        padding: 1.5rem;
      }
      .orchestration-map {
        height: 180px;
      }
      .node-pro {
        padding: 0.4rem 0.6rem;
        font-size: 0.75rem;
      }

      .tab-grid {
        justify-content: center;
        width: 100%;
        gap: 0.6rem;
        padding: 0 1rem;
        margin-bottom: 2.5rem;
      }
      .glass-tab {
        flex: 1; /* Allow them to grow and share space */
        min-width: 0;
        padding: 0.75rem 0.5rem;
        border-radius: 12px;
        .tab-title { font-size: 0.8rem; letter-spacing: -0.01em; }
        .tab-benefit { font-size: 0.55rem; letter-spacing: 0.05em; }
      }
    }

    @media (max-width: 640px) {
      .solution-hub { padding: 4rem 0 6rem; }
      
      .tab-grid {
        width: 100%;
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0.5rem;
        border-radius: 20px;
        margin-bottom: 2.5rem;
        gap: 0.5rem;
        background: rgba(15, 23, 42, 0.05);
        overflow: visible;
      }

      .glass-tab {
        padding: 0.75rem 0.5rem;
        flex: none;
        width: 100%;
        border-radius: 12px;
        text-align: center;
        .tab-title { font-size: 0.85rem; font-weight: 850; }
        .tab-benefit { font-size: 0.55rem; }
        &.active { 
          background: white; 
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06); 
        }
      }

      .glass-card-main { 
        padding: 3rem 1.5rem; 
        border-radius: 32px; 
        width: 100%;
        margin: 0;
        background: rgba(255, 255, 255, 0.9);
        -webkit-backdrop-filter: blur(40px);
        backdrop-filter: blur(40px);
        border: 1.5px solid white;
        box-shadow: 0 30px 60px rgba(0,0,0,0.06);
      }

      .hub-content { 
        grid-template-columns: 1fr; 
        gap: 0;
      }

      .text-side {
        min-height: auto;
        margin-bottom: 4rem;
        text-align: center;
        align-items: center;
      }

      .text-side h2 { 
        font-size: 2.4rem; 
        font-weight: 950;
        letter-spacing: -0.05em; 
        line-height: 1.05;
        margin-bottom: 1.5rem;
      }

      .hub-subheading { 
        font-size: 1.15rem; 
        line-height: 1.6;
        color: #64748b;
        margin-bottom: 3rem; 
        max-width: 100%;
        -webkit-line-clamp: unset; 
        display: block; 
      }

      .sophisticated-list { 
        margin-bottom: 3.5rem; 
        text-align: left;
        li { font-size: 1.1rem; gap: 0.85rem; margin-bottom: 1.5rem; }
        li div { -webkit-line-clamp: unset; display: block; }
      }
      
      .btn-primary.glass-btn {
        width: 100%;
        padding: 1.25rem;
        font-size: 1.1rem;
        border-radius: 18px;
        background: #0f172a;
        font-weight: 850;
      }

      .visual-side { 
        margin-top: 2rem;
        perspective: 1500px;
      }

      .glass-surface { 
        padding: 1.5rem; 
        min-height: 380px; 
        height: auto;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.8);
      }
      
      .inventory-control-pane { 
        border-radius: 20px; 
        height: 420px; 
        flex-direction: column;
        .network-canvas { flex: 1; padding: 1.5rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .executive-sidebar { padding: 1.25rem; }
      }
      
      .orchestration-map { 
        height: 180px; 
      }
      
      .pos-terminal {
        padding: 1rem;
        .pos-item { font-size: 1rem; }
        .pos-total { font-size: 1.8rem; }
      }

      .omni-sources { gap: 0.85rem; }
      .omni-source-icon { width: 44px; height: 44px; border-radius: 12px; }
      .omni-source-icon.pro { width: 50px; height: 50px; }
      .s-label { font-size: 0.7rem; font-weight: 900; }
      .omni-hub-core-pro { padding: 0.8rem 1.4rem; border-radius: 20px; }
      .omni-hub-brand { font-size: 1.15rem; }
      .omni-status-bar { font-size: 0.75rem; padding: 0.5rem 0 1rem; }
    }

    @media (max-width: 480px) {
      .solution-hub { padding: 3rem 0 5rem; }
      
      .tab-grid { margin-bottom: 2rem; }
      .glass-tab { padding: 0.6rem 1.2rem; }
      .tab-title { font-size: 0.75rem; }
      .tab-benefit { display: none; } /* Hide benefit text to keep tab row clean */

      .glass-card-main {
        padding: 2.5rem 1.25rem;
        min-height: auto;
        height: auto;
        border-radius: 24px;
      }

      .hub-panels-wrapper { min-height: auto; }
      
      .text-side {
        height: auto;
        padding-right: 0;
        margin-bottom: 3rem;
        overflow-y: visible;
        h2 { font-size: 1.85rem; letter-spacing: -0.04em; }
      }

      .hub-subheading { font-size: 1rem; margin-bottom: 2rem; }
      .sophisticated-list { 
        margin-bottom: 2.5rem; 
        li { font-size: 0.95rem; margin-bottom: 1rem; }
      }

      .visual-side { margin-top: 1rem; perspective: none; }
      .glass-surface { padding: 1rem; min-height: 280px; border-radius: 20px; }

      .inventory-control-pane {
        height: auto;
        .network-canvas { padding: 1.25rem 1rem; }
        .executive-sidebar { padding: 1rem; }
      }
      .orchestration-map { height: 140px; }
      .node-pro { padding: 0.3rem 0.5rem; font-size: 0.65rem; }
      .hub-inner { width: 60px; height: 60px; }
      .hub-brand { font-size: 0.65rem; }
      
      .omni-source-icon { width: 36px; height: 36px; }
      .omni-source-icon.pro { width: 40px; height: 40px; }
      .omni-hub-core-pro { padding: 0.5rem 1rem; border-radius: 14px; }
      .omni-hub-brand { font-size: 0.9rem; }
      .omni-status-bar { font-size: 0.65rem; }
    }
  `]
})
export class SolutionHubComponent implements OnInit, OnDestroy {
  tabs: HubTab[] = [
    {
      id: 'billing',
      title: 'Billing',
      benefit: 'Lightning Fast POS',
      headline: 'Lightning Fast <span class="text-highlight-pink">Billing</span>',
      subtext: 'The core of your retail operations, optimized for speed and accuracy. Handle peaks with ease and never keep a customer waiting.',
      features: [
        { title: 'Scan & Go', desc: 'Process items instantly with barcode integration.' },
        { title: 'Online orders', desc: 'Receive online orders directly into the checkout workflow.' },
        { title: 'Customize offers and discounts', desc: 'Choose from 10+ templates, personalize with loyalty rewards.' }
      ],
      visualType: 'pos'
    },
    {
      id: 'inventory',
      title: 'Inventory',
      benefit: 'Multi Locations',
      headline: 'Real Time <span class="text-highlight-pink">Stock</span> Visibility',
      subtext: 'Track store, warehouse, and online marketplace inventory in a single real-time dashboard.',
      features: [
        { title: 'Multi-location Sync', desc: 'Unified visibility across stores and marketplaces.' },
        { title: 'Hyper-local Fulfillment', desc: 'Route orders to nearest stock for faster delivery.' },
        { title: 'Batch & Expiry', desc: 'FIFO/FEFO rotation to minimize waste and risk.' },
        { title: 'Inbound/Outbound', desc: 'Smooth warehouse workflows and automated printing.' },
        { title: 'Smart Audits', desc: 'Cycle counts with 100% visibility onto variances.' }
      ],
      visualType: 'inventory'
    },
    {
      id: 'accounting',
      title: 'Accounting',
      benefit: 'Real-time insights',
      headline: 'Real Time <span class="text-highlight-pink">Insights</span>',
      subtext: 'Instant, Accurate & integrated - Accounting & reconciliation with AI powered workflows. Get accurate insights to make better decisions. Always audit ready with 1 click share/export to CA.',
      features: [
        { title: 'Auto-Reconciliation', desc: 'Match bank statements with sales automatically.' },
        { title: 'One Click Financial Statements', desc: 'Balance Sheet, P&L, Cashflow & GST/TDS reports with 20+ financial metrics available in real time dashboard.' },
        { title: 'Audit-Ready', desc: 'Maintain detailed, transparent ledgers that stay compliant. Instantly share with CA.' },
        { title: 'Pro-active Alerts', desc: 'Get notified instantly of unusual cashflow patterns.' }
      ],
      visualType: 'accounting'
    },
    {
      id: 'omnichannel',
      title: 'Omnichannel',
      benefit: 'UNIFIED SYNC',
      headline: 'Unified <span class="text-highlight-pink">Omnichannel</span> Ecosystem',
      subtext: 'Sell everywhere. Synchronize Shopify, mobile apps, and marketplaces like Amazon and Flipkart into a single command center.',
      features: [
        { title: 'Unified Order Stream', desc: 'Shopify, Mobile App, and Marketplaces consolidated into one queue.' },
        { title: 'Global Synergy', desc: 'Real-time stock parity across all digital and physical endpoints.' },
        { title: 'Marketplace Sync', desc: 'Automated bi-directional syncing for pricing and availability.' },
        { title: 'Smart Auto-Routing', desc: 'Route online orders to the nearest store for faster fulfillment.' }
      ],
      visualType: 'omnichannel'
    }
  ];

  activeTab: HubTab = this.tabs[0];
  progress = 0;
  private autoCycleInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Disabled Auto-Cycle bug: User now has full control over tab selection
  }

  ngOnDestroy() {
    this.stopAutoCycle();
  }

  private startAutoCycle() {
    this.stopAutoCycle();
    this.autoCycleInterval = setInterval(() => {
      this.progress += 3.33; // ~3 seconds per tab (deliberate feel)
      if (this.progress >= 100) {
        this.nextTab();
      }
    }, 100);
  }

  private stopAutoCycle() {
    if (this.autoCycleInterval) clearInterval(this.autoCycleInterval);
  }

  private nextTab() {
    const currentIndex = this.tabs.findIndex(t => t.id === this.activeTab.id);
    const nextIndex = (currentIndex + 1) % this.tabs.length;
    this.setActiveTab(this.tabs[nextIndex]);
  }

  onTabClick(tab: HubTab, index: number) {
    this.setActiveTab(tab);
  }

  setActiveTab(tab: HubTab) {
    if (this.activeTab.id === tab.id) return;
    this.activeTab = tab;
    this.progress = 0;
    this.cdr.markForCheck();
  }
}
