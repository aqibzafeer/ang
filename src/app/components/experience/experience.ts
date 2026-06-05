import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  title: string;
  issueDate: string;
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  jobs = signal<Job[]>([
    {
      title: 'Frontend Developer',
      company: 'Merik Solutions',
      period: 'Apr 2025 - Present',
      description: 'Developing responsive web apps with React JS & Tailwind. Integrating REST APIs (Axios) and managing Firebase backends.'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Jan 2022 - Present',
      description: 'Specializing in Headless WordPress, WooCommerce, and SEO optimization. Delivered 10+ projects.'
    },
    {
      title: 'Technical Support',
      company: 'MTech Solutions',
      period: 'Aug 2024 - Feb 2025',
      description: 'SQL database maintenance, network setup, and hardware troubleshooting.'
    }
  ]);

  education = signal<Education[]>([
    { title: 'B.S Economics', issueDate: 'Focus on Analytical Thinking and Data Management' },
    { title: 'React JS', issueDate: 'Issued 2025' },
    { title: 'React Native', issueDate: 'Issued 2024' },
    { title: 'JavaScript', issueDate: 'Issued 2024' },
    { title: 'WordPress', issueDate: 'Issued 2024' }
  ]);
}
