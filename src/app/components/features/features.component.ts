import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingChartComponent } from './accounting-chart.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, AccountingChartComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="features">
      <!-- Narrative Process Line (Central Spine) -->
      <div class="process-line"></div>

      <!-- Row 1: Billing -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col">
          <div class="step-indicator">01</div>
          <div class="text-content">
            <h2><span style="color: var(--primary-color);">Billing</span> (POS)</h2>
            <h3>Lightning fast billing for In-Store and Online orders.</h3>
            <ul class="sophisticated-list">
              <li>Faster Billing, multi-GST support</li>
              <li>Customize offers & loyalty points</li>
              <li>AI-Auto reconcile payments</li>
              <li>Zero Training Required</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
            <div class="pos-terminal">
              <div class="pos-header">
                <span>ORDER #2045</span>
                <span>Just Now</span>
              </div>
              <div class="pos-items">
                <div class="pos-item"><span>Elite SKU-44</span><span>₹ 12,500</span></div>
                <div class="pos-item"><span>GST (18%)</span><span>₹ 2,250</span></div>
              </div>
              <div class="pos-total"><span>TOTAL</span><span>₹ 14,750</span></div>
              <div class="success-badge"><span>✓</span> PAID</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: Inventory -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col swap-desktop">
          <div class="step-indicator right-side">02</div>
          <div class="text-content">
            <h2>Real-time <span style="color: var(--primary-color);">Inventory</span></h2>
            <h3>Real-time visibility across your entire network.</h3>
            <ul class="sophisticated-list">
              <li>Track expiry, batch, and multidimensional SKUs</li>
              <li>MBQs and Auto-Indent suggestions</li>
              <li>1-click purchase order generation</li>
              <li>Audit-ready stock reconciliation</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
             <div class="inventory-tracker">
               <div class="inventory-header"><span>WAREHOUSE A</span><span>Live</span></div>
               <div class="stock-item">
                 <div class="stock-info"><span>Prime SKU-99</span><span>850 units</span></div>
                 <div class="stock-bar"><div class="stock-level" style="--target-width-num: 85"></div></div>
               </div>
               <div class="stock-item">
                 <div class="stock-info"><span>Alert SKU-14</span><span style="color:#f43f5e">15 units</span></div>
                 <div class="stock-bar"><div class="stock-level" style="--target-width-num: 15"></div></div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Row 3: Accounting -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col">
          <div class="step-indicator">03</div>
          <div class="text-content">
            <h2>Financial <span style="color: var(--primary-color);">Accounting</span></h2>
            <h3>Auto-Post journal entries. Save 10+ hours/week.</h3>
            <ul class="sophisticated-list">
              <li>Fully reconciled Daily Sales Reports</li>
              <li>Automated P&L and Balance Sheet</li>
              <li>GST compliance and auditor exports</li>
              <li>Real-time cashflow insights</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
            <div style="width: 100%; padding: 2rem;">
              <app-accounting-chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features { padding: 4rem 0; position: relative; }
    
    .process-line {
      position: absolute;
      top: 0; bottom: 0; left: 50%;
      width: 1px;
      background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.12), transparent);
      transform: translateX(-50%);
    }

    .feature-row { padding: 6rem 0; position: relative; z-index: 1; }
    
    .grid-2-col { position: relative; align-items: center; gap: 4rem; }

    .step-indicator {
      position: absolute;
      left: 50%; top: -2rem; transform: translateX(-50%);
      font-size: 8rem; font-weight: 900;
      color: rgba(99, 102, 241, 0.03);
      z-index: -1; pointer-events: none;
    }

    .sophisticated-list {
      list-style: none; padding: 0; margin-top: 2rem;
    }

    .sophisticated-list li {
      margin-bottom: 1rem; font-weight: 500; color: var(--text-medium);
      display: flex; align-items: center; gap: 0.8rem;
      &::before { content: ''; display: inline-block; width: 7px; height: 7px; background: var(--primary-color); border-radius: 2px; transform: rotate(45deg); flex-shrink: 0; opacity: 0.8; }
    }

    .glass-mockup {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-radius: 24px;
      padding: 2.5rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      will-change: backdrop-filter;
    }

    /* Terminal/POS Styles */
    .pos-terminal { font-family: var(--font-body); font-size: 0.9rem; will-change: transform; transition: transform 0.3s ease; }
    .pos-header, .pos-total { display: flex; justify-content: space-between; padding: 0.5rem 0; }
    .pos-header { border-bottom: 1px solid rgba(0,0,0,0.05); margin-bottom: 1rem; color: var(--text-light); }
    .pos-total { border-top: 1px solid rgba(0,0,0,0.05); margin-top: 1rem; font-weight: 900; font-size: 1.1rem; }
    .pos-item { display: flex; justify-content: space-between; margin-bottom: 0.4rem; }
    .success-badge { margin-top: 1rem; color: #10b981; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; }

    /* Inventory Visuals */
    .inventory-tracker { width: 100%; }
    .inventory-header { display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-weight: 800; color: var(--text-light); }
    .stock-item { margin-bottom: 1.2rem; }
    .stock-info { display: flex; justify-content: space-between; margin-bottom: 0.4rem; font-weight: 700; color: var(--text-dark); }
    .stock-bar { height: 10px; background: rgba(0,0,0,0.05); border-radius: 5px; overflow: hidden; }
    .stock-level { height: 100%; background: var(--primary-color); width: 100%; transform: scaleX(calc(var(--target-width-num) / 100)); transform-origin: left; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1); will-change: transform; }

    @media (max-width: 992px) {
      .process-line { display: none; }
      .swap-desktop { flex-direction: column-reverse; }
      .grid-2-col { gap: 2rem; }
      .step-indicator { font-size: 5rem; top: -1rem; left: 1rem; transform: none; }
    }

    @media (max-width: 480px) {
      .feature-row { padding: 4rem 0; }
      .text-content h2 { font-size: 1.85rem; }
      .glass-mockup { padding: 1.5rem; border-radius: 16px; }
      .step-indicator { font-size: 3.5rem; top: -0.5rem; opacity: 0.05; }
    }
  `]
})
export class FeaturesComponent { }
