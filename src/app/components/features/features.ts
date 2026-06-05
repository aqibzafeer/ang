import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Button } from '../ui/button/button';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  features = signal<Feature[]>([
    { title: 'Fast', description: 'Lightning quick performance' },
    { title: 'Secure', description: 'Enterprise-grade security' },
    { title: 'Scalable', description: 'Grows with your needs' }
  ]);

  onFeatureClick(featureTitle: string) {
    alert(`You clicked on: ${featureTitle}`);
  }
}
