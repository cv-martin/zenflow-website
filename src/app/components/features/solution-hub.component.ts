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
          
          <div class="hub-content" [class.content-fade-in]="isAnimating">
            <!-- Left Side: Strategic Narratives -->
            <div class="text-side">
              <h2 class="text-gradient-premium" [innerHTML]="activeTab.headline"></h2>
              <p class="hub-subheading">{{ activeTab.subtext }}</p>
              
              <ul class="sophisticated-list">
                <li *ngFor="let feat of activeTab.features">
                  <div>
                    <strong>{{ feat.title }}:</strong>
                    <span> {{ feat.desc }}</span>
                  </div>
                </li>
              </ul>
              
              <a [routerLink]="['/' + activeTab.id]" class="btn btn-primary glass-btn">
                Learn about {{ activeTab.title }} &rarr;
              </a>
            </div>

            <!-- Right Side: High-Fidelity Technical Visualization -->
            <div class="visual-side">
              <div class="visual-container glass-surface">
                <div class="hud-corner top-left"></div>
                <div class="hud-corner bottom-right"></div>
                
                <ng-container [ngSwitch]="activeTab.visualType">
                  <!-- Specialized POS Visual -->
                  <div class="pos-terminal" *ngSwitchCase="'pos'">
                    <div class="pos-header">
                      <span>TERMINAL: ZEN-01</span>
                      <span>LIVE</span>
                    </div>
                    <div class="pos-item"><span>Elite SKU-44</span><span>₹ 12,500</span></div>
                    <div class="pos-item"><span>GST (18%)</span><span>₹ 2,250</span></div>
                    <div class="pos-total"><span>TOTAL</span><span>₹ 14,750</span></div>
                    <div class="success-badge">PAYMENT RECONCILED</div>
                  </div>

                  <!-- Specialized Inventory Visual: Executive Control-Pane Architecture -->
                  <div class="inventory-control-pane" *ngSwitchCase="'inventory'">
                    
                    <!-- Left: Intelligence Canvas (75%) -->
                    <div class="network-canvas">
                      <div class="canvas-header">
                         <span class="engine-label">INFRASTRUCTURE ENGINE v4.2</span>
                      </div>

                      <div class="orchestration-map">
                        <!-- Central AI Core -->
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

                        <!-- Distributed Grid (Balanced 75% Space) -->
                        <div class="node-pro shop s1">🏬 <span class="n-l">Store 01</span></div>
                        <div class="node-pro shop s2">🏬 <span class="n-l">Store 02</span></div>
                        <div class="node-pro wh w1">🏭 <span class="n-l">WH 01</span></div>
                        <div class="node-pro wh w2">🏭 <span class="n-l">WH 02</span></div>

                        <!-- SVG Flow Topology -->
                        <svg class="flow-canvas-pro" viewBox="0 0 280 220" preserveAspectRatio="none">
                          <path d="M50,40 Q140,40 140,110" fill="none" class="f-p" /> <!-- S1 -->
                          <path d="M50,180 Q140,180 140,110" fill="none" class="f-p" /> <!-- S2 -->
                          <path d="M230,40 Q140,40 140,110" fill="none" class="f-p" /> <!-- W1 -->
                          <path d="M230,180 Q140,180 140,110" fill="none" class="f-p" /> <!-- W2 -->
                          
                          <!-- Premium Flow Particles -->
                          <circle r="2.5" fill="#6366f1" class="p-d"><animateMotion dur="2.2s" repeatCount="indefinite" path="M50,40 Q140,40 140,110" /></circle>
                          <circle r="2.5" fill="#6366f1" class="p-d"><animateMotion dur="2.8s" repeatCount="indefinite" path="M50,180 Q140,180 140,110" /></circle>
                          <circle r="2.5" fill="#10b981" class="p-d"><animateMotion dur="3s" repeatCount="indefinite" path="M230,40 Q140,40 140,110" /></circle>
                          <circle r="2.5" fill="#10b981" class="p-d"><animateMotion dur="2.5s" repeatCount="indefinite" path="M230,180 Q140,180 140,110" /></circle>
                        </svg>
                      </div>
                    </div>

                    <!-- Right: Executive Sidebar HUD (25%) -->
                    <div class="executive-sidebar">
                      <div class="sidebar-header">
                        <span class="pulse-dot"></span>
                        LIVE SYNC
                      </div>

                      <div class="sidebar-metrics">
                        <div class="metric-item">
                          <span class="m-label">NETWORK VELOCITY</span>
                          <span class="m-value green">↑ 18.2%</span>
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
                  <div class="mockup-accounting" *ngSwitchCase="'accounting'">
                    <div class="acc-header">
                      <span>GST COMPLIANCE</span>
                      <div class="gst-marker">✓ GST FILED</div>
                    </div>
                    <app-accounting-chart></app-accounting-chart>
                  </div>

                  <!-- Omnichannel Visual V3: Hub & Spoke Orchestration Engine -->
                  <div class="omni-hub-v3" *ngSwitchCase="'omnichannel'">

                    <!-- Status Bar: Integrated into the core visual frame -->
                    <div class="omni-status-bar">
                      <div class="omni-live-dot"></div>
                      <span class="status-main">ALL CHANNELS ACTIVE</span>
                      <span class="omni-order-count">1,284 orders today</span>
                    </div>

                    <!-- Intelligence Layer: Top Sources -->
                    <div class="omni-sources top-row">
                      <div class="omni-source shopify">
                        <div class="omni-source-icon">
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="6" fill="#96BF48"/>
                            <path d="M12 4.5c-.5 0-.9.2-1.2.6L6.5 10H5v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-9h-1.5l-4.3-4.9c-.3-.4-.7-.6-1.2-.6zm0 1.5c.2 0 .4.1.5.2L16.2 10H7.8l3.7-3.8c.1-.1.3-.2.5-.2z" fill="white"/>
                          </svg>
                        </div>
                        <span class="s-label">Shopify</span>
                      </div>
                      <div class="omni-source amazon">
                        <div class="omni-source-icon">
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="6" fill="#000000"/>
                            <path d="M16.5 13.5c-1.5-.5-3.5-1-5-1s-3.5.5-4.5 1c-.5.3-.8.8-.8 1.4v.1c0 .6.3 1.1.8 1.4 1 .5 3 1 4.5 1s3.5-.5 5-1c.5-.3.8-.8.8-1.4v-.1c0-.6-.3-1.1-.8-1.4z" fill="white" opacity="0.3"/>
                            <path d="M4.5 17.5c2.5 2 6 2.5 9 1.5 1.5-.5 3-1.5 4-2.5.3-.3.1-.7-.3-.6-1 .3-2 .5-3 .5-3 0-5.5-1-7.5-3-.3-.3-.7-.1-.6.3.3 1.5.7 3 1.5 3.5.5.3.8.3.9.3z" fill="#FF9900"/>
                          </svg>
                        </div>
                        <span class="s-label">Amazon</span>
                      </div>
                      <div class="omni-source flipkart">
                        <div class="omni-source-icon">
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="6" fill="#2874F0"/>
                            <path d="M15.5 4h-7c-1.1 0-2 .9-2 2v2h11V6c0-1.1-.9-2-2-2z" fill="#FFD54F" opacity="0.4"/>
                            <path d="M6 9h12v9c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V9z" fill="#FFD54F"/>
                            <path d="M12.5 14.5c.3-.3.5-.7.5-1.1v-.8c0-.6-.4-1-1-1h-2v5.5H11v-2.1h.7l1.3 2.1h1.2l-1.7-2.6zM11 12.5h1c.1 0 .2.1.2.2v.2c0 .1-.1.2-.2.2h-1v-.6z" fill="#2874F0"/>
                          </svg>
                        </div>
                        <span class="s-label">Flipkart</span>
                      </div>
                    </div>

                    <!-- High-Density Flow Lines (Top) -->
                    <svg class="omni-flow-svg" viewBox="0 0 320 60" preserveAspectRatio="none">
                      <line x1="53" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line"/>
                      <line x1="160" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.3s"/>
                      <line x1="267" y1="0" x2="160" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.6s"/>
                    </svg>

                    <!-- The Brain: Genflow Orchestration Core -->
                    <div class="omni-central-hub-pro">
                      <div class="hub-label-top">INTELLIGENCE LAYER</div>
                      <div class="omni-hub-core-pro">
                        <div class="hub-rings-pro">
                          <div class="ring-pro"></div>
                          <div class="ring-pro r2"></div>
                        </div>
                        <span class="omni-hub-brand">Zenflow</span>
                        <span class="omni-hub-sub">AUTO-ALLOCATION</span>
                      </div>
                      <div class="hub-label-bottom">SMART ROUTING →</div>
                    </div>

                    <!-- High-Density Flow Lines (Bottom) -->
                    <svg class="omni-flow-svg bottom" viewBox="0 0 320 60" preserveAspectRatio="none">
                      <line x1="160" y1="0" x2="80" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.2s"/>
                      <line x1="160" y1="0" x2="240" y2="60" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 2" class="flow-line" style="animation-delay:0.5s"/>
                    </svg>

                    <!-- Fulfillment Nodes (Balanced Weight) -->
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
                </ng-container>
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
      display: flex; justify-content: center; gap: 1.2rem; 
      margin-bottom: 3rem; position: relative; z-index: 10;
    }


    .glass-tab {
      background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      padding: 1rem 1.75rem; border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.3); display: flex; flex-direction: column; align-items: center;
      cursor: pointer; transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease; 
      user-select: none; position: relative; gap: 0.25rem;
      will-change: transform, background, border-color;
    }

    .glass-tab:hover { background: rgba(255, 255, 255, 0.6); transform: translateY(-2px); }
    
    .glass-tab.active { 
      background: #ffffff; border-color: rgba(99, 102, 241, 0.4);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    }

    .tab-indicator {
      position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) scaleX(0);
      width: 40%; height: 2.5px; background: var(--primary-color);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      border-radius: 4px 4px 0 0;
      will-change: transform;
    }
    .tab-indicator.active { transform: translateX(-50%) scaleX(1); }

    .tab-title { font-weight: 850; font-size: 1rem; color: #1e293b; transition: color 0.2s ease; }
    .tab-benefit { font-size: 0.7rem; color: #64748b; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.8; }
    .glass-tab.active .tab-title { color: var(--primary-color); }

    .glass-card-main { 
      min-height: 520px; padding: 4rem; position: relative;
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

    .hub-content { 
      display: grid; 
      grid-template-columns: 1fr 1.15fr; 
      gap: 4rem; 
      align-items: center; 
      position: relative; 
      z-index: 1;
      width: 100%;
      min-width: 0;
      will-change: transform, opacity;
    }

    /* Product-Grade Controlled Transition (Smooth 500ms) */
    .content-fade-in { 
      animation: contentEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; 
    }
    
    @keyframes contentEntrance { 
      from { 
        opacity: 0; 
        transform: translateY(15px) scale(0.995); 
      } 
      to { 
        opacity: 1; 
        transform: translateY(0) scale(1.0); 
      } 
    }
 
    .text-side h2 { font-size: 2.75rem; font-weight: 900; margin-bottom: 1.5rem; letter-spacing: -0.03em; line-height: 1.1; color: #1e293b; }
    .text-gradient-premium { color: #1e293b; }
    .text-gradient { 
      background: linear-gradient(135deg, #7C3AED 0%, #DB2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
 
    .hub-subheading { font-size: 1.15rem; color: #475569; line-height: 1.6; margin-bottom: 2.5rem; font-weight: 500; max-width: 90%; }
    
    .sophisticated-list { list-style: none; padding: 0; margin-bottom: 2.5rem; }
    .sophisticated-list li { 
      margin-bottom: 1rem; 
      display: flex; 
      align-items: baseline; 
      gap: 0.85rem; 
      font-size: 1.05rem;
      position: relative;
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
      width: 100%; height: 380px; display: flex; overflow: hidden; border-radius: 12px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
    .network-canvas { flex: 0 0 75%; position: relative; padding: 2.5rem; border-right: 1px solid rgba(255,255,255,0.06); }
    .canvas-header { margin-bottom: 1.5rem; }
    .engine-label { font-size: 0.75rem; font-weight: 950; color: #6366f1; letter-spacing: 0.2em; filter: drop-shadow(0 0 8px rgba(99,102,241,0.4)); }

    .orchestration-map { position: relative; height: 220px; display: flex; align-items: center; justify-content: center; width: 100%; }
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
      flex: 1; padding: 2.5rem 1.5rem; display: flex; flex-direction: column; gap: 2.5rem;
      background: rgba(15,23,42,0.6); backdrop-filter: blur(10px);
    }
    .sidebar-header { font-size: 0.65rem; font-weight: 950; color: #10b981; letter-spacing: 0.15em; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 1rem; }
    .pulse-dot { width: 7px; height: 7px; background: #10b981; border-radius: 50%; animation: dotPulse 2s infinite; }
    
    .sidebar-metrics { display: flex; flex-direction: column; gap: 2rem; }
    .metric-item { display: flex; flex-direction: column; gap: 8px; }
    .m-label { font-size: 0.55rem; font-weight: 950; color: #64748b; letter-spacing: 0.1em; }
    .m-value { font-size: 1.4rem; font-weight: 950; color: white; &.green { color: #10b981; } }
    
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
    }
    
    .omni-status-bar { 
      width: 100%; display: flex; align-items: center; gap: 0.6rem; 
      font-size: 0.7rem; font-weight: 850; color: #64748b; 
      border-bottom: 1px solid rgba(0,0,0,0.06); padding: 0.4rem 0.5rem 0.8rem; margin-bottom: 1rem;
      letter-spacing: 0.08em;
    }
    .omni-live-dot { 
      width: 7px; height: 7px; border-radius: 50%; background: #10b981; flex-shrink: 0;
      box-shadow: 0 0 0 3px rgba(16,185,129,0.2);
    }

    /* Source nodes - Expanded Weight */
    .omni-sources { display: flex; gap: 1.25rem; justify-content: center; width: 100%; }
    .omni-source { 
      display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
      transition: transform 0.3s ease;
      will-change: transform;
      .s-label { font-size: 0.75rem; font-weight: 800; color: #475569; }
      &:hover { transform: translateY(-3px); .omni-source-icon { box-shadow: 0 8px 20px rgba(0,0,0,0.15); border-color: #6366f1; } }
    }
    .omni-source-icon { 
      width: 52px; height: 52px; border-radius: 14px; position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1.5px solid transparent;
      overflow: hidden; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      svg { width: 100%; height: 100%; display: block; }

      &.pro { width: 56px; height: 56px; border-radius: 16px; }
    }

    .live-tag {
      position: absolute; bottom: 4px; right: 4px; background: #10b981; color: white;
      font-size: 0.5rem; font-weight: 950; padding: 1px 4px; border-radius: 3px;
    }

    /* SVG flow lines - Denser & Stronger */
    .omni-flow-svg { 
      width: 100%; height: 60px; display: block; overflow: visible;
      &.bottom { transform: scaleY(-1); }
    }
    .flow-line { 
      stroke-dashoffset: 0; stroke-opacity: 0.8;
      animation: flowDash 1s linear infinite;
    }
    @keyframes flowDash { from { stroke-dashoffset: 12; } to { stroke-dashoffset: 0; } }

    /* The Brain - Expanded Core Architecture */
    .omni-central-hub-pro { 
      position: relative; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 8px; z-index: 10;
    }
    .hub-label-top { font-size: 0.55rem; font-weight: 950; color: #6366f1; letter-spacing: 0.15em; opacity: 0.7; }
    .hub-label-bottom { font-size: 0.52rem; font-weight: 900; color: #94a3b8; letter-spacing: 0.05em; font-style: italic; }

    .omni-hub-core-pro { 
      background: white; border: 2.5px solid #6366f1; 
      border-radius: 20px; padding: 0.85rem 1.75rem;
      box-shadow: 0 15px 40px rgba(99,102,241,0.25);
      display: flex; flex-direction: column; align-items: center; gap: 2px; position: relative;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
      will-change: transform;
      &:hover { transform: scale(1.05); box-shadow: 0 20px 50px rgba(99,102,241,0.35); }
    }
    .omni-hub-brand { font-size: 1.1rem; font-weight: 950; color: #1e293b; }
    .omni-hub-sub { font-size: 0.6rem; font-weight: 900; color: #6366f1; letter-spacing: 0.08em; }
    
    .hub-rings-pro { position: absolute; inset: 0; pointer-events: none; }
    .ring-pro { position: absolute; inset: -15px; border: 2px solid rgba(99, 102, 241, 0.15); border-radius: 24px; animation: pulseRing 3s ease-out infinite; }
    .r2 { inset: -35px; animation-delay: 1.5s; opacity: 0.5; }
    @keyframes pulseRing { 0% { transform: scale(0.95); opacity: 0.5; } 100% { transform: scale(1.1); opacity: 0; } }

    .glass-btn { 
      padding: 1rem 2.2rem; font-size: 1rem; border-radius: 12px; background: #0f172a;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
    }

    /* Visualization Side Refinements */
    .glass-surface {
      background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 24px;
      padding: 1.5rem; min-height: 480px; position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: center;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    .hud-corner {
      position: absolute; width: 18px; height: 18px; border: 2px solid var(--primary-color);
      opacity: 0.4; pointer-events: none;
    }
    .top-left { top: 18px; left: 18px; border-right: 0; border-bottom: 0; }
    .bottom-right { bottom: 18px; right: 18px; border-left: 0; border-top: 0; }

    /* POS Terminal Visuals */
    .pos-terminal { font-family: 'Inter', sans-serif; }
    .pos-header { display: flex; justify-content: space-between; margin-bottom: 2rem; color: #64748b; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .pos-item { display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600; color: #1e293b; }
    .pos-total { margin-top: 2rem; padding-top: 1.5rem; border-top: 2px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; font-size: 1.8rem; font-weight: 900; color: var(--primary-color); }
    .success-badge { margin-top: 2.5rem; background: #10b981; color: white; padding: 0.8rem 1.5rem; border-radius: 12px; text-align: center; font-weight: 800; font-size: 0.9rem; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); }

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
    .acc-header { display: flex; justify-content: space-between; margin-bottom: 2rem; color: #64748b; font-size: 0.8rem; font-weight: 800; align-items: center; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
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

      .glass-tab { flex-shrink: 0; white-space: nowrap; }

      .hub-content { grid-template-columns: 1fr; gap: 3rem; }
      
      .text-side { order: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
      .visual-side { order: 2; width: 100%; }

      .text-side h2 { font-size: 2.25rem; }
      .hub-subheading { margin-left: auto; margin-right: auto; }
      .sophisticated-list { text-align: left; align-self: stretch; max-width: 450px; margin-left: auto; margin-right: auto; }
    }

    @media (max-width: 640px) {
      .glass-card-main { padding: 2.5rem 1.5rem; border-radius: 20px; }
      .text-side h2 { font-size: 1.85rem; }
      .hub-subheading { font-size: 1rem; }
      .glass-surface { padding: 1.5rem; min-height: 300px; }
      
      .pos-total { font-size: 1.4rem; }
      .success-badge { width: 100%; }
      .channel-dot { font-size: 0.7rem; padding: 0.5rem 1rem; }
      .web { top: 15%; }
      .app { top: 35%; }
      .channel-dot { white-space: nowrap; max-width: 100%; overflow: hidden; text-overflow: ellipsis; }
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
      subtext: 'The core of your retail operations, optimized for speed and accuracy.',
      features: [
        { title: 'Endless aisle', desc: 'Check availability across stores and ship from another location.' },
        { title: 'Online orders → POS', desc: 'Receive online orders directly into the checkout workflow.' },
        { title: 'Direct home delivery', desc: 'Fulfill out-of-stock items by shipping to the customer.' },
        { title: 'Auto-Reconciliation', desc: 'AI reconciles payments across UPI and Cards.' }
      ],
      visualType: 'pos'
    },
    {
      id: 'inventory',
      title: 'Inventory',
      benefit: 'Multi Locations',
      headline: 'Lightning-fast <span class="text-highlight-pink">Inventory</span> intelligence',
      subtext: 'Perfectly balanced stock. No overstocking or losing a sale due to out of stock.',
      features: [
        { title: 'Endless aisle', desc: 'Check availability across stores and ship from another location.' },
        { title: 'Stock-Aging', desc: 'Identify slow-moving stock before it becomes overhead.' },
        { title: 'Smart Transfers', desc: 'Optimize stock across your entire store network.' }
      ],
      visualType: 'inventory'
    },
    {
      id: 'accounting',
      title: 'Financial',
      benefit: 'Real-time precision',
      headline: 'Automated <span class="text-highlight-pink">Financial</span> Control',
      subtext: 'Instant, Accurate & Integrated — Accounting & reconciliation with AI-powered workflows. Get accurate insights to make better decisions. Always audit-ready with 1-click share/export to CA.',
      features: [
        { title: 'One-Click GST', desc: 'Auto-generate reports for GST R1 and 3B compliance.' },
        { title: 'Audit-Ready', desc: 'Maintain detailed ledgers that stay compliant.' },
        { title: 'Pro-active Alerts', desc: 'Get notified of unusual cashflow patterns.' }
      ],
      visualType: 'accounting'
    },
    {
      id: 'omnichannel',
      title: 'Omnichannel',
      benefit: 'Unified Queue',
      headline: 'Unified <span class="text-highlight-pink">Omnichannel</span> Commerce',
      subtext: 'Sell on Shopify, Amazon, Flipkart, your mobile app and in-store — all orders land in one unified queue. No missed orders, no inventory conflicts, no manual syncing.',
      features: [
        { title: 'One order queue', desc: 'Shopify, Amazon, Flipkart & POS orders managed from a single screen.' },
        { title: 'Live inventory sync', desc: 'Stock levels update in real-time across all channels — no overselling.' },
        { title: 'Smart Auto-Routing', desc: 'Route online orders to the nearest store for faster, cheaper fulfilment.' }
      ],
      visualType: 'omnichannel'
    }
  ];

  activeTab: HubTab = this.tabs[0];
  progress = 0;
  isAnimating = false;
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

    // Fast Entrance Animation
    this.isAnimating = false;
    this.activeTab = tab;
    this.progress = 0;
    this.cdr.markForCheck();

    requestAnimationFrame(() => {
      this.isAnimating = true;
      this.cdr.markForCheck();
    });
  }
}
