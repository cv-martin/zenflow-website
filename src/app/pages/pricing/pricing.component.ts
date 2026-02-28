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
    <div class="container page-content">
      <!-- SECTION 1: Centered Header (Same Hero Pattern) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">PRICING</div>
        <h1 class="gradient-text"><span class="text-highlight-pink">Transparent Pricing</span> Built<br>for Modern Retail Scale.</h1>
        <p>Simple, usage-based plans that grow with your business. No hidden fees, no complex contracts.</p>
        
        <div class="trust-badge-mini glass-card">
          <span>Trusted by 500+ Retailers Across India</span>
        </div>
      </section>

      <!-- SECTION 2: 3 Pricing Tiers -->
      <section class="pricing-tiers">
        <div class="tiers-grid">
          <!-- Tier 1: Free Trial -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Free Trial</h3>
              <div class="price">₹ 0<span>/14 days</span></div>
              <p>Explore all core features with no commitment.</p>
            </div>
            <a routerLink="/contact" [queryParams]="{ plan: 'free-trial' }" class="btn-tier">Start Free Trial</a>
            <ul class="tier-features">
              <li>Up to 2 Users</li>
              <li>Core Billing & Inventory</li>
              <li>Basic GST Reporting</li>
              <li>Standard Support</li>
            </ul>
          </div>

          <!-- Tier 2: Transaction-Based Pricing (Highlighted) -->
          <div class="tier-card bento-card-inner featured">
            <div class="featured-badge">MOST POPULAR</div>
            <div class="tier-header">
              <h3>Growth</h3>
              <div class="price">₹ 1.5<span>/trans</span></div>
              <p>Transparent transaction-based pricing. Pay as you scale.</p>
            </div>
            <a routerLink="/contact" [queryParams]="{ plan: 'pro' }" class="btn-tier primary">Get Started</a>
            <ul class="tier-features">
              <li>Everything in Free Trial</li>
              <li>Unlimited Users</li>
              <li>Full Accounting Suite</li>
              <li>Multi-Store Sync</li>
              <li>Omnichannel Fulfillment</li>
              <li>Priority 24/7 Support</li>
            </ul>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Enterprise</h3>
              <div class="price">Custom</div>
              <p>Bespoke solutions with volume discounts for large networks.</p>
            </div>
            <a routerLink="/contact" [queryParams]="{ plan: 'enterprise' }" class="btn-tier">Contact Sales</a>
            <ul class="tier-features">
              <li>Everything in Pro</li>
              <li>Dedicated Success Manager</li>
              <li>Custom API Access</li>
              <li>White-label Capabilities</li>
              <li>SLA-backed Uptime</li>
              <li>Volume Discounts</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3: FAQ -->
      <section class="faq-section">
        <div class="faq-container glass-card">
          <h2 class="text-center">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h4>Is onboarding free?</h4>
              <p>Yes, we provide assisted onboarding for all Growth and Enterprise plans to ensure your team is ready from day one.</p>
            </div>
            <div class="faq-item">
              <h4>Can I change plans later?</h4>
              <p>Absolutely. You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div class="faq-item">
              <h4>What is usage-based pricing?</h4>
              <p>For certain modules, we offer pricing based on your transaction volume, ensuring you only pay for the value you receive.</p>
            </div>
            <div class="faq-item">
              <h4>Do you support hardware?</h4>
              <p>Zenflow is hardware-agnostic. We work with standard POS printers, scanners, and terminals you already own.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="STILL HAVE QUESTIONS?"
      headline="Build Your Custom <br>Retail OS Today."
      subtext="See how Zenflow transforms billing, inventory, and accounting into one seamless retail system."
      buttonText="Talk to an Expert →">
    </app-final-cta>
  `,
  styles: [`
    /* Pricing Page Specifics */
    .hero-section {
      text-align: center;
      margin-bottom: 2rem;
      padding: 2rem 0 10rem;
      
      h1 { 
        font-size: 2.8rem; 
        margin-bottom: 0.75rem;
        letter-spacing: -0.04em;
      }
      p { 
        font-size: 1.1rem; 
        max-width: 600px; 
        margin: 0 auto 1.25rem; 
        color: #475569;
      }
    }

    .pricing-tiers { padding: 0 0 4rem; position: relative; z-index: 1; background: transparent; }
    .tiers-grid { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 2.5rem; 
      max-width: 1050px; 
      margin: 0 auto; 
      padding: 0 1rem; 
      align-items: stretch;
    }

    .tier-card {
      display: flex; flex-direction: column;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 0, 0, 0.04) !important;
      border-radius: 24px;
      padding: 2rem 1.5rem;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
      position: relative;
      max-width: 330px;
      margin: 0 auto;
      width: 100%;
      will-change: transform;
      
      &.featured {
        background: rgba(255, 255, 255, 0.8);
        border-color: var(--primary-color) !important;
        transform: scale(1.02);
        z-index: 2;
        box-shadow: 0 30px 70px -15px rgba(99, 102, 241, 0.12);
        
        &:hover { transform: scale(1.02) translateY(-8px); opacity: 1; }
      }

      &:hover {
        background: rgba(255, 255, 255, 0.95);
        transform: translateY(-6px);
        box-shadow: 0 25px 50px -10px rgba(15, 23, 42, 0.1);
        border-color: var(--primary-color) !important;
      }
    }

    .featured-badge {
      position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%);
      background: var(--primary-color); color: white; padding: 0.45rem 1.1rem;
      border-radius: 100px; font-size: 0.65rem; font-weight: 900; letter-spacing: 0.08em;
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
    }

    .tier-header {
      text-align: center; margin-bottom: 1.25rem;
      h3 { font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 0.5rem; letter-spacing: -0.01em; }
      .price { font-size: 2.8rem; font-weight: 950; color: #0f172a; margin-bottom: 0.2rem; letter-spacing: -0.05em; }
      .price span { font-size: 0.85rem; color: #64748b; font-weight: 600; }
      p { font-size: 0.85rem; color: #475569; line-height: 1.3; font-weight: 500; height: 2.6rem; display: flex; align-items: center; justify-content: center; }
    }

    .btn-tier {
      display: block; padding: 0.9rem; text-align: center; border: 1.5px solid rgba(0,0,0,0.06);
      border-radius: 12px; font-weight: 800; text-decoration: none; color: #0f172a;
      transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease, transform 0.3s ease; font-size: 0.9rem; margin-bottom: 1.5rem;
      will-change: transform;
      &:hover { border-color: var(--primary-color); color: var(--primary-color); background: rgba(99, 102, 241, 0.04); }
      &.primary {
        background: #0f172a; color: white; border-color: #0f172a;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
        &:hover { background: var(--primary-color); border-color: var(--primary-color); color: white; transform: translateY(-2px); }
      }
    }

    .tier-features {
      list-style: none; padding: 0; margin: 0; flex: 1;
      li {
        padding: 0.5rem 0; font-size: 0.85rem; color: #475569; font-weight: 500;
        display: flex; align-items: center; gap: 0.6rem;
        &::before { 
          content: '✓'; color: var(--primary-color); font-weight: 950;
          width: 16px; height: 16px; background: rgba(99, 102, 241, 0.1);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 0.55rem; flex-shrink: 0;
        }
      }
    }

    .faq-section { padding: 4rem 0; background: transparent; position: relative; }
    .faq-container { 
      max-width: 850px; margin: 0 auto; 
      padding: 3.5rem !important;
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 32px;
      will-change: backdrop-filter;
    }
    .faq-container h2 { font-size: 2.5rem; font-weight: 950; margin-bottom: 3rem; color: #0f172a; }
    .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
    .faq-item h4 { font-size: 1.1rem; font-weight: 900; color: #0f172a; margin-bottom: 0.6rem; }
    .faq-item p { font-size: 0.95rem; color: #475569; line-height: 1.5; }

    .trust-badge-mini {
      display: inline-block; padding: 0.45rem 1.1rem !important; border-radius: 100px !important;
      font-size: 0.75rem; font-weight: 800; color: var(--primary-color);
      background: rgba(99, 102, 241, 0.1) !important;
      border: 1px solid rgba(99, 102, 241, 0.12) !important;
    }

    @media (max-width: 1200px) {
      .page-content { padding-top: 6rem; }
      .tiers-grid { gap: 1.5rem; padding: 0 0.5rem; }
      .tier-header .price { font-size: 2.5rem; }
    }

    @media (max-width: 1024px) {
      .tiers-grid { grid-template-columns: repeat(2, 1fr); max-width: 700px; }
      .tier-card { max-width: 310px; }
    }

    @media (max-width: 992px) {
      .tiers-grid { grid-template-columns: 1fr; max-width: 360px; gap: 2rem; }
      .faq-grid { grid-template-columns: 1fr; gap: 2rem; }
    }

    @media (max-width: 640px) {
      .page-content { padding-top: 5.5rem; }
      .hero-section h1 { font-size: 2rem; }
      .faq-container h2 { font-size: 1.8rem; }
    }

  `]
})
export class PricingComponent { }
