import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal<Project[]>([

    {
      name: 'Azlan E-commerce',
      description: 'Garment store with Tailwind & Firebase.',
      tech: ['Next.js', 'Firebase']
    },
    {
      name: 'PropertyLimBrothers',
      description: 'Real estate platform with search filters.',
      tech: ['WordPress', 'Elementor']
    },
    {
      name: 'AmbalaFoodProducts',
      description: 'Food E-commerce with Next.js & Stripe integration.',
      tech: ['Next.js', 'Stripe']
    },
    {
      name: 'Crea8ive.Solutions',
      description: 'Agency website for Web & Graphic services.',
      tech: ['Creative', 'Agency']
    }
  ]);
}
