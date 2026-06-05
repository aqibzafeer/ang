import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { PortfolioHero } from '../../components/portfolio-hero/portfolio-hero';


@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Services, Projects, Skills, Experience, PortfolioHero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = signal('Aqib Zafeer');
  title = signal('MERN Stack Developer');
  bio = signal('Full Stack Developer building scalable apps with React, Next.js, React Native, and WordPress. Obsessed with performance, SEO, and clean architecture.');
  email = signal('mail.aqibzafeer@gmail.com');
  phone = signal('+92 302 5089439');

  onHireClick() {
    const mailtoLink = `mailto:${this.email()}?subject=Let's Work Together`;
    window.location.href = mailtoLink;
  }
}
