import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-portfolio-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  templateUrl: './portfolio-hero.html',
  styleUrl: './portfolio-hero.css',
})
export class PortfolioHero {
  name = input('Your Name');
  title = input('Your Title');
  bio = input('Your bio');
  onHireClick = output<void>();

  handleHire() {
    this.onHireClick.emit();
  }
}