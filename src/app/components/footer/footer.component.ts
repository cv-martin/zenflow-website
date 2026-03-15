import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          
          <!-- Brand Column -->
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="brand-icon-wrap">
                <img src="/logo/logo.png" alt="Zenflow" class="brand-icon" />
              </span>
              <img src="/logo/zenflow_text.png" alt="Zenflow" class="brand-wordmark" />
            </div>
            <p class="brand-subtext">The operating system for modern retail.</p>
            <div class="brand-socials">
              <!-- Placeholder Social Icons -->
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" class="icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="none" class="icon"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" class="icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>
          </div>

          <!-- Links Column: Product -->
          <div class="footer-col">
            <h4 class="col-header">PRODUCT</h4>
            <ul class="link-list">
              <li><a routerLink="/features">Features</a></li>
              <li><a routerLink="/pricing">Pricing</a></li>
              <li><a routerLink="/integrations">Integrations</a></li>
              <li><a routerLink="/changelog">Changelog</a></li>
            </ul>
          </div>

          <!-- Links Column: Company -->
          <div class="footer-col">
            <h4 class="col-header">COMPANY</h4>
            <ul class="link-list">
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/careers">Careers</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Links Column: Legal -->
          <div class="footer-col">
            <h4 class="col-header">LEGAL</h4>
            <ul class="link-list">
              <li><a routerLink="/privacy-policy">Privacy Policy</a></li>
              <li><a routerLink="/refund-policy">Refund Policy</a></li>
              <li><a routerLink="/terms">Terms of Service</a></li>
              <li><a routerLink="/shipping-policy">Shipping Policy</a></li>
              <li><a routerLink="/security">Security</a></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p class="copyright">&copy; {{ currentYear }} Zenflow Inc. All rights reserved.</p>
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #020617; /* Midnight Slate */
      color: #79a1f0; /* Default Text Color */
      padding: 5rem 0 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
    }

    /* Subtle Top Glow */
    .footer::before {
      content: '';
      position: absolute;
      top: 0; left: 50%; transform: translateX(-50%);
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
      opacity: 0.5;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 4rem;
      margin-bottom: 5rem;
    }

    /* Brand Column */
    .brand-logo { 
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .brand-icon-wrap {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      &:hover .brand-icon-wrap {
        background: rgba(139, 92, 246, 0.1);
        border-color: rgba(139, 92, 246, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
      }
    }

    .brand-icon {
      height: 28px;
      width: auto;
      object-fit: contain;
    }

    .brand-wordmark {
      height: 18px;
      width: auto;
      object-fit: contain;
      filter: invert(1) brightness(1.2);
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .brand-logo:hover .brand-wordmark {
      opacity: 1;
    }

    .brand-subtext {
      color: #94a3b8;
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      max-width: 250px;
      line-height: 1.6;
    }

    .brand-socials { display: flex; gap: 1rem; }
    .social-link {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      color: #94a3b8;
      transition: all 0.2s;
    }
    .social-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
    .icon { width: 18px; height: 18px; }

    /* Links Columns */
    .col-header {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #ffffff;
      margin-bottom: 1.5rem;
      opacity: 0.4;
    }

    .link-list { list-style: none; padding: 0; margin: 0; }
    .link-list li { margin-bottom: 0.75rem; }
    .link-list a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    .link-list a:hover { color: #ffffff; }

    /* Bottom Bar */
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .copyright {
      color: #475569;
      font-size: 0.85rem;
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: #10b981; /* Success Green */
      font-weight: 500;
      background: rgba(16, 185, 129, 0.1);
      padding: 0.4rem 0.8rem;
      border-radius: 99px;
    }

    .status-dot {
      width: 8px; height: 8px;
      background: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
    }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
    }

    @media (max-width: 640px) {
      .footer { padding: 4rem 1.5rem 3rem; }
      .footer-grid { 
        grid-template-columns: 1fr 1fr; 
        gap: 3rem 1.5rem; 
        margin-bottom: 4rem; 
      }
      .footer-brand { grid-column: span 2; margin-bottom: 1rem; }
      .brand-subtext { max-width: 100%; margin-bottom: 2rem; }
      .footer-bottom { 
        flex-direction: column-reverse; 
        gap: 2rem; 
        text-align: center;
        align-items: center;
      }
      .status-indicator { width: fit-content; }
    }

    @media (max-width: 480px) {
      .footer { padding: 3rem 1.25rem 2rem; }
      .footer-grid { gap: 2rem 1.25rem; }
      .brand-logo { margin-bottom: 1.5rem; }
      .col-header { font-size: 0.7rem; margin-bottom: 1rem; }
      .link-list li { margin-bottom: 0.5rem; }
      .link-list a { font-size: 0.9rem; }
      .footer-bottom { padding-top: 1.5rem; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
