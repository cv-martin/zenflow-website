import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-power-features',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="power-section">
      <div class="container wide-container">
        <div class="section-header text-center mb-5" appScrollReveal>
          <h2 style="color:white; margin-bottom:1rem;">Powering the future of Retail</h2>
          <p style="color:rgba(255,255,255,0.7);">See sales, inventory, and performance in real time—across every location and channel.</p>
        </div>
        
        <div class="grid feature-grid">
          <div class="power-card stagger-1" appScrollReveal>
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              PoS Operations
            </h3>
            <p>Hybrid solution that works offline and instantly sync online for uninterrupted operations.</p>
          </div>
          
          <div class="power-card stagger-2" appScrollReveal>
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Automation
            </h3>
            <p>Automatically generate POs, indents, store-wise pick lists, and store transfers.</p>
          </div>
          
          <div class="power-card stagger-3" appScrollReveal>
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Access Control
            </h3>
            <p>Ensure users only have access to the info and tools needed, and absolutely nothing else.</p>
          </div>
          
          <div class="power-card stagger-4" appScrollReveal>
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Integrations
            </h3>
            <p>Integrate with any third party applications & Hardware via secure enterprise APIs.</p>
          </div>

          <div class="power-card stagger-5" appScrollReveal>
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              Analytics
            </h3>
            <p>Live tracking of sales velocity, store-wise performance, and stock health for data-backed growth.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .power-section {
      padding: 10rem 0;
      /* Restored background but with high-end translucency to show scan line */
      background: radial-gradient(circle at 50% 0%, rgba(49, 46, 129, 0.9) 0%, rgba(30, 27, 75, 0.9) 60%, rgba(15, 23, 42, 0.9) 100%);
      color: white;
      position: relative;
      overflow: hidden;
      
      &::before {
         content: '';
         position: absolute;
         top: 0; left: 0; width: 100%; height: 100%;
         /* Re-added section grid for extra depth in dark sections */
         background-image: 
           linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
           linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
         background-size: 40px 40px;
         mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
         pointer-events: none;
      }
    }
    
    .wide-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 5vw, 2.5rem);
    }

    .mb-5 { margin-bottom: 4rem; }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
      gap: 1.5rem;
    }
    
    .power-card {
      padding: clamp(2rem, 5vw, 3rem) clamp(1.25rem, 3vw, 2rem);
      border-radius: 24px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;

      h3 { 
        font-size: clamp(1.1rem, 2.5vw, 1.35rem); 
        margin-bottom: 1rem; 
        color: white; 
        display: flex; 
        align-items: center; 
        gap: 0.75rem; 
        font-weight: 900;
        letter-spacing: -0.02em;
      }
      
      p { 
        color: rgba(255, 255, 255, 0.5); 
        margin: 0; 
        font-size: clamp(0.9rem, 2vw, 1rem); 
        line-height: 1.6; 
        font-weight: 500; 
      }
      
      --card-glow: 255, 255, 255;
      
      &:nth-child(1) { --card-glow: 56, 189, 248; }
      &:nth-child(2) { --card-glow: 168, 85, 247; }
      &:nth-child(3) { --card-glow: 236, 72, 153; }
      &:nth-child(4) { --card-glow: 45, 212, 191; }
      &:nth-child(5) { --card-glow: 245, 158, 11; }

      border-top: 1px solid rgba(var(--card-glow), 0.3);
      
      h3 { 
         text-shadow: 0 0 20px rgba(var(--card-glow), 0.2);
         transition: all 0.3s ease;
      }

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.05); 
        border-color: rgba(var(--card-glow), 0.6);
        box-shadow: 
          0 40px 80px -20px rgba(0,0,0,0.4),
          0 0 30px -5px rgba(var(--card-glow), 0.3); 
          
        h3 { color: rgb(var(--card-glow)); }

        .icon { 
          opacity: 1; 
          transform: scale(1.1) rotate(5deg); 
          color: rgb(var(--card-glow));
          filter: drop-shadow(0 0 8px rgba(var(--card-glow), 0.6));
        }
      }
    }
    
    .icon {
      width: 28px; 
      height: 28px;
      min-width: 28px;
      color: rgba(var(--card-glow), 0.8); 
      filter: drop-shadow(0 0 5px rgba(var(--card-glow), 0.2));
      transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .power-section { padding: 6rem 0; }
      .section-header { 
        padding: 0 1.5rem; 
        h2 { font-size: clamp(1.8rem, 8vw, 2.2rem); letter-spacing: -0.04em; }
        p { font-size: 1.05rem; line-height: 1.5; }
      }
      .feature-grid { grid-template-columns: 1fr; gap: 1.25rem; padding: 0 1.25rem; }
      .power-card { 
        padding: 2.2rem 1.75rem; 
        border-radius: 20px;
        transform: translate3d(0, 0, 0); /* Force GPU */
        will-change: transform, opacity;
      }
    }

    @media (max-width: 480px) {
      .power-section { padding: 4rem 0; }
      .section-header {
        margin-bottom: 2.5rem;
        h2 { font-size: 1.75rem; }
        p { font-size: 0.95rem; }
      }
      .power-card {
        padding: 1.75rem 1.5rem;
        border-radius: 18px;
        h3 { font-size: 1.15rem; }
        p { font-size: 0.9rem; }
      }
      .icon { width: 24px; height: 24px; min-width: 24px; }
    }
  `]
})
export class PowerFeaturesComponent { }
