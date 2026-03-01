import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section class="final-cta">
      <div class="container">
        <div class="cta-card glass-card" appScrollReveal>
          <div class="cta-content">
            <span class="eyebrow" *ngIf="eyebrow">{{ eyebrow }}</span>
            <h2 class="cta-headline" [innerHTML]="headline"></h2>
            <p class="cta-subtext">{{ subtext }}</p>
            
            <div class="cta-actions">
              <a routerLink="/contact" class="btn-primary">{{ buttonText }}</a>
              <a href="#" class="btn-secondary">Schedule a Live Demo</a>
            </div>
          </div>
          
          <div class="cta-visual">
            <div class="pulse-ring pr-1"></div>
            <div class="pulse-ring pr-2"></div>
            <div class="pulse-ring pr-3"></div>
            <div class="logo-circle">
              <img src="/logo/logo.png" alt="Zenflow" class="logo-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .final-cta {
      padding: 6rem 0 10rem;
      background: transparent;
    }

    .cta-card {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      border-radius: 40px;
      padding: 6rem;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      overflow: hidden;
      color: white;
      box-shadow: 0 40px 100px rgba(79, 70, 229, 0.2);
    }

    .cta-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
      opacity: 0.1;
      pointer-events: none;
    }

    .eyebrow {
      display: block;
      font-size: 0.9rem;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

    .cta-headline {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.04em;
      br { display: block; }
      @media (max-width: 768px) {
        br { display: none; }
      }
    }

    .cta-subtext {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.5;
      margin-bottom: 3.5rem;
      max-width: 500px;
    }

    .cta-actions {
      display: flex;
      gap: 1.5rem;
    }

    .btn-primary {
      background: #ffffff;
      color: #4f46e5;
      padding: 1.2rem 2.5rem;
      border-radius: 14px;
      font-weight: 800;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (hover: hover) {
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      }
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      padding: 1.2rem 2.5rem;
      border-radius: 14px;
      font-weight: 800;
      text-decoration: none;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s;
    }

    @media (hover: hover) {
      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    /* Pulse Visual */
    .cta-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .logo-circle {
      width: 140px;
      height: 140px;
      background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
      border-radius: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 
        0 20px 50px rgba(0, 0, 0, 0.2), 
        0 0 80px rgba(139, 92, 246, 0.4),
        inset 0 2px 2px rgba(255, 255, 255, 1);
      z-index: 2;
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: rotate(-3deg);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .cta-visual:hover .logo-circle {
      transform: rotate(0deg) scale(1.05) translateY(-10px);
      box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.25), 
        0 0 100px rgba(139, 92, 246, 0.6),
        inset 0 2px 2px rgba(255, 255, 255, 1);
    }

    .logo-icon {
      width: 70%;
      height: 70%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 10px 15px rgba(139, 92, 246, 0.2));
    }

    .pulse-ring {
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      animation: pulse-ring-anim 4s infinite linear;
    }

    .pr-1 { width: 180px; height: 180px; animation-delay: 0s; }
    .pr-2 { width: 260px; height: 260px; animation-delay: 1s; }
    .pr-3 { width: 340px; height: 340px; animation-delay: 2s; }

    @keyframes pulse-ring-anim {
      from { transform: scale(0.8); opacity: 0.8; }
      to { transform: scale(1.5); opacity: 0; }
    }

    @media (max-width: 1200px) {
      .final-cta { padding: 4rem 0 6rem; }
      .cta-card { padding: 4rem; grid-template-columns: 1fr; text-align: center; gap: 3rem; }
      .cta-headline { font-size: 3rem; }
      .cta-subtext { max-width: 100%; margin: 0 auto 3rem; font-size: 1.25rem; }
      .cta-actions { justify-content: center; }
      .cta-visual { margin-top: 1rem; }
    }

    @media (max-width: 640px) {
      .final-cta { padding: 2rem 0 4rem; }
      .cta-card { border-radius: 30px; padding: 3rem 1.5rem; }
      .cta-headline { font-size: 2.2rem; margin-bottom: 1.5rem; }
      .cta-subtext { font-size: 1.1rem; margin-bottom: 2.5rem; }
      .cta-actions { flex-direction: column; width: 100%; gap: 1rem; }
      .btn-primary, .btn-secondary { width: 100%; text-align: center; padding: 1rem 1.5rem; font-size: 1rem; }
      .logo-circle { width: 100px; height: 100px; border-radius: 24px; }
      .pr-1 { width: 140px; height: 140px; }
      .pr-2 { width: 190px; height: 190px; }
      .pr-3 { width: 240px; height: 240px; }
    }

    @media (max-width: 480px) {
      .final-cta { padding: 2.5rem 0 5rem; }
      .cta-card { padding: 2.5rem 1.25rem; border-radius: 24px; }
      .cta-headline { font-size: 1.85rem; }
      .cta-subtext { font-size: 1rem; margin-bottom: 2rem; }
      .logo-circle { width: 80px; height: 80px; border-radius: 20px; }
      .pr-1 { width: 110px; height: 110px; }
      .pr-2 { width: 150px; height: 150px; }
      .pr-3 { width: 190px; height: 190px; }
    }
  `]
})
export class FinalCtaComponent {
  @Input() eyebrow: string = '';
  @Input() headline: string = 'Ready to Simplify <br>Retail Operations for Good?';
  @Input() subtext: string = 'See how Zenflow transforms billing, inventory, and accounting into one seamless retail system.';
  @Input() buttonText: string = 'Get Started Now';
}
