import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  providers: [CurrencyPipe],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Sync Parity + Ledger Visual) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">INTELLIGENT FINANCIAL OPS</div>
        <h1>Accounting, <span class="text-highlight-pink">Automated.</span></h1>
        <p>Accounting & reconciliation with AI powered workflows. Get accurate insights to make better decisions. Always audit ready with 1 click share/export to CA.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">View Financial Intelligence</a>
        </div>

        <!-- 3D Ledger Visual (Unified Graph Integration) -->
        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Card (Compliance Status) -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>COMPLIANCE: GSTR-3B</span>
                <span class="status-sync">● READY</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Tax Period: April 2026</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Middle Card (Audit Log) -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>AUDIT LOG: RECENT</span>
                <span class="status-live">● VERIFIED</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Journal #829: Corrected</span></div>
              </div>
            </div>

            <!-- Main Card (Fav Cashflow Graph Integrated) -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>FINANCIAL HEALTH</span>
                <span class="status-live">● STABLE</span>
              </div>
              
              <!-- User's Favorite Graph (Upstyled for V4) -->
              <div class="v4-chart-integration">
                <div class="chart-header-mini">
                  <small>CASHFLOW FORECAST</small>
                  <span class="liquidity-badge">+7.5%</span>
                </div>
                <svg viewBox="0 0 400 150" class="v4-cashflow-svg">
                  <path d="M0,130 Q100,120 200,60 T400,20" class="path-expected" />
                  <path d="M0,140 Q150,140 400,100" class="path-baseline" />
                  <circle cx="200" cy="60" r="4" class="current-marker" />
                  <rect x="180" y="30" width="80" height="20" rx="4" class="date-callout" />
                  <text x="185" y="44" class="callout-text">{{ netPosition | currency:'INR':'symbol':'1.0-0' }}</text>
                </svg>
              </div>

              <div class="terminal-rows mt-4">
                <div class="t-total-row">
                  <span>NET POSITION</span><span>₹ 12.4M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Billing/Inventory Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Automated Financial Control.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Auto-Reconciliation -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
                <h3>Automated Reconciliation</h3>
                <p>No more missing payments. AI matches UPI, Cards, and Cash entries in real-time across all locations.</p>
            </div>

            <!-- Card 2: GST Export -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>GST-Ready Reports</h3>
              <p>One-click export for GSTR-1, GSTR-3B, and GSTR-9. Fully compliant with the latest GST rules and formats.</p>
            </div>

            <!-- Card 3: Real-time P&L -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 3v18h18"/><path d="M18 9l-3 3-3-3-3 3"/>
                </svg>
              </div>
              <h3>Daily P&L Pulse</h3>
              <p>Know your exact profitability at the close of every business day. Track margins across stores and categories.</p>
            </div>

            <!-- Card 4: ERP/Tally Sync -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
                <h3>One Click Financial Statements</h3>
                <p>Balance Sheet, P&L, Cashflow & GST/TDS reports with 20+ financial metrics available in real time.</p>
            </div>

            <!-- Card 5: Audit Logs -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h3>Audit Ready. Instantly.</h3>
              <p>Every financial change is logged with a timestamp and user ID. Maintain an immutable digital paper trail.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (V4 Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">WORKFLOW</span>
          <h2 class="section-title">From Transaction to Ledger.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4" [class.active]="!showInsight && !isAnalyzing">
              <h3>Automated Journal Posting</h3>
              <p>Sales, returns, and expenses are automatically categorized and posted to their respective ledgers in real-time.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Multi-Store Aggregation</h3>
              <p>Consolidate financial data from 100+ locations into a single, unified group balance sheet instantly.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Expense Management</h3>
              <p>Capture petty cash and store expenses via mobile. Workflow-based approvals before ledger posting.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card" [class.analyzing]="isAnalyzing">
              
              <!-- COGNITIVE SEARCH HUB (Accounting Context) -->
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

              <!-- Content Area -->
              <div class="dash-content-area">
                
                <!-- Persistent Net Position (Live Ticker) -->
                <div class="dash-main-stat" [class.active-ai]="isAnalyzing || showInsight">
                  <div class="live-indicator-wrapper" *ngIf="isAnalyzing || showInsight">
                    <span class="live-dot"></span> LIVE
                  </div>
                  <label>Monthly Net Position</label>
                  <div class="stat-row">
                    <span class="val" [class.flash-green]="netPosition !== lastNetPosition">
                      {{ netPosition | currency:'INR':'symbol':'1.0-0' }}
                    </span>
                    <span class="trend up">↑ 8.4%</span>
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
                        <span class="label">Tax Provision High</span>
                     </div>
                     <div class="live-glow" *ngSwitchCase="'analysis'">
                        <span class="dot"></span> LEDGER SYNC ACTIVE
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

      <!-- MODALS: Accounting Strategic Actions -->

      <!-- SETTLEMENT TRIAGE MODAL -->
      <div class="modal-overlay" *ngIf="showSettlementModal" (click)="closeSettlementModal()">
        <div class="checkout-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">CASHFLOW AUDIT</span>
               <h2>Settlement Triage</h2>
             </div>
             <button class="close-modal" (click)="closeSettlementModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="optimization-status">
                <div class="pulse-ring"></div>
                <span class="status-text">Scanning settlements for April...</span>
              </div>
              <div class="channel-success-list">
                <div class="channel-item">
                  <div class="channel-info"><span class="name">UPI (Razorpay)</span><span class="score green">99.2% Matched</span></div>
                  <div class="channel-bar"><div class="fill green" style="width: 90%"></div></div>
                </div>
                <div class="channel-item">
                  <div class="channel-info"><span class="name">Card (HDFC)</span><span class="score yellow">Pending ₹1.2L</span></div>
                  <div class="channel-bar"><div class="fill yellow" style="width: 60%"></div></div>
                </div>
              </div>
              <div class="recommendation-box">
                <div class="icon">✨</div>
                <p>AI identified ₹12,400 in unmatched settlements due to bank holiday delays. Re-syncing now.</p>
              </div>
           </div>
           <div class="modal-footer">
             <button class="btn-primary-glow w-full" (click)="closeSettlementModal()">Sync All Settlements</button>
           </div>
        </div>
      </div>

      <!-- TAX PROVISION MODAL -->
      <div class="modal-overlay" *ngIf="showTaxModal" (click)="closeTaxModal()">
        <div class="scale-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">COMPLIANCE HUB</span>
               <h2>Tax Provision Forecast</h2>
             </div>
             <button class="close-modal" (click)="closeTaxModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="staffing-visual">
                <div class="map-label">Monthly GST Liability Stream</div>
                <div class="heatmap-grid">
                  <div class="h-cell high" title="IGST"></div>
                  <div class="h-cell mid" title="CGST"></div>
                  <div class="h-cell mid" title="SGST"></div>
                </div>
              </div>
              <div class="scale-info-box">
                <div class="ai-burst">⚡</div>
                <p>Projected GSTR-3B liability: <strong>₹4.2L</strong>. AI recommends provisioning ₹1.5L today to maintain liquidity.</p>
              </div>
           </div>
           <div class="modal-footer">
             <button class="btn-scale-commit w-full" (click)="closeTaxModal()">Allocate Tax Provision</button>
           </div>
        </div>
      </div>

      <!-- AUDIT LOG MODAL -->
      <div class="modal-overlay" *ngIf="showAuditModal" (click)="closeAuditModal()">
        <div class="scale-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">LEDGER INTELLIGENCE</span>
               <h2>Audit Log Explorer</h2>
             </div>
             <button class="close-modal" (click)="closeAuditModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="staffing-visual">
                <div class="map-label">Anomalous Activity Triggers</div>
                <div class="heatmap-grid">
                  <div class="h-cell high" title="Duplicate Entry"></div>
                  <div class="h-cell mid" title="High Expense"></div>
                  <div class="h-cell low" title="System Correction"></div>
                </div>
              </div>
              <div class="scale-info-box">
                <div class="ai-burst">🕵️</div>
                <p>Reviewing unusual petty cash spikes in <strong>Pune Branch</strong>. AI found 3 duplicate receipt filings.</p>
              </div>
           </div>
           <div class="modal-footer">
             <button class="btn-scale-commit w-full" (click)="closeAuditModal()">Mark for Manager Review</button>
           </div>
        </div>
      </div>

    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="READY FOR FINANCIAL CLARITY?"
      headline="Transform Your <br>Accounting Today."
      subtext="See how Zenflow transforms billing, inventory, order management and accounting into one seamless retail system."
      buttonText="Get Audit Ready →">
    </app-final-cta>
  `,
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent implements OnDestroy { 
  @ViewChild('aiInput') aiInput!: ElementRef<HTMLInputElement>;

  // AI Demo State
  isFocused = false;
  isAnalyzing = false;
  showInsight = false;
  currentQuery = '';
  
  // Modals
  showSettlementModal = false;
  showTaxModal = false;
  showAuditModal = false;

  // Accounting suggestions
  accountingSuggestions = [
    { label: 'Audit Cash Flow Settlements', query: 'Audit cash flow...', icon: '💹' },
    { label: 'Forecast Tax Liability', query: 'Forecast tax...', icon: '📑' },
    { label: 'Analyze Expense Leakage', query: 'Analyze expenses...', icon: '🔎' }
  ];

  // Live Ticker Data
  netPosition = 12400000;
  lastNetPosition = 12400000;
  placeholderText = 'Ask AI for financial insights';
  analysisMode = 'Analyzing...';
  
  // Insight Items
  insightTitle = '';
  insightText = '';
  insightAction = '';
  insightTheme = 'default';

  private tickerInterval: any;

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {
    this.startLivePositionTicker();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target) && this.isFocused) {
      this.isFocused = false;
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy() {
    if (this.tickerInterval) clearInterval(this.tickerInterval);
  }

  startLivePositionTicker() {
    this.tickerInterval = setInterval(() => {
      this.lastNetPosition = this.netPosition;
      // fluctuate +/- 2000 to 8000
      const change = Math.floor(Math.random() * 6000) + 2000;
      this.netPosition += Math.random() > 0.4 ? change : -change;
      this.cdr.markForCheck();
    }, 4000);
  }

  triggerAnalysis(query: string) {
    if (!query) return;
    
    this.currentQuery = query;
    this.isAnalyzing = true;
    this.showInsight = false;
    this.isFocused = false;
    
    // UI Feedback: Set input value visually
    if (this.aiInput) this.aiInput.nativeElement.value = query;

    // Routing Logic based on query
    if (query.includes('audit') || query.includes('settlement')) {
      this.analysisMode = 'Reconciling Gateway Settlements...';
      this.insightTheme = 'analysis';
      this.insightTitle = 'Cashflow Audit Ready';
      this.insightText = 'Reconciled 1,240 transactions against Razorpay settlements. Identified <strong>₹12.4k leakage</strong> in pending bank transfers.';
      this.insightAction = 'Reconcile Settlements';
    } else if (query.includes('tax') || query.includes('provision')) {
      this.analysisMode = 'Calculating GST Provisions...';
      this.insightTheme = 'alert';
      this.insightTitle = 'Tax Forecast Alert';
      this.insightText = 'Projected GSTR-3B liability for April: <strong>₹4.2L</strong>. Recommended tax provision: ₹1.5L.';
      this.insightAction = 'Provision GST';
    } else {
      this.analysisMode = 'Scanning Ledger Anomalies...';
      this.insightTheme = 'forecast';
      this.insightTitle = 'Expense Optimization';
      this.insightText = 'Unusual spike in petty cash detected at Pune branch. 3 potential <strong>duplicate entries found</strong>.';
      this.insightAction = 'Review Anomalies';
    }

    setTimeout(() => {
      this.isAnalyzing = false;
      this.showInsight = true;
      this.cdr.markForCheck();
    }, 700); 
  }

  handleInsightAction() {
    switch (this.insightAction) {
      case 'Reconcile Settlements': this.openSettlementModal(); break;
      case 'Provision GST': this.openTaxModal(); break;
      case 'Review Anomalies': this.openAuditModal(); break;
    }
  }

  // Modals
  openSettlementModal() { this.showSettlementModal = true; this.cdr.markForCheck(); }
  closeSettlementModal() { this.showSettlementModal = false; this.cdr.markForCheck(); }

  openTaxModal() { this.showTaxModal = true; this.cdr.markForCheck(); }
  closeTaxModal() { this.showTaxModal = false; this.cdr.markForCheck(); }

  openAuditModal() { this.showAuditModal = true; this.cdr.markForCheck(); }
  closeAuditModal() { this.showAuditModal = false; this.cdr.markForCheck(); }
}
