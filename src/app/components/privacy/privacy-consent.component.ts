import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-consent.component.html',
  styleUrls: ['./privacy-consent.component.scss']
})
export class PrivacyConsentComponent implements OnInit {
  isVisible = false;
  private readonly CONSENT_KEY = 'Zenflow_privacy_consent';

  ngOnInit() {
    this.checkConsent();
  }

  checkConsent() {
    const consent = localStorage.getItem(this.CONSENT_KEY);
    if (!consent) {
      // Small delay for entrance animation feel
      setTimeout(() => {
        this.isVisible = true;
      }, 1000);
    }
  }

  accept() {
    localStorage.setItem(this.CONSENT_KEY, 'accepted');
    this.isVisible = false;
  }

  decline() {
    localStorage.setItem(this.CONSENT_KEY, 'declined');
    this.isVisible = false;
  }
}
