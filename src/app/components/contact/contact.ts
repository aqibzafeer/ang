import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = input('contact@example.com');
  phone = input('+1 (555) 123-4567');
}
