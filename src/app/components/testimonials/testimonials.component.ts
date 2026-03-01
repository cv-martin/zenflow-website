import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="trust-section">
      <div class="container">
        <!-- Compact Header -->
        <div class="section-header" appScrollReveal>
          <h2>Why our customers choose Zenflow</h2>
          <p class="subtitle">Reliability engineered for the 2026 enterprise scale.</p>
        </div>

        <div class="grid grid-3">
          <!-- Card 1: Support -->
          <div class="trust-card stagger-1" appScrollReveal>
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h4>World Class Support</h4>
              <p>Direct line to retail experts. No chatbots, just solutions.</p>
            </div>
          </div>

          <!-- Card 2: Pricing -->
          <div class="trust-card stagger-2" appScrollReveal>
             <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <h4>Transparent Pricing</h4>
              <p>Pay only for what you use. Scale your retail operations instantly.</p>
            </div>
          </div>

          <!-- Card 3: Security -->
          <div class="trust-card stagger-3" appScrollReveal>
             <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h4>SOC2 Type II Ready</h4>
              <p>Bank-grade AES-256 encryption with audit trails built-in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trust-section { 
      padding: 4rem 0 0; /* Removing bottom padding to flow into footer */
      background: #0f172a; 
      color: white;
      position: relative;
      /* Smooth transition to footer */
      background: linear-gradient(180deg, #0f172a 0%, #050b14 100%);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    h2 { 
      margin-bottom: 0.5rem; 
      font-size: 1.75rem; 
      color: white;
    }
    
    .subtitle {
      color: #64748b; /* Softer text */
      font-size: 1rem;
    }
    
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      padding-bottom: 4rem; /* Bottom spacing moved here */
    }
 
    .trust-card { 
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;
      padding: 1.5rem; 
      border-radius: 16px; /* Slightly rounder */
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.01); /* Barely there */
      border: 1px solid rgba(255, 255, 255, 0.03);
 
      @media (hover: hover) {
        &:hover {
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.2); /* Subtle indigo border on hover */
        }
        &:hover .icon-wrap {
          background: rgba(99, 102, 241, 0.2);
          color: white;
        }
      }
    }
 
    h4 { 
      margin: 0 0 0.5rem; 
      color: white;
      font-size: 1.1rem;
      font-weight: 500; /* Less heavy */
      letter-spacing: -0.01em;
    }
 
    p { 
      color: #64748b; 
      font-size: 0.95rem; /* Larger for readability */
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .grid-3 { grid-template-columns: 1fr; }
      .trust-section { padding: 3rem 0 0; }
      .section-header { margin-bottom: 2rem; }
      h2 { font-size: 1.5rem; }
    }

    @media (max-width: 480px) {
      .trust-card { padding: 1.25rem; }
      h4 { font-size: 1rem; }
      p { font-size: 0.9rem; }
    }
  `]
})
export class TestimonialsComponent { }
