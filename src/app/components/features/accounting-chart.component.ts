import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accounting-chart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="chart-container">
      <!-- Live Indicator Overlay -->
      <div class="chart-header">
        <div class="chart-title">Cash Flow</div>
        <div class="live-badge">
          <span class="pulse-dot"></span> Real-Time
        </div>
      </div>
    
      <svg viewBox="0 0 300 120" class="chart-svg">
        <!-- Gradient Definition -->
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.2" />
            <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0" />
          </linearGradient>
          <filter id="glow">
             <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
             <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>
        
        <!-- Grid Lines -->
        <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(0,0,0,0.05)" stroke-dasharray="4" />
        <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(0,0,0,0.05)" stroke-dasharray="4" />
        <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(0,0,0,0.05)" stroke-dasharray="4" />
        
        <!-- Area under curve -->
        <path d="M0,120 L0,80 Q50,20 100,50 T200,40 T300,10 V120 Z" 
              fill="url(#chartGradient)" />
        
        <!-- The Line -->
        <path #chartLine
              d="M0,80 Q50,20 100,50 T200,40 T300,10" 
              fill="none" 
              stroke="var(--primary-color)" 
              stroke-width="2.2"
              stroke-linecap="round"
              filter="url(#glow)" />
              
        <!-- Interactive Dots with Tooltips -->
        <g class="chart-point" style="--delay: 1.5s">
          <circle cx="100" cy="50" r="3.5" fill="white" stroke="var(--primary-color)" stroke-width="1.8" />
          <g class="tooltip" transform="translate(87, 28)">
            <rect x="0" y="0" width="48" height="18" rx="4" fill="#1f2937" opacity="0.9" />
            <text x="24" y="12" text-anchor="middle" fill="white" font-size="9" font-weight="bold">₹ 14.2k</text>
          </g>
        </g>
        
        <g class="chart-point" style="--delay: 1.8s">
          <circle cx="200" cy="40" r="3.5" fill="white" stroke="var(--primary-color)" stroke-width="1.8" />
          <g class="tooltip" transform="translate(187, 18)">
            <rect x="0" y="0" width="48" height="18" rx="4" fill="#1f2937" opacity="0.9" />
            <text x="24" y="12" text-anchor="middle" fill="white" font-size="9" font-weight="bold">₹ 28.5k</text>
          </g>
        </g>

        <!-- Pulsing End Point -->
        <g class="chart-point active" style="--delay: 2.1s">
          <circle cx="300" cy="10" r="5" fill="var(--primary-color)">
            <animate attributeName="r" values="3.5;4.5;3.5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <g class="tooltip" transform="translate(245, 22)">
             <rect x="0" y="0" width="52" height="22" rx="4" fill="var(--primary-color)" />
             <text x="26" y="15" text-anchor="middle" fill="white" font-size="9.5" font-weight="700">₹ 45.1k</text>
          </g>
        </g>
        
        <!-- Axis Labels -->
        <text x="0" y="115" class="axis-label" text-anchor="start">Week 1</text>
        <text x="100" y="115" class="axis-label" text-anchor="middle">Week 2</text>
        <text x="200" y="115" class="axis-label" text-anchor="middle">Week 3</text>
        <text x="300" y="115" class="axis-label" text-anchor="end" fill="var(--primary-color)" font-weight="700">Today</text>
      </svg>
    </div>
  `,
  styles: [`
    .chart-container {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 200px; /* Ensure height */
    }
    .chart-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
    }
    .chart-title { font-size: 0.85rem; font-weight: 500; color: #64748b; }
    .live-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.7rem;
      font-weight: 600;
      color: #10b981;
      background: rgba(16, 185, 129, 0.08);
      padding: 4px 10px;
      border-radius: 20px;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse-green 1.5s infinite;
    }
    .chart-svg {
      width: 100%;
      height: auto;
      overflow: visible;
      margin-top: 2rem;
    }
    
    .axis-label {
      font-size: 10px;
      fill: var(--text-light);
      font-weight: 500;
      opacity: 0;
      animation: fade-in 1s forwards 1s;
    }
    
    .chart-point {
      opacity: 0;
      animation: fade-in-up 0.5s ease-out forwards;
      animation-delay: var(--delay);
      cursor: POINTER;
      
      &:hover .tooltip { opacity: 1; transform: translateY(-5px); }
    }
    
    .tooltip {
      transition: all 0.2s ease;
      opacity: 0;
      transform: translateY(0);
      /* Active point always shows tooltip or shows on load */
    }
    .chart-point.active .tooltip { opacity: 1; animation: bounce-tip 2s infinite; }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse-green {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    
    @keyframes bounce-tip {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
  `]
})
export class AccountingChartComponent implements AfterViewInit {
  @ViewChild('chartLine') chartLine!: ElementRef<SVGPathElement>;

  ngAfterViewInit() {
    const path = this.chartLine.nativeElement;
    const length = path.getTotalLength();
    
    // Set up starting positions (Hidden)
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.style.transition = 'none';
    path.getBoundingClientRect(); // Reflow
    
    // Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger Animation
          path.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.22, 1, 0.36, 1)'; // Sophisticated Ease
          path.style.strokeDashoffset = '0';
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(this.elementRef.nativeElement);
  }

  constructor(private elementRef: ElementRef) {}
}
