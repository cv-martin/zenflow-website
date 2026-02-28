import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container page-content">
      <section class="contact-hero reveal-active">
        <div class="eyebrow">CONTACT US</div>
        <h1 class="gradient-text">Let's Build the <span class="text-highlight-pink">Future</span><br>of Your Retail Business.</h1>
        <p>Expert support, quick responses, and a team that understands retail scale.</p>
      </section>

      <div class="contact-grid">
        <!-- WhatsApp Integration Card -->
        <div class="contact-card bento-card-inner highlight">
          <div class="card-icon whatsapp">
            <svg viewBox="0 0 24 24" fill="currentColor" class="icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 5.86h-.01a10.45 10.45 0 01-5.326-1.458l-.382-.227-3.962 1.039 1.058-3.86-.249-.395A10.398 10.398 0 013.84 9.123C3.84 3.442 8.442 1 14.125 1c2.75 0 5.336 1.07 7.28 3.02 1.944 1.95 3.01 4.538 3.01 7.288 0 5.681-4.603 10.372-10.285 10.372l-.001-.001-.001-.001L14.12 21.242 12.72 20.242z"/></svg>
          </div>
          <h3>WhatsApp Support</h3>
          <p>Instant support for your retail operations.</p>
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Zenflow%20team,%20I'm%20interested%20in%20learning%20more%20about%20your%20retail%20OS." target="_blank" class="btn-whatsapp">
            Chat on WhatsApp
          </a>
        </div>

        <!-- Email Support Card -->
        <div class="contact-card bento-card-inner">
          <div class="card-icon email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
          </div>
          <h3>Email Us</h3>
          <p>For detailed inquiries and partnership requests.</p>
          <a href="mailto:support@Zenflow.co" class="btn-email">support@Zenflow.co</a>
        </div>

        <!-- Sales Inquiry Card -->
        <div class="contact-card bento-card-inner">
          <div class="card-icon sales">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h3>Sales Inquiry</h3>
          <p>Book a demo or discuss enterprise pricing.</p>
          <button class="btn-sales">Book a Demo</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* .page-content inherited from global (12rem) */
    
    .contact-hero { 
      text-align: center; 
      margin-bottom: 2.5rem;
      padding: 2rem 0 4rem;
    }
    .contact-hero h1 { font-size: 3rem; margin-bottom: 0.75rem; letter-spacing: -0.04em; }
    .contact-hero p { max-width: 600px; margin: 0 auto; font-size: 1.1rem; color: var(--text-medium); line-height: 1.5; }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .contact-card {
      text-align: center;
      padding: 2.5rem 1.5rem !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      
      &.highlight {
        border-color: #25D366 !important;
        background: rgba(37, 211, 102, 0.05);
      }

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.1);
      }

      h3 { font-size: 1.25rem; font-weight: 850; color: #0f172a; margin: 0; }
      p { font-size: 0.9rem; color: #475569; line-height: 1.4; margin: 0; height: 3rem; display: flex; align-items: center; justify-content: center; }
    }

    .card-icon {
      width: 56px; height: 56px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 0.25rem;
      
      &.whatsapp { background: #25D366; color: white; }
      &.email { background: #4f46e5; color: white; }
      &.sales { background: #f59e0b; color: white; }
      
      .icon { width: 28px; height: 28px; }
    }

    .btn-whatsapp, .btn-email, .btn-sales {
      width: 100%;
      padding: 0.9rem;
      border-radius: 12px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    .btn-whatsapp {
      background: #25D366;
      color: white;
      &:hover { background: #128C7E; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(37, 211, 102, 0.25); }
    }

    .btn-email {
      border: 1.5px solid rgba(0,0,0,0.06);
      color: #0f172a;
      background: rgba(255,255,255,0.5);
      &:hover { border-color: #4f46e5; color: #4f46e5; background: white; }
    }

    .btn-sales {
      background: #0f172a;
      color: white;
      border: none;
      cursor: pointer;
      &:hover { background: #4f46e5; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2); }
    }

    @media (max-width: 1024px) {
      .page-content { padding-top: 6rem; }
      .contact-hero h1 { font-size: 2.5rem; }
      .contact-grid { grid-template-columns: repeat(2, 1fr); max-width: 700px; }
    }

    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr; max-width: 380px; }
    }

    @media (max-width: 640px) {
      .page-content { padding-top: 4rem; }
      .contact-hero { margin-bottom: 1.5rem; }
      .contact-hero h1 { font-size: 2.2rem; }
      .contact-card { padding: 2rem 1.25rem !important; }
    }
  `]
})
export class ContactComponent { }
