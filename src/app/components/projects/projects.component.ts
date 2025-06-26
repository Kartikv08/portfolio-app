import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedProjectIndex: number | null = null;

  toggleProject(index: number) {
    this.selectedProjectIndex =
      this.selectedProjectIndex === index ? null : index;
  }
  projects = [
    {
      title: 'Bg Removal',
      subtitle:
        'Remove backgrounds from images instantly with our AI-powered web app — fast, accurate, and effortless results.',
      image: 'assets/projects/Bg-Removal.png',
      technologies:
        'React, Node.js, MongoDB, Express.js, Clerk, Stripe, Vercel',
      details: [
        'Developed a full-stack background removal platform using React, Node.js, and MongoDB with over 95% accuracy and 90% faster image processing.',
        'Integrated Clerk and Stripe, ensuring fully secure authentication and achieving a 99% payment success rate.',
        'Optimized performance and deployed the platform on Vercel, resulting in 90% faster image processing and 99.9% uptime.',
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/Kartikv08/BG-REMOVAL',
    },
    {
      title: 'Inventory Management',
      subtitle:
        'Track and manage your inventory seamlessly with real-time updates, smart insights, and effortless control.',
      image: 'assets/projects/Inventory Management.png',
      technologies: 'Angular, Angular Material, JSON Server, Firebase',
      details: [
        'Build an application of Inventory Management System, allowing users to manage inventory items efficiently, resulting in a 30% improvement in inventory tracking accuracy.',
        'Integrated Angular Material components with reactive forms, enhancing user experience and streamlining inventory CRUD processes, leading to a 40% reduction in user input errors.',
        'Deployed JSON Server as a mock backend, facilitating seamless database interactions and reducing development time by 25%.',
      ],
      liveUrl: 'https://inventoryease.netlify.app/',
      githubUrl: 'https://github.com/Kartikv08/inventory-management',
    },
  ];
}
