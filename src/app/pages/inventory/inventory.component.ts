import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  providers: [CurrencyPipe],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Network Intelligence Hero -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">GLOBAL WAREHOUSE ORCHESTRATION</div>
        <h1 class="text-gradient-premium">Lightning-fast <span class="text-highlight-pink">Inventory</span> intelligence.</h1>
        <p>Perfectly balanced stock. No overstocking or losing a sale due to out of stock.</p>

        <div class="hero-subline">Orchestrating distributed retail operations with unified AI intelligence.</div>

        <!-- V6: High-Fidelity Enterprise Network Hub -->
        <div class="enterprise-network-grid">
          <div class="network-canvas glass-card">
            
            <!-- Console Header -->
            <div class="console-header">
              <div class="console-controls">
                <span class="ctrl"></span><span class="ctrl"></span><span class="ctrl"></span>
              </div>
              <div class="console-title">INVENTORY ORCHESTRATION CONSOLE v4.2</div>
            </div>

            <!-- EXECUTIVE HUD (Top Right) -->
            <div class="network-summary-card glass-hud">
              <div class="summary-header">
                <div class="live-tag"><span class="dot"></span> SYNC ACTIVE</div>
                <h3 class="white-title">Control Summary</h3>
              </div>
              
              <div class="metric-grid">
                <div class="metric-item">
                  <div class="m-label">CONSOLIDATED VALUE</div>
                  <div class="m-value">₹84,432,591</div>
                </div>
                <div class="metric-item">
                  <div class="m-label">NETWORK VELOCITY</div>
                  <div class="m-value green">↑ 18.2% <span class="wow">WoW</span></div>
                </div>
                <div class="metric-item full">
                  <div class="m-label">Network Health <span class="perc">99.4%</span></div>
                  <div class="health-bar-container"><div class="health-fill" style="width: 99.4%"></div></div>
                </div>
              </div>

              <div class="hud-footer">
                <span>12 Global Locations</span>
                <span class="alert">1 REBALANCE OPT.</span>
              </div>

              <a routerLink="/contact" class="btn-hud-cta">Request System Audit</a>
            </div>

            <!-- CENTRAL CONTROLLER -->
            <div class="central-controller engine-core">
              <div class="scan-ring"></div>
              <div class="scan-ring r2"></div>
              <div class="brand-core">
                <span class="brand-name">Zenflow <span class="engine-tag">CORE</span></span>
              </div>
              <div class="controller-label">AI ENGINE V4.2</div>
            </div>

            <!-- BALANCED 6-NODE NETWORK -->
            <div class="nodes-layer">
              <div class="network-node warehouse w-blr">
                <div class="node-icon-bin">🏭</div>
                <div class="node-body">
                  <div class="node-title">Warehouse 1 - Bangalore</div>
                  <div class="node-meta">Strategic Hub • 82% Cap <span class="tag">ACTIVE</span></div>
                </div>
              </div>

              <div class="network-node warehouse w-pun">
                <div class="node-icon-bin">🏭</div>
                <div class="node-body">
                  <div class="node-title">Warehouse 2 - Pune</div>
                  <div class="node-meta">West Zone • Low Stock <span class="tag warning">SYNC</span></div>
                </div>
              </div>

              <div class="network-node store s-bom">
                <div class="node-icon-bin">🏬</div>
                <div class="node-body">
                  <div class="node-title">Store 1 - Mumbai</div>
                  <div class="node-meta">Colaba Flagship • High Vol</div>
                </div>
              </div>

              <div class="network-node store s-del">
                <div class="node-icon-bin">🏬</div>
                <div class="node-body">
                  <div class="node-title">Store 2 - Delhi</div>
                  <div class="node-meta">NCR Outlet • <span class="tag warning">REORDER</span></div>
                </div>
              </div>

              <div class="network-node store s-kol">
                <div class="node-icon-bin">🏬</div>
                <div class="node-body">
                  <div class="node-title">Store 3 - Kolkata</div>
                  <div class="node-meta">Park St • <span class="tag">TRANSIT</span></div>
                </div>
              </div>

              <div class="network-node hub s-jai">
                <div class="node-icon-bin">📦</div>
                <div class="node-body">
                  <div class="node-title">Smart Hub 1 - Jaipur</div>
                  <div class="node-meta">North Logistics • Ready</div>
                </div>
              </div>
            </div>

            <!-- SVG TOPOLOGY CANVAS (Mapped for Central Hub) -->
            <svg class="topology-canvas" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <g class="lines-group" filter="url(#glow)">
                <path class="flow-path" d="M100,108 Q280,200 500,300" /> <!-- BLR -->
                <path class="flow-path" d="M180,480 Q300,450 500,300" /> <!-- PUN -->
                <path class="flow-path" d="M140,372 Q280,350 500,300" /> <!-- BOM -->
                <path class="flow-path" d="M460,48 Q480,180 500,300" /> <!-- DEL -->
                <path class="flow-path" d="M520,504 Q480,420 500,300" /> <!-- KOL -->
                <path class="flow-path" d="M40,228 Q260,260 500,300" /> <!-- JAI -->
              </g>

              <!-- ALL 6 DATA PARTICLES - Smooth, slow flow -->
              <circle r="2.5" fill="#6366f1" class="data-particle"><animateMotion dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M100,108 Q280,200 500,300" /></circle>
              <circle r="2.5" fill="#f43f5e" class="data-particle"><animateMotion dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M460,48 Q480,180 500,300" /></circle>
              <circle r="2.5" fill="#6366f1" class="data-particle"><animateMotion dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M40,228 Q260,260 500,300" /></circle>
              <circle r="2.5" fill="#10b981" class="data-particle"><animateMotion dur="7.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M140,372 Q280,350 500,300" /></circle> <!-- Mumbai Dot -->
              <circle r="2.5" fill="#6366f1" class="data-particle"><animateMotion dur="8.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M180,480 Q300,450 500,300" /></circle> <!-- Pune Dot -->
              <circle r="2.5" fill="#10b981" class="data-particle"><animateMotion dur="6.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M520,504 Q480,420 500,300" /></circle> <!-- Kolkata Dot -->
            </svg>

          </div>
        </div>
      </section>

      <!-- SECTION 2: Monitoring Bento (Redesigned for Multi-Location) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">MONITORING SUITE</span>
            <h2>Stock Visibility Across the Grid.</h2>
          </div>

          <div class="inner-bento-grid">
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">✨</div>
              <h3>Intelligent Network Sync</h3>
              <p>Zenflow doesn't just track stock; it orchestrates it. When Delhi runs high on SKU-44, the AI automatically suggests a transfer to Mumbai to prevent dead stock.</p>
            </div>
            <div class="bento-card-inner">
              <h3>Shelf-Life Triage</h3>
              <p>Track expiry at a global level. AI prioritizes the movement of aging stock across regions.</p>
            </div>
            <div class="bento-card-inner">
              <h3>Elastic Capacity</h3>
              <p>Real-time space utilization metrics for every warehouse in your network.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations (The Live Command Center) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">COMMAND CENTER</span>
          <h2 class="section-title">Zero-Gaps Monitoring.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4" [class.active]="!showInsight && !isAnalyzing">
              <h3>Global Health Dashboard</h3>
              <p>One unified view for every location. Monitor environmentals, security, and stock health from a single pane of glass.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Inter-Store Transfers</h3>
              <p>Move stock with a single click. AI generates the gate-passes and logistics manifests automatically.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview command-preview glass-card" [class.analyzing]="isAnalyzing">
              
              <!-- COGNITIVE SEARCH HUB (Network Context) -->
              <div class="ai-search-container" (mousedown)="$event.stopPropagation()">
                <div class="search-input-wrapper" [class.focused]="isFocused" (click)="focusSearch()">
                  <span class="ai-stars">✨</span>
                  <input #aiInput 
                         type="text" 
                         [placeholder]="placeholderText"
                         (focus)="focusSearch()"
                         (blur)="onSearchBlur()"
                         (keydown.enter)="triggerAnalysis(aiInput.value)">
                </div>
                <div class="ai-suggestions" *ngIf="isFocused && !isAnalyzing && !showInsight">
                  <div class="suggestion-item" *ngFor="let s of inventorySuggestions" (mousedown)="triggerAnalysis(s.query)">
                    <span class="icon">{{ s.icon }}</span> {{ s.label }}
                  </div>
                </div>
              </div>

              <div class="dash-content-area">
                <!-- Persistent Valuation -->
                <div class="dash-main-stat" [class.active-ai]="isAnalyzing || showInsight">
                  <div class="live-indicator-wrapper" *ngIf="isAnalyzing || showInsight">
                    <span class="live-dot"></span> ANALYZING NETWORK
                  </div>
                  <label>Consolidated Network Value</label>
                  <div class="stat-row">
                    <span class="val" [class.flash-green]="valuation !== lastValuation">
                      {{ valuation | currency:'INR':'symbol':'1.0-0' }}
                    </span>
                    <span class="trend up">↑ 12.4%</span>
                  </div>
                </div>

                <!-- THINKING -->
                <div class="ai-thinking-state" *ngIf="isAnalyzing">
                  <div class="network-sonar">
                    <div class="sonar-wave"></div>
                  </div>
                  <p>{{ analysisMode }}</p>
                </div>

                <!-- INSIGHT -->
                <div class="ai-insight-card {{ insightTheme }}" *ngIf="showInsight && !isAnalyzing">
                  <div class="insight-header">
                    <span class="tag">NETWORK OPTIMIZER</span>
                    <button class="close-card" (click)="showInsight = false">×</button>
                  </div>
                  <h3>{{ insightTitle }}</h3>
                  <p [innerHTML]="insightText"></p>
                  <button class="action-btn-pill" (click)="handleInsightAction()">
                    {{ insightAction }}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- REST OF THE SECTIONS (Outcome, CTA) -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>One Grid. One Ledger.</h2>
          <p class="outcome-statement">Zenflow eliminates information silos, giving you a crystal clear view of every product across every border.</p>
        </div>
      </section>

      <!-- CUSTOM MODAL: REDISTRIBUTION HUB -->
      <div class="modal-overlay" *ngIf="showWarehouseModal" (click)="closeWarehouseModal()">
        <div class="scale-modal redistribution-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">ELASTIC REBALANCE</span>
               <h2>Network Redistribution Center</h2>
             </div>
             <button class="close-modal" (click)="closeWarehouseModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="redistribution-visual">
                <div class="location-flow">
                   <div class="l-box"><span>DEL-04</span><small>Overstock</small></div>
                   <div class="flow-arrow">→</div>
                   <div class="l-box"><span>BOM-01</span><small>Req: 800 units</small></div>
                </div>
                <div class="impact-stats">
                   <div class="i-stat"><span>IMPACT</span><strong>+₹2.4L Margin</strong></div>
                   <div class="i-stat"><span>SAVING</span><strong>-₹18k Logistics</strong></div>
                </div>
              </div>
           </div>
           <div class="modal-footer">
             <button class="btn-scale-commit w-full" (click)="closeWarehouseModal()">Authorize Network Rebalance</button>
           </div>
        </div>
      </div>

      <!-- AUDIT MODAL -->
      <div class="modal-overlay" *ngIf="showLiquidationModal" (click)="closeLiquidationModal()">
        <div class="scale-modal audit-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">COGNITIVE AUDIT</span>
               <h2>Global Health Audit</h2>
             </div>
             <button class="close-modal" (click)="closeLiquidationModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="audit-visual-stack">
                <!-- Stacked status cards -->
                <div class="audit-card glass-card back">
                  <div class="card-tag">DEL-04</div>
                  <div class="card-status">SYNCED</div>
                  <div class="card-stat">CAP: 98%</div>
                </div>
                <div class="audit-card glass-card middle">
                  <div class="card-tag">BOM-01</div>
                  <div class="card-status">OPTIMAL</div>
                  <div class="card-stat">CAP: 84%</div>
                </div>
                <div class="audit-card glass-card front">
                  <div class="card-tag">BLR-02</div>
                  <div class="card-status">PEAK VELOCITY</div>
                  <div class="card-stat">CAP: 62%</div>
                </div>
              </div>

            <div class="modal-footer">
             <button class="btn-primary w-full" (click)="closeLiquidationModal()">Acknowledge & Save Audit</button>
           </div>
        </div>
      </div>

      <!-- NEW: STOCK GAP FORECAST MODAL -->
      <div class="modal-overlay" *ngIf="showForecastModal" (click)="closeForecastModal()">
        <div class="scale-modal forecast-modal glass-card" (click)="$event.stopPropagation()">
           <div class="modal-header">
             <div class="title-group">
               <span class="eyebrow">PREDICTIVE INTELLIGENCE</span>
               <h2>Stock Gap Forecast</h2>
             </div>
             <button class="close-modal" (click)="closeForecastModal()">×</button>
           </div>
           <div class="modal-body">
              <div class="stock-gap-visual">
                <!-- Predictive Cards -->
                <div class="gap-card glass-card day-15">
                  <div class="day-label">T + 12 Days</div>
                  <div class="gap-value">0 Units</div>
                  <div class="status-warning">CRITICAL DEPLETION</div>
                </div>
                <div class="gap-card glass-card day-7">
                  <div class="day-label">T + 5 Days</div>
                  <div class="gap-value">142 Units</div>
                  <div class="status-ok">LOW STOCK</div>
                </div>
                <div class="gap-card glass-card day-now">
                  <div class="day-label">CURRENT</div>
                  <div class="gap-value">1,240 Units</div>
                  <div class="status-ok">OPTIMAL</div>
                </div>
              </div>

              <div class="forecast-details">
                <div class="detail-row">
                  <span>Velocity:</span>
                  <strong class="green">↑ 18.4% WoW</strong>
                </div>
                <div class="detail-row">
                  <span>Lead Time:</span>
                  <strong>4 Days (Sea)</strong>
                </div>
                <p class="forecast-alert">⚠️ Order must be placed within <strong>24 hours</strong> to avoid stock-out.</p>
              </div>
           </div>
           <div class="modal-footer">
             <button class="btn-primary-glow w-full" (click)="closeForecastModal()">Generate Purchase Order</button>
           </div>
        </div>
      </div>

    </div>

    <app-final-cta 
      eyebrow="READY TO SCALE YOUR NETWORK?"
      headline="Multi-Location Mastery <br>Starts Here."
      subtext="Join the next generation of retail giants using Zenflow AI to monitor and move stock with absolute precision."
      buttonText="Request Network Audit →">
    </app-final-cta>
  `,
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnDestroy { 
  @ViewChild('aiInput') aiInput!: ElementRef<HTMLInputElement>;

  isFocused = false;
  isAnalyzing = false;
  showInsight = false;
  currentQuery = '';
  
  showLiquidationModal = false;
  showWarehouseModal = false;
  showForecastModal = false;

  inventorySuggestions = [
    { label: 'Rebalance Global Network', query: 'Rebalance global network...', icon: '🌐' },
    { label: 'Audit Multi-Location Health', query: 'Audit all locations...', icon: '🏥' },
    { label: 'Forecast Stock Gap', query: 'Predict cross-store gaps...', icon: '📈' }
  ];

  valuation = 84200000;
  lastValuation = 84200000;
  placeholderText = 'Monitor your network with AI...';
  analysisMode = 'Syncing Network Data...';
  
  insightTitle = '';
  insightText = '';
  insightAction = '';
  insightTheme = 'default';

  private tickerInterval: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.startLiveValuation();
  }

  ngOnDestroy() {
    if (this.tickerInterval) clearInterval(this.tickerInterval);
  }

  startLiveValuation() {
    this.tickerInterval = setInterval(() => {
      this.lastValuation = this.valuation;
      const change = Math.floor(Math.random() * 20000) + 10000;
      this.valuation += Math.random() > 0.4 ? change : -change;
      this.cdr.markForCheck();
    }, 4000);
  }

  triggerAnalysis(query: string) {
    if (!query) return;
    this.currentQuery = query;
    this.isAnalyzing = true;
    this.showInsight = false;
    this.isFocused = false;
    if (this.aiInput) this.aiInput.nativeElement.value = query;

    if (query.includes('rebalance') || query.includes('global')) {
      this.analysisMode = 'Calculating Inter-Store Delta...';
      this.insightTheme = 'analysis';
      this.insightTitle = 'Network Rebalance Opportunity';
      this.insightText = 'Delhi (DEL-04) has excess stock of SKU-44. Moving 800 units to Mumbai (BOM-01) unlocks <strong>₹2.4L in margin</strong>.';
      this.insightAction = 'Execute Rebalance';
    } else if (query.includes('audit')) {
      this.analysisMode = 'Auditing Operational Latency...';
      this.insightTheme = 'forecast';
      this.insightTitle = 'Global Health Report';
      this.insightText = 'All 14 locations synchronized. Bangalore (BLR-02) showing optimal velocity. Audit successful.';
      this.insightAction = 'Audit All Stores';
    } else {
      this.analysisMode = 'Projecting Stock Velocity...';
      this.insightTheme = 'alert';
      this.insightTitle = 'Predicted Stock Gap';
      this.insightText = 'High demand in Bangalore (BLR-02) will deplete <strong>SKU-88</strong> by next Tuesday. Reorder recommended.';
      this.insightAction = 'Forecast Stock Gap';
    }

    setTimeout(() => {
      this.isAnalyzing = false;
      this.showInsight = true;
      this.cdr.markForCheck();
    }, 600); 
  }

  handleInsightAction() {
    switch (this.insightAction) {
      case 'Execute Rebalance': this.openWarehouseModal(); break;
      case 'Audit All Stores': this.openLiquidationModal(); break;
      case 'Forecast Stock Gap': this.openForecastModal(); break;
    }
  }

  focusSearch() {
    this.isFocused = true;
    this.showInsight = false;
    if (this.aiInput) this.aiInput.nativeElement.focus();
    this.cdr.markForCheck();
  }

  onSearchBlur() {
    // Add small delay to let mousedown on suggestions fire before dropdown is removed from DOM
    setTimeout(() => {
      this.isFocused = false;
      this.cdr.markForCheck();
    }, 200);
  }

  openWarehouseModal() { this.showWarehouseModal = true; this.cdr.markForCheck(); }
  closeWarehouseModal() { this.showWarehouseModal = false; this.cdr.markForCheck(); }
  openLiquidationModal() { this.showLiquidationModal = true; this.cdr.markForCheck(); }
  closeLiquidationModal() { this.showLiquidationModal = false; this.cdr.markForCheck(); }
  openForecastModal() { this.showForecastModal = true; this.cdr.markForCheck(); }
  closeForecastModal() { this.showForecastModal = false; this.cdr.markForCheck(); }
}
