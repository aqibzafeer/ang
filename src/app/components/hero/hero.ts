import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Button } from '../ui/button/button';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  onHeroClick() {
    alert('Hero button clicked!');
  }
}
