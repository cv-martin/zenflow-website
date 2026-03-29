import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-omnichannel',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Sync Parity + Marketplace Visual) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">UNIFIED COMMERCE</div>
        <h1><span class="text-highlight-pink">Omnichannel Commerce.</span><br>Sell Everywhere, Manage in One Place.</h1>
        <p>Sync your physical store inventory with Amazon, Myntra, and Ajio in real-time. Turn your warehouse into a high-speed fulfillment hub.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Connect Your Channels</a>
        </div>

        <!-- 3D Channel Sync Visual -->
        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Card (Ajio/Myntra) -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>CHANNEL: MYNTRA</span>
                <span class="status-sync">● SYNCING</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Batch Update v2.4</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Middle Card (Amazon) -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>CHANNEL: AMAZON</span>
                <span class="status-live">● LIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>New Order: AMZ-309</span></div>
              </div>
            </div>

            <!-- Main Card (Global Sync) -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>OMNICHANNEL HUB</span>
                <span class="status-live">● ACTIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row"><span>Total Orders Today</span><span>142</span></div>
                <div class="t-row"><span>Inventory Health</span><span>99.8%</span></div>
                <div class="t-total-row">
                  <span>UNIFIED STOCK</span><span>18,450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Billing Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>One Inventory. Infinite Channels.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Real-time Marketplace Sync -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Unified Order Management System</h3>
              <p>Streamline multi-channel orders. Sync inventory and fulfillment from one place. No more overselling or marketplace penalties.</p>
            </div>

            <!-- Card 2: Shiprocket Integration -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Integrated Logistics</h3>
              <p>Integrates with Shiprocket.</p>
            </div>

            <!-- Card 3: Unified Customer 360 -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>Customer 360°</h3>
              <p>Identify your top customers whether they buy on your website, a marketplace, or in-store.</p>
            </div>

            <!-- Card 4: Pick-and-Pack -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>B2B Orders Supported</h3>
              <p>Optimized for B2B and wholesale operations.</p>
            </div>

            <!-- Card 5: Returns Management -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 15L6 10l5-5"/><path d="M4 10h12a5 5 0 015 5v2"/>
                </svg>
              </div>
              <h3>Unified Returns</h3>
              <p>Process online returns at your retail counter or warehouse with instant stock re-entry.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (Refined Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">ORDER FLOW</span>
          <h2 class="section-title">Zero-Lag Logistics.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>Centralized Order Desk</h3>
              <p>View Amazon, Shopify, and POS orders in a single, unified stream. Priority-based sorting.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Automated Stock Buffers</h3>
              <p>Set safety stock levels per channel to prevent overselling on high-risk marketplaces.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Hyper-Local Delivery</h3>
              <p>Deliver faster from the nearest store.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card" [class.analyzing]="isAnalyzing">
              
              <!-- COGNITIVE SEARCH HUB (Omnichannel Context) -->
              <div class="dash-top">
                <div class="dash-search-container" 
                     [class.focused]="isFocused"
                     (click)="aiInput.focus()">
                  <span class="sparkle-icon">✨</span>
                  <input #aiInput 
                    type="text" 
                    class="dash-search-input" 
                    [placeholder]="placeholderText"
                    (focus)="isFocused = true"
                    (blur)="isFocused = false"
                    (keydown.enter)="triggerAnalysis(aiInput.value)">
                  
                  <!-- Dropdown Suggestions Disabled -->
                  <!-- <div class="search-suggestions" ... </div> -->
                </div>
              </div>

              <div class="dash-content-area">
                <!-- Persistent Status -->
                <div class="dash-main-stat" [class.active-ai]="isAnalyzing || showInsight">
                  <div class="live-indicator-wrapper" *ngIf="isAnalyzing || showInsight">
                    <span class="live-dot"></span> LIVE SYNC
                  </div>
                  <label>Pending Cross-Channel Orders</label>
                  <div class="stat-row">
                    <span class="val">{{ pendingOrders }}</span>
                    <span class="trend up">↑ 42 today</span>
                  </div>
                  <div class="live-tether" *ngIf="isAnalyzing || showInsight"></div>
                </div>

                <!-- State 2: Analyzing (Loader) -->
                <div class="ai-analyzing" *ngIf="isAnalyzing">
                  <div class="thinking-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <p>{{ analysisMode }}</p>
                </div>

                <!-- State 3: AI Insight (Result) -->
                <div class="ai-insight-card" *ngIf="showInsight && !isAnalyzing" [class]="insightTheme">
                  <div class="insight-header">
                    <span class="ai-badge">Zenflow AI</span>
                    <button class="close-btn" (click)="showInsight = false">×</button>
                  </div>

                  <!-- Theme Specific Visuals -->
                   <div class="theme-visual" [ngSwitch]="insightTheme">
                     <div class="wave-visual" *ngSwitchCase="'forecast'">
                        <div class="wave"></div><div class="wave"></div>
                     </div>
                     <div class="progress-visual" *ngSwitchCase="'alert'">
                        <div class="prog-bar"><div class="fill" style="width: 85%"></div></div>
                        <span class="label">Amazon Stock Alert</span>
                     </div>
                     <div class="live-glow" *ngSwitchCase="'analysis'">
                        <span class="dot"></span> CHANNEL SYNC ACTIVE
                     </div>
                   </div>

                  <h3>{{ insightTitle }}</h3>
                  <p [innerHTML]="insightText"></p>
                  <button class="action-btn-pill" (click)="handleInsightAction()">
                    {{ insightAction }}
                  </button>
                </div>
              </div>

              <div class="dash-mini-grid" *ngIf="!showInsight && !isAnalyzing">
                <div class="mini-bar"></div>
                <div class="mini-bar"></div>
                <div class="mini-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="READY TO GO OMNICHANNEL?"
      headline="Connect Your <br>Commerce Today."
      subtext="See how Zenflow transforms billing, inventory, order management and accounting into one seamless retail system."
      buttonText="Sync My Store →">
    </app-final-cta>
  `,
  styleUrl: './omnichannel.component.scss'
})
export class OmnichannelComponent {
  isAnalyzing = false;
  showInsight = false;
  isFocused = false;
  analysisMode = '';
  insightTheme = 'forecast';
  insightTitle = '';
  insightText = '';
  insightAction = '';
  placeholderText = 'Ask AI about channel performance...';
  pendingOrders = '1,402';

  triggerAnalysis(query: string) {
    if (!query) return;
    this.isAnalyzing = true;
    this.showInsight = false;
    this.analysisMode = 'ANALYZING CHANNELS...';

    setTimeout(() => {
      this.isAnalyzing = false;
      this.showInsight = true;
      
      if (query.toLowerCase().includes('amazon') || query.toLowerCase().includes('stock')) {
        this.insightTheme = 'alert';
        this.insightTitle = 'Low Stock Alert: Amazon';
        this.insightText = 'Stock for <strong>SKU-882 (Blue Denim)</strong> is below safety buffer (12 units) on Amazon India. Syncing stock from Mumbai Retail Hub...';
        this.insightAction = 'Rebalance Stock';
      } else if (query.toLowerCase().includes('forecast') || query.toLowerCase().includes('sale')) {
        this.insightTheme = 'forecast';
        this.insightTitle = 'Marketplace Demand Forecast';
        this.insightText = 'Predicting a 22% surge in <strong>Ethnic Wear</strong> demand on Myntra over the next 72 hours based on regional trends.';
        this.insightAction = 'Increase Buffer';
      } else {
        this.insightTheme = 'analysis';
        this.insightTitle = 'Omnichannel Health Check';
        this.insightText = 'Sync successful across 4 marketplaces. <strong>99.8% listing accuracy</strong>. 42 orders processed in the last 60 minutes.';
        this.insightAction = 'View Sync Logs';
      }
    }, 1500);
  }

  handleInsightAction() {
    this.showInsight = false;
  }
}
