import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'UnitedLayer',
      role: 'Junior Software Engineer',
      location: 'Bangalore, Karnataka, India | Remote',
      date: 'March 2023 – Present',
      link: 'https://www.unitedlayer.com/',
      points: [
        'Designed and implemented reusable Angular components for UnityOne AI’s Orchestration module (Task and Workflow), accelerating configuration by 25% and improving accuracy by 30%.',
        'Architected and configured Auto-remediation and Event Ingestion modules, reducing issue resolution time by 20% and boosting operational efficiency by 35%.',
        'Contributed to Single-Tenant Portal integration with AWS, Azure, Oracle, and GCP, enabling 4x faster deployment cycles and 30% improved cloud access efficiency.',
        'Built a real-time dashboard summary in UnityOne AI using RxJS, NgRx, DI, and Chart.js, improving data load performance by 45% and UI responsiveness by 35%.',
        'Led testing initiatives using Jasmine and Karma, achieving 98% test coverage and contributing to a 15% reduction in production bugs.',
      ],
    },
    {
      company: 'Ananta Resource Management',
      role: 'Web Development Intern',
      location: 'Mumbai, Maharashtra, India | Remote',
      date: 'July 2021 – October 2021',
      link: 'https://www.anantaresource.com/',
      points: [
        'Designed and developed a responsive eCommerce application using React, HTML, CSS, and JavaScript, ensuring seamless user interaction and performance.',
        'Integrated a secure and scalable payment gateway, enabling smooth transactions through multiple payment methods including UPI and credit/debit cards.',
        'Implemented essential eCommerce features such as product filtering, dynamic cart management, and real-time product detail rendering for optimal user experience.',
      ],
    },
  ];
}
