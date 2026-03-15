import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'reveal-active' class when in view
          this.renderer.addClass(this.el.nativeElement, 'reveal-active');
          // Important: Stop observing once revealed to prevent re-triggering on scroll up
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible (more forgiving)
      rootMargin: '0px 0px -20px 0px' // Reduced offset for smoother, earlier entry
    });

    observer.observe(this.el.nativeElement);
  }
}
