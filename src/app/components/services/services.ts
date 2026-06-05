import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Service {
  title: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = signal<Service[]>([
    {
      title: 'MERN Stack Full App',
      description: 'Complete full-stack applications using MongoDB, Express, React, and Node.js. From API design to deployment.',
      highlights: ['Database Design (MongoDB)', 'RESTful API Development', 'Full App Deployment']
    },
    {
      title: 'Modern Frontend',
      description: 'Building responsive SPAs and PWAs using React.js, Next.js, and Tailwind CSS. Focus on component reusability.',
      highlights: ['Figma to React', 'API Integration (Axios)', 'Interactive UI/UX']
    },
    {
      title: 'WordPress Development',
      description: 'Custom theme development, Elementor Pro, and Headless WordPress setups for high-performance sites.',
      highlights: ['Custom Plugins', 'WooCommerce & Stripe', 'Speed Optimization (WP Rocket)']
    },
    {
      title: 'Data & Backend',
      description: 'Backend management using Firebase, SQL database maintenance, and web scraping for data-driven applications.',
      highlights: ['Firebase Auth & DB', 'WordPress Headless Backend', 'Web Scraping (Octoparse)', 'Bulk Data Import']
    }
  ]);
}
