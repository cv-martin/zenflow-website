import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="privacy-section">
      <!-- Identity Layer: Ghost Dots -->
      <div class="ghost-grid"></div>
      
      <div class="container relative z-10">
        <div class="privacy-layout">
          <!-- Left: Brand Trust Statement -->
          <div class="trust-statement">
            <div class="trust-eyebrow">SECURITY & TRUST</div>
            <h2 class="trust-headline">Enterprise-Grade Data Privacy & Control.</h2>
            <p class="trust-subtext">
              Your financial data, customer records, and operational flows are protected 
              by a layered, auditable security architecture that scales with your growth.
            </p>
            <div class="trust-badges">
              <div class="badge-item">
                <svg viewBox="0 0 24 24" fill="none" class="badge-icon">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="var(--primary-color)" fill-opacity="0.1"/>
                  <path d="M7 13L10 16L17 9" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Bank-Level Encryption</span>
              </div>
            </div>
          </div>

          <!-- Right: Pillar Grid -->
          <div class="pillars-container">
            <div class="pillars-grid">
              <!-- Pillar 1 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">SOC 2 Type II Ready</h3>
                </div>
                <p class="pillar-desc">Independent controls aligned with global enterprise compliance standards.</p>
              </div>

              <!-- Pillar 2 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21V19C17 17.8954 16.1046 17 15 17H9C7.89543 17 7 17.8954 7 19V21M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">RBAC Access</h3>
                </div>
                <p class="pillar-desc">Granular permissioning across stores, roles, and complex departments.</p>
              </div>

              <!-- Pillar 3 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-width="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke-width="2"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">E2E Encryption</h3>
                </div>
                <p class="pillar-desc">All financial and transactional data encrypted at rest and in transit.</p>
              </div>

              <!-- Pillar 4 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 3V21M3.6 9H20.4M3.6 15H20.4" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">Data Residency</h3>
                </div>
                <p class="pillar-desc">Hosted with regional compliance alignment and full failure redundancy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .privacy-section {
      padding: 10rem 0;
      position: relative;
      /* Restored background for section separation */
      background: radial-gradient(circle at center, hsla(230, 100%, 98%, 0.85) 0%, hsla(260, 100%, 98%, 0.85) 100%);
      overflow: hidden;
    }

    /* Re-added local grid for extra detail in light sections */
    .ghost-grid {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(var(--primary-color) 1.2px, transparent 1.2px);
      background-size: 80px 80px; opacity: 0.06; pointer-events: none;
    }

    .privacy-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: center;
    }

    .trust-statement { max-width: 520px; }

    .trust-eyebrow {
      font-size: 0.85rem; font-weight: 800; letter-spacing: 0.2em;
      color: var(--primary-color); margin-bottom: 1.5rem;
    }

    .trust-headline {
      font-size: 3.2rem; font-weight: 950; color: #0f172a;
      line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.04em;
    }

    .trust-subtext {
      font-size: 1.25rem; color: #475569; line-height: 1.6;
      margin-bottom: 3rem; font-weight: 500;
    }

    .badge-item {
      display: inline-flex; align-items: center; gap: 0.75rem;
      padding: 0.7rem 1.4rem; background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 99px; border: 1px solid rgba(255,255,255,0.8);
      font-size: 0.95rem; font-weight: 800; color: #1e293b;
      box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    }
    .badge-icon { width: 20px; height: 20px; }

    .pillars-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
    }

    /* Zenflow Pillars: Premium Glass Cards */
    .pillar-glass-card {
      background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 24px;
      padding: 2rem; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }

    .pillar-glass-card:hover {
      background: rgba(255, 255, 255, 0.8); transform: translateY(-8px);
      box-shadow: 0 30px 60px -10px rgba(15, 23, 42, 0.1);
      border-color: var(--primary-color);
    }

    .pillar-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }

    .pillar-icon-box {
      width: 44px; height: 44px; background: rgba(99, 102, 241, 0.1);
      border-radius: 12px; display: flex; align-items: center; justify-content: center;
      color: var(--primary-color); flex-shrink: 0;
      transition: all 0.3s ease;
    }
    .pillar-icon-box svg { width: 22px; height: 22px; }

    .pillar-glass-card:hover .pillar-icon-box {
      background: var(--primary-color);
      color: white;
      transform: scale(1.1);
    }

    .pillar-title { font-weight: 900; color: #0f172a; font-size: 1.1rem; margin: 0; letter-spacing: -0.01em; }
    .pillar-desc { font-size: 1rem; color: #475569; line-height: 1.5; font-weight: 500; margin: 0; opacity: 0.8; }

    @media (max-width: 1024px) {
      .privacy-layout { grid-template-columns: 1fr; gap: 4rem; text-align: center; justify-items: center; }
      .trust-headline { font-size: 2.75rem; }
      .trust-subtext { margin: 0 auto 3rem; }
    }

    @media (max-width: 640px) {
      .pillars-grid { grid-template-columns: 1fr; }
      .privacy-section { padding: 6rem 0; }
    }

    @media (max-width: 480px) {
      .privacy-section { padding: 4rem 0; }
      .trust-headline { font-size: 1.85rem; }
      .trust-subtext { font-size: 1rem; margin-bottom: 2.5rem; }
      .pillar-glass-card { padding: 1.75rem; border-radius: 20px; }
      .pillar-title { font-size: 1.05rem; }
      .pillar-desc { font-size: 0.95rem; }
      .pillar-icon-box { width: 38px; height: 38px; border-radius: 10px; }
      .pillar-icon-box svg { width: 18px; height: 18px; }
    }
  `]
})
export class PrivacySectionComponent { }
