import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pricing-page-wrapper">
      <div class="container page-content">
        <!-- SECTION 1: Hero Header -->
        <section class="hero-section reveal-active">
          <div class="eyebrow" style="margin-bottom: 1rem;">PREMIUM RETAIL OS PRICING</div>
          <h1 class="hero-title">
            <span class="text-highlight-pink">Transparent Pricing</span> Built<br />for Modern Retail Scale.
          </h1>
          <p class="hero-subtitle">
            Simple, usage-based plans that grow with your business. No hidden fees, no complex contracts.
          </p>
          
          <div class="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" class="lock-icon"><path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V12C20 10.8954 19.1046 10 18 10H6C4.89543 10 4 10.8954 4 12V19C4 20.1046 4.89543 21 6 21ZM16 10V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Trusted by 500+ Retailers Across India</span>
          </div>
        </section>

        <!-- SECTION 2: Pricing Tiers -->
        <section class="pricing-tiers reveal-active stagger-1">
          <div class="tiers-grid">
            
            <!-- Tier 1: Free Trial -->
            <div class="tier-card glass-panel">
              <div class="tier-header">
                <h3>Free Trial</h3>
                <div class="price">Free</div>
                <p>Explore all core features with no commitment.</p>
              </div>
              <a routerLink="/contact" [queryParams]="{ plan: 'free-trial' }" class="btn-tier secondary">Start Free Trial</a>
              <ul class="tier-features">
                <li><span class="check"></span> Up to 2 Users</li>
                <li><span class="check"></span> Core Billing & Inventory</li>
                <li><span class="check"></span> Basic GST Reporting</li>
                <li><span class="check"></span> Standard Support</li>
              </ul>
            </div>

            <!-- Tier 2: Transaction-Based Pricing (Highlighted) -->
            <div class="tier-card featured glow-panel">
              <div class="featured-badge">MOST POPULAR</div>
              <div class="tier-header">
                <h3>Growth</h3>
                <div class="price">
                  <span class="currency">₹</span>1<span class="unit">/order</span>
                </div>
                <p>Transparent transaction-based pricing. Pay as you scale.</p>
              </div>
              <a routerLink="/contact" [queryParams]="{ plan: 'pro' }" class="btn-tier primary">Get Started Now</a>
              <ul class="tier-features">
                <li><span class="check"></span> Everything in Free Trial</li>
                <li><span class="check"></span> Unlimited Users</li>
                <li><span class="check"></span> Full Accounting Suite</li>
                <li><span class="check"></span> Multi-Store Sync</li>
                <li><span class="check"></span> Omnichannel Fulfillment</li>
                <li><span class="check"></span> Priority 24/7 Support</li>
              </ul>
            </div>

            <!-- Tier 3: Enterprise -->
            <div class="tier-card glass-panel enterprise-card">
              <div class="tier-header">
                <h3>Enterprise</h3>
                <div class="price">Custom</div>
                <p>Bespoke solutions with volume discounts.</p>
              </div>
              
              <div class="enterprise-form-wrapper">
                <div class="form-group-mini">
                  <input type="text" placeholder="Full Name" class="mini-input">
                  <input type="tel" placeholder="Phone Number" class="mini-input">
                </div>
                <div class="form-group-mini">
                  <input type="text" placeholder="Company Name" class="mini-input">
                  <input type="email" placeholder="Work Email" class="mini-input">
                </div>
                <button class="btn-tier outline">Request Quote</button>
                <div class="form-note">OTP verification will be added later.</div>
              </div>
              
              <ul class="tier-features mt-auto">
                <li><span class="check"></span> Everything in Pro</li>
                <li><span class="check"></span> Dedicated Success Manager</li>
                <li><span class="check"></span> White-label Capabilities</li>
                <li><span class="check"></span> SLA-backed Uptime</li>
              </ul>
            </div>

          </div>
        </section>

        <!-- SECTION 3: FAQ -->
        <section class="faq-section reveal-active stagger-2">
          <div class="faq-container">
            <h2 class="text-center faq-title">Frequently Asked Questions</h2>
            <div class="faq-grid">
              <div class="faq-item glass-panel">
                <h4>Is onboarding free?</h4>
                <p>Yes, we provide assisted onboarding for all Growth and Enterprise plans to ensure your team is ready from day one.</p>
              </div>
              <div class="faq-item glass-panel">
                <h4>Can I change plans later?</h4>
                <p>Absolutely. You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div class="faq-item glass-panel">
                <h4>What is usage-based pricing?</h4>
                <p>For certain modules, we offer pricing based on your transaction volume, ensuring you only pay for the value you receive.</p>
              </div>
              <div class="faq-item glass-panel">
                <h4>Do you support hardware?</h4>
                <p>Zenflow is hardware-agnostic. We work with standard POS printers, scanners, and terminals you already own.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- Conversion CTA -->
      <app-final-cta 
        eyebrow="READY TO SCALE?"
        headline="Build Your Custom<br>Retail OS Today."
        subtext="Join 500+ retailers transforming their billing, inventory, and accounting into one seamless system."
        buttonText="Initialize Access →">
      </app-final-cta>
    </div>
  `,
  styles: [`
    /* Modern Pricing Page Styles */
    :host {
      display: block;
      width: 100%;
    }

    .pricing-page-wrapper {
      position: relative;
      overflow: hidden;
    }

    /* Fixed top spacing to avoid header overlap */
    .page-content {
      padding-top: 14rem !important; /* Adjusted to prevent header overlap */
      padding-bottom: 6rem;
      position: relative;
      z-index: 2;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      
      .eyebrow {
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: var(--primary-color);
      }

      .hero-title {
        font-size: clamp(2.8rem, 6vw, 4.2rem);
        line-height: 1.1;
        letter-spacing: -0.04em;
        font-weight: 950;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
      }
      
      .hero-subtitle {
        font-size: clamp(1.1rem, 2vw, 1.25rem);
        color: var(--text-medium);
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto 2.5rem;
      }
    }

    .trust-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.2rem;
      background: rgba(99, 102, 241, 0.05);
      border: 1px solid rgba(99, 102, 241, 0.15);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--primary-color);
      
      .lock-icon {
        width: 16px;
        height: 16px;
      }
    }

    .pricing-tiers {
      position: relative;
      margin-bottom: 8rem;
    }

    .tiers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      align-items: stretch; /* Aligns items across the grid */
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 24px;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
    }

    .tier-card {
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 520px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.15);
        background: rgba(255, 255, 255, 0.9);
      }
    }

    .glow-panel {
      background: rgba(255, 255, 255, 0.95);
      border: 2px solid var(--primary-color);
      border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.25);
      transform: scale(1.05);
      position: relative;
      z-index: 10;
      
      &:hover {
        transform: scale(1.05) translateY(-8px);
      }
      
      /* Subtle inner glow */
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 22px;
        background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
        pointer-events: none;
      }
    }

    .featured-badge {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
      color: white;
      padding: 0.4rem 1.25rem;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
      white-space: nowrap;
    }

    .tier-header {
      margin-bottom: 2rem;
      text-align: center;
      
      h3 {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 0.5rem;
      }
      
      .price {
        font-size: 3.5rem;
        font-weight: 900;
        color: var(--text-dark);
        line-height: 1;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .currency {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-right: 0.1rem;
        }
        
        .unit {
          font-size: 1rem;
          color: var(--text-light);
          font-weight: 600;
          margin-left: 0.25rem;
          position: relative;
          top: 0.5rem;
        }

        span {
          font-size: 1rem;
          color: var(--text-light);
          font-weight: 600;
          margin-left: 0.25rem;
        }
      }
      
      p {
        font-size: 0.95rem;
        color: var(--text-medium);
        line-height: 1.5;
        margin: 0;
        min-height: 2.85rem;
      }
    }

    .btn-tier {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      border-radius: 12px;
      font-size: 1.05rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease;
      margin-bottom: 2.5rem;
      cursor: pointer;
      border: none;
      outline: none;
      
      &.primary {
        background: var(--text-dark);
        color: white;
        box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
        
        &:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
        }
      }
      
      &.secondary {
        background: rgba(99, 102, 241, 0.08);
        color: var(--primary-dark);
        border: 1px solid rgba(99, 102, 241, 0.15);
        
        &:hover {
          background: rgba(99, 102, 241, 0.15);
          transform: translateY(-2px);
        }
      }
      
      &.outline {
        background: transparent;
        border: 2px solid rgba(15, 23, 42, 0.1);
        color: var(--text-dark);
        
        &:hover {
          border-color: var(--text-dark);
          background: rgba(15, 23, 42, 0.02);
          transform: translateY(-2px);
        }
      }
    }

    .enterprise-card {
      padding-bottom: 2rem;
      
      .btn-tier {
        margin-bottom: 1.5rem;
      }
    }

    .enterprise-form-wrapper {
      margin-bottom: 1.5rem;
      
      .form-group-mini {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }
      
      .mini-input {
        width: 50%;
        padding: 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(255, 255, 255, 0.8);
        font-size: 0.85rem;
        transition: all 0.2s ease;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
          background: white;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      }

      .form-note {
        font-size: 0.75rem;
        color: var(--text-light);
        text-align: center;
        margin-top: -0.5rem;
      }
    }

    .tier-features {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      &.mt-auto {
        margin-top: auto;
      }
      
      li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.95rem;
        color: var(--text-medium);
        line-height: 1.4;
        
        .check {
          position: relative;
          top: 0.1rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &::after {
            content: '';
            width: 5px;
            height: 9px;
            border: solid #10b981;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg) translate(-1px, -1px);
          }
        }
      }
    }

    .faq-section {
      max-width: 1000px;
      margin: 0 auto;
    }

    .faq-title {
      font-size: 2.5rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      margin-bottom: 3rem;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .faq-item {
      padding: 2.5rem;
      
      h4 {
        font-size: 1.15rem;
        font-weight: 800;
        margin-bottom: 0.75rem;
        color: var(--text-dark);
      }
      
      p {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-medium);
        margin: 0;
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.9);
      }
    }

    /* Text utility */
    .text-highlight-pink {
      background: linear-gradient(135deg, #7C3AED 0%, #DB2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }

    /* Responsive Design */
    @media (max-width: 1100px) {
      .tiers-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        gap: 3rem;
      }
      
      .glow-panel {
        transform: scale(1);
        
        &:hover {
          transform: scale(1.02) translateY(-4px);
        }
      }
      
      .tier-card {
        min-height: auto;
      }
      
      .faq-grid {
        grid-template-columns: 1fr;
      }
      
      .page-content {
        padding-top: 10rem !important;
      }
    }
    
    @media (max-width: 640px) {
      .page-content {
        padding-top: 8rem !important;
      }
      
      .hero-section {
        .hero-title {
          font-size: 2.5rem;
        }
      }
      
      .tier-card {
        padding: 2rem 1.5rem;
      }
      
      .tier-header .price {
        font-size: 3rem;
      }

      .faq-item {
        padding: 1.5rem;
      }
    }
  `]
})
export class PricingComponent { }
