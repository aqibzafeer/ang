import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = signal([
    {
      category: 'Frontend',
      skills: ['React JS', 'Next.js', 'React Native', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs']
    },
    {
      category: 'CMS & E-commerce',
      skills: ['WordPress', 'Elementor', 'WooCommerce', 'Stripe', 'Headless CMS']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Trello', 'WP Rocket', 'Google Analytics', 'Axios', 'SEO Optimization']
    }
  ]);
}
