import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SolutionHubComponent } from '../../components/features/solution-hub.component';
import { PrivacySectionComponent } from '../../components/shared/privacy-section.component';
import { PowerFeaturesComponent } from '../../components/power-features/power-features.component';
import { SocialStatsComponent } from '../../components/shared/social-stats.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SolutionHubComponent,
    PrivacySectionComponent,
    PowerFeaturesComponent,
    SocialStatsComponent,
    WhyChooseUsComponent,
    FinalCtaComponent
  ],
  template: `
    <main>
      <app-hero appScrollReveal />
      <app-social-stats appScrollReveal />
      <app-power-features appScrollReveal />
      <app-solution-hub appScrollReveal />
      <app-privacy-section appScrollReveal />
      <app-why-choose-us appScrollReveal />
      <app-final-cta appScrollReveal />
    </main>
  `
})
export class HomeComponent { }
