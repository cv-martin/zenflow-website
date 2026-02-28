import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Fleet Visual Refined) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">SMART BILLING</div>
        <h1 class="gradient-text"><span class="text-highlight-pink">Smart Billing</span> That Moves<br>as Fast as Your Counter.</h1>
        <p>Process sales, apply promotions, handle GST, and sync across stores — instantly. Achieving 40% faster checkouts and 7% increase in repeat visits.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Book Demo</a>
        </div>

        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Terminal -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-03</span>
                <span class="status-idle">● IDLE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Awaiting Customer...</span></div>
              </div>
            </div>

            <!-- Middle Terminal -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-02</span>
                <span class="status-sync">● SYNCING</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Batch Update v2.4</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Main Terminal -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-01</span>
                <span class="status-live">● LIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row"><span>Elite Denim SKU-44</span><span>₹ 4,500</span></div>
                <div class="t-row"><span>Premium Cotton V2</span><span>₹ 2,800</span></div>
                <div class="t-total-row">
                  <span>TOTAL</span><span>₹ 7,300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Inventory Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Stock, Sales & Sync. All in One.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Multi-rate GST -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Multi-Rate GST Support</h3>
              <p>Handle multiple tax brackets in a single invoice automatically. Zero manual calculation, 100% compliance.</p>
            </div>

            <!-- Card 2: Loyalty -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Integrated Loyalty</h3>
              <p>Reward repeat customers instantly. Points sync across all physical and online stores.</p>
            </div>

            <!-- Card 3: Offline Mode -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Offline First</h3>
              <p>Never stop selling. Billing works without internet and syncs automatically when you're back online.</p>
            </div>

            <!-- Card 4: Promotional Engine -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Centralized Promos</h3>
              <p>Deploy BOGO or festival offers from HQ to every terminal in seconds.</p>
            </div>

            <!-- Card 5: Real-time Sync -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Multi-Store Sync</h3>
              <p>Global inventory visibility from any billing counter. Sell from any warehouse.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (Refined Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">OPERATIONS</span>
          <h2 class="section-title">High Performance Commerce.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>AI-Powered Reconciliation</h3>
              <p>No more missing payments. AI matches UPI, Cards, and Cash entries in real-time.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Zero Training Terminals</h3>
              <p>Intuitive UI designed for speed. New staff can start billing in under 5 minutes.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Custom Invoice Design</h3>
              <p>Professional, branded invoices that look great and contain all statutory details.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card">
              <div class="dash-top">
                <div class="dash-search-container" 
                     [class.focused]="isSearchFocused"
                     (click)="focusSearch()">
                  <span class="sparkle-icon">✨</span>
                  <input type="text" 
                    class="dash-search-input" 
                    [placeholder]="searchPlaceholder"
                    (focus)="onSearchFocus()"
                    (blur)="onSearchBlur()"
                    (keydown.enter)="triggerAnalysis(searchInput.value)"
                    #searchInput> 
                  
                  <!-- Dropdown Suggestions -->
                  <div class="search-suggestions" *ngIf="isSearchFocused" (mousedown)="$event.preventDefault()">
                    <div class="suggestion-label">Try Asking:</div>
                    <div class="suggestion-item" (mousedown)="triggerAnalysis('Weekend Revenue Forecast')">
                      <span class="icon">📈</span> Weekend Revenue Forecast
                    </div>
                    <div class="suggestion-item" (mousedown)="triggerAnalysis('Inventory Velocity Alert')">
                      <span class="icon">⚠️</span> Inventory Velocity Alert
                    </div>
                    <div class="suggestion-item" (mousedown)="triggerAnalysis('Daily Revenue Analysis')">
                      <span class="icon">🚀</span> Daily Revenue Analysis
                    </div>
                  </div>
                </div>
              </div>

              <!-- Main Stat Area (Swappable) -->
              <div class="dash-content-area">
                
                <!-- Persistent Live Revenue (2026 Live Ticker) -->
                <div class="dash-main-stat" [class.active-ai]="isAnalyzing || showInsight">
                  <div class="live-indicator-wrapper" *ngIf="isAnalyzing || showInsight">
                    <span class="live-dot"></span> LIVE
                  </div>
                  <label>Daily Revenue</label>
                  <div class="stat-row">
                    <span class="val" [class.flash-green]="revenue !== lastRevenue">
                      {{ revenue | currency:'INR':'symbol':'1.0-0' }}
                    </span>
                    <span class="trend up">↑ {{ revenueTrend }}%</span>
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
                <div class="ai-insight-card" *ngIf="showInsight" [class]="insightTheme">
                  <div class="insight-header">
                    <span class="ai-badge">ZENFLOW AI</span>
                    <button class="close-btn" (click)="showInsight = false">×</button>
                  </div>

                  <!-- Theme Specific Visuals -->
                   <div class="theme-visual" [ngSwitch]="insightTheme">
                     <div class="wave-visual" *ngSwitchCase="'forecast'">
                        <div class="wave"></div><div class="wave"></div>
                     </div>
                     <div class="progress-visual" *ngSwitchCase="'alert'">
                        <div class="prog-bar"><div class="fill" style="width: 85%"></div></div>
                        <span class="label">85% Depleted</span>
                     </div>
                     <div class="live-glow" *ngSwitchCase="'analysis'">
                        <span class="dot"></span> LIVE DATA SYNC
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

      <!-- 2026 TRENDY REVENUE MODAL -->
      <div class="modal-overlay" *ngIf="showReportModal" (click)="closeSalesReport()">
        <!-- (Same Modal Content As Before) -->
        <div class="report-modal glass-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <div class="title-group">
              <span class="eyebrow">COGNITIVE ANALYSIS</span>
              <h2>Revenue Velocity Report</h2>
            </div>
            <button class="close-modal" (click)="closeSalesReport()">×</button>
          </div>

          <div class="modal-body">
            <!-- The Logic: Real-time SVG Trend Chart -->
            <div class="chart-container">
              <div class="chart-header">
                <span class="metric">Daily Volume (Predicted)</span>
                <span class="active-val">₹142,850 <small>+12.4%</small></span>
              </div>
              <svg viewBox="0 0 400 150" class="trend-chart-svg">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary-color)" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="var(--primary-color)" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,110 80,130 T160,80 T240,100 T320,40 T400,60 L400,150 L0,150 Z" fill="url(#chartGradient)"/>
                <path d="M0,120 Q50,110 80,130 T160,80 T240,100 T320,40 T400,60" fill="none" stroke="var(--primary-color)" stroke-width="3" class="path-anim"/>
                <circle cx="320" cy="40" r="4" fill="var(--primary-color)" class="pulse-point"/>
              </svg>
              <div class="chart-labels">
                <span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span>
              </div>
            </div>

            <div class="insights-detail-grid">
              <div class="detail-card">
                <label>PEAK TRAFFIC</label>
                <div class="val">18:15 <small>Expected</small></div>
                <div class="desc">Prepare staff for high-velocity checkout.</div>
              </div>
              <div class="detail-card">
                <label>AVG BASKET</label>
                <div class="val">₹2,450</div>
                <div class="desc">Up 8% vs last Thursday.</div>
              </div>
              <div class="detail-card highlight">
                <label>AI PREDICTION</label>
                <div class="val">₹2.1L</div>
                <div class="desc">End-of-day revenue projection.</div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn-primary w-full" (click)="closeSalesReport()">Acknowledge & Sync HQ</button>
          </div>
        </div>
      </div>

      <!-- SLEEK CHECKOUT OPTIMIZATION MODAL -->
      <div class="modal-overlay" *ngIf="showCheckoutModal" (click)="closeCheckoutModal()">
        <div class="checkout-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">SMART ROUTING</span>
               <h2>Optimize Checkout Flow</h2>
             </div>
             <button class="close-modal" (click)="closeCheckoutModal()">×</button>
           </div>

           <div class="modal-body">
             <div class="optimization-status">
               <div class="pulse-ring"></div>
               <span class="status-text">AI Strategy: <strong>Priority UPI Routing</strong></span>
             </div>

             <div class="channel-success-list">
               <div class="channel-item">
                 <div class="channel-info">
                   <span class="name">Unified Payments (UPI)</span>
                   <span class="score green">98.2% Success</span>
                 </div>
                 <div class="channel-bar"><div class="fill green" style="width: 98%"></div></div>
               </div>
               <div class="channel-item">
                 <div class="channel-info">
                   <span class="name">Card Payments</span>
                   <span class="score yellow">84.5% Success</span>
                 </div>
                 <div class="channel-bar"><div class="fill yellow" style="width: 84%"></div></div>
               </div>
             </div>

             <div class="recommendation-box">
               <div class="icon">✨</div>
               <p>Moving UPI to top-of-list to reduce friction. <br>Estimated checkout time reduction: <strong>12s</strong>.</p>
             </div>
           </div>

           <div class="modal-footer">
             <button class="btn-primary-glow w-full" (click)="closeCheckoutModal()">Deploy Optimization Now</button>
           </div>
        </div>
      </div>

      <!-- SCALE OPERATIONS MODAL -->
      <div class="modal-overlay" *ngIf="showScaleModal" (click)="closeScaleModal()">
        <div class="scale-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">ELASTIC SCALING</span>
               <h2>Scale Logistics & Operations</h2>
             </div>
             <button class="close-modal" (click)="closeScaleModal()">×</button>
           </div>

           <div class="modal-body">
              <!-- Staffing Map/Heatmap Mockup -->
              <div class="staffing-visual">
                <div class="map-label">Regional Staffing Load</div>
                <div class="heatmap-grid">
                  <div class="h-cell high" title="Mumbai"></div>
                  <div class="h-cell mid" title="Delhi"></div>
                  <div class="h-cell low" title="Bangalore"></div>
                  <div class="h-cell high" title="Chennai"></div>
                  <div class="h-cell mid" title="Pune"></div>
                  <div class="h-cell high" title="Hyderabad"></div>
                </div>
              </div>

              <div class="stats-row-compact">
                <div class="s-card">
                  <label>Current Reach</label>
                  <div class="v">12k <small>Orders/hr</small></div>
                </div>
                <div class="s-card">
                  <label>Max Capacity</label>
                  <div class="v">15k <small>Orders/hr</small></div>
                </div>
              </div>

              <div class="scale-info-box">
                <div class="ai-burst">⚡</div>
                <p>AI suggests increasing <strong>Last-Mile</strong> capacity by <strong>18%</strong> for the upcoming weekend spike.</p>
              </div>
           </div>

           <div class="modal-footer">
             <button class="btn-scale-commit w-full" (click)="closeScaleModal()">Commit 18% Resource Expansion</button>
           </div>
        </div>
      </div>

      <!-- SECTION 4: Outcome Section (Matching Inventory) -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Stop Guessing Your Margins.</h2>
          <p class="outcome-statement">Zenflow ensures every rupee is accounted for, from checkout to bank.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <span>Reduce human error in reconciliation by 99%.</span>
            </div>
            <div class="outcome-item">
              <span>Accept 15+ payment modes with instant verification.</span>
            </div>
            <div class="outcome-item">
              <span>Endless aisle — Find unavailable sizes in other stores and ship to the customer.</span>
            </div>
            <div class="outcome-item">
              <span>Receive online orders directly at POS — check cross-store stock availability and fulfil from the nearest location.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="READY TO SCALE YOUR STORE?"
      headline="Transform Your <br>Billing Today."
      subtext="See how Zenflow transforms billing, inventory, and accounting into one seamless retail system."
      buttonText="Book a Live Demo →">
    </app-final-cta>
  `,

  styleUrl: './billing.component.scss'
})
export class BillingComponent { 
  // Live Revenue State
  revenue = 142850;
  revenueTrend = 12.4;
  lastRevenue = 142850;
  
  // AI Search State
  searchPlaceholder = '';
  private placeholders = [
    "Ask AI for sales trends...",
    "Ask AI for stock alerts...",
    "Ask AI for customer retention...",
    "Ask AI for top performing SKUs..."
  ];
  private placeholderIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  
  // Interaction State
  @ViewChild('searchInput') searchInput!: ElementRef;
  isSearchFocused = false;
  isAnalyzing = false;
  showInsight = false;
  showReportModal = false; // 2026 Report Modal
  showCheckoutModal = false; // Sleek Checkout Optimization
  showScaleModal = false; // Logistics & Selection
  currentQuery = ''; // Store for template access
  
  // Insight Data
  insightTitle = '';
  insightText = '';
  insightAction = '';
  insightTheme = 'default'; // 'forecast', 'alert', 'analysis'
  analysisMode = 'Analyzing...'; // Dynamic Loading Text
  
  constructor(private cdr: ChangeDetectorRef) {
    this.startLiveRevenue();
    this.startTypewriter();
  }

  // ... (startLiveRevenue and startTypewriter remain unchanged)

  openSalesReport() {
    this.showReportModal = true;
    this.cdr.markForCheck();
  }

  closeSalesReport() {
    this.showReportModal = false;
    this.cdr.markForCheck();
  }

  openCheckoutModal() {
    this.showCheckoutModal = true;
    this.cdr.markForCheck();
  }

  closeCheckoutModal() {
    this.showCheckoutModal = false;
    this.cdr.markForCheck();
  }

  openScaleModal() {
    this.showScaleModal = true;
    this.cdr.markForCheck();
  }

  closeScaleModal() {
    this.showScaleModal = false;
    this.cdr.markForCheck();
  }

  startLiveRevenue() {
    // Randomly add sales every 3-8 seconds
    const loop = () => {
      const delay = Math.random() * 5000 + 3000;
      setTimeout(() => {
        const increment = Math.floor(Math.random() * (1500 - 350 + 1)) + 350;
        this.lastRevenue = this.revenue;
        this.revenue += increment;
        loop();
      }, delay);
    };
    loop();
  }

  startTypewriter() {
    const loop = () => {
      // Stop typing if user is interacting
      if (this.isSearchFocused || this.showInsight || this.isAnalyzing) {
        setTimeout(loop, 1000); // Check again later
        return;
      }

      const currentText = this.placeholders[this.placeholderIndex];
      
      if (this.isDeleting) {
        this.searchPlaceholder = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.searchPlaceholder = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      let typeSpeed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
        typeSpeed = 500; // Pause before typing next
      }

      setTimeout(loop, typeSpeed);
    };
    loop();
  }

  // Handle User Input
  focusSearch() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
    this.isSearchFocused = true;
  }

  onSearchFocus() {
    this.isSearchFocused = true;
    this.isDeleting = false; 
    this.searchPlaceholder = ""; 
  }

  onSearchBlur() {
    this.isSearchFocused = false;
  }

  triggerAnalysis(query: string = '') {
    const q = (query || '').toLowerCase();

    // 1. Set Loading Mode (2026 feel)
    if (q.includes('stock')) this.analysisMode = 'Scanning Inventory Velocity...';
    else if (q.includes('weekend')) this.analysisMode = 'Running Weekend Forecast...';
    else if (q.includes('revenue') || q.includes('daily')) this.analysisMode = 'Processing Revenue Intelligence...';
    else this.analysisMode = 'Thinking...';

    this.isSearchFocused = false;
    this.isAnalyzing = true;
    this.showInsight = false;
    this.currentQuery = query; 
    this.searchPlaceholder = query || 'Predicting sales trends...'; 
    
    // Simulate AI processing (Near Instant)
    setTimeout(() => {
      this.isAnalyzing = false;
      this.showInsight = true;

      // Smart Content Logic (1:1 Mapping with Dropdown)
      if (q.includes('stock')) {
        this.insightTheme = 'alert';
        this.insightTitle = '⚠️ Inventory Velocity Alert';
        this.insightText = 'AI detected high-velocity sales on <strong>Denim Jackets</strong>. Stock depletion estimated by <strong>Saturday 4PM</strong>.';
        this.insightAction = 'Auto-Reorder (20 Units)';
      } 
      else if (q.includes('weekend')) {
        this.insightTheme = 'forecast';
        this.insightTitle = '📈 Weekend Revenue Forecast';
        this.insightText = 'Current trajectory predicts <strong>₹2.4L</strong> (+15% YoY). Suggesting increase in delivery staff by <strong>20%</strong>.';
        this.insightAction = 'Scale Operations';
      }
      else if (q.includes('revenue') || q.includes('daily')) {
        this.insightTheme = 'analysis';
        this.insightTitle = '🚀 Daily Revenue Analysis';
        const formattedRev = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(this.revenue);
        this.insightText = `Momentum verified at <strong>${formattedRev}</strong> (+12.4%). Traffic peak expected at <strong>6:15 PM</strong>.`;
        this.insightAction = 'View Sales Report';
      } 
      else {
        this.insightTheme = 'default';
        this.insightTitle = '💡 Strategic AI Insight';
        this.insightText = 'Smart-routing detected <strong>98% peak success</strong> on UPI payments. Prioritize UPI on checkout for efficiency.';
        this.insightAction = 'Optimize Checkout';
      }

      this.cdr.markForCheck(); // Force update
    }, 500); 
  }

  handleInsightAction() {
    switch (this.insightAction) {
      case 'View Sales Report': this.openSalesReport(); break;
      case 'Optimize Checkout': this.openCheckoutModal(); break;
      case 'Scale Operations': this.openScaleModal(); break;
    }
  }
}
