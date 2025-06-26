import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  techStack = [
    {
      category: 'Frontend',
      items: [
        {
          name: 'JavaScript',
          logo: 'assets/TechStack/JavaScript.svg',
          percent: 90,
        },
        {
          name: 'TypeScript',
          logo: 'assets/TechStack/TypeScript.svg',
          percent: 90,
        },
        { name: 'Angular', logo: 'assets/TechStack/Angular.svg', percent: 90 },
        { name: 'React', logo: 'assets/TechStack/React.svg', percent: 85 },
        { name: 'HTML', logo: 'assets/TechStack/HTML5.svg', percent: 95 },
        { name: 'CSS', logo: 'assets/TechStack/CSS3.svg', percent: 90 },
        {
          name: 'Bootstrap',
          logo: 'assets/TechStack/Bootstrap.svg',
          percent: 90,
        },
        {
          name: 'Tailwind',
          logo: 'assets/TechStack/Tailwind CSS.svg',
          percent: 85,
        },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', logo: 'assets/TechStack/Node.js.svg', percent: 75 },
        { name: 'Express', logo: 'assets/TechStack/Express.svg', percent: 80 },
        { name: 'Core Java', logo: 'assets/TechStack/Java.svg', percent: 70 },
        { name: 'MongoDB', logo: 'assets/TechStack/MongoDB.svg', percent: 80 },
      ],
    },
    {
      category: 'Tools/Platforms',
      items: [
        { name: 'Git', logo: 'assets/TechStack/Git.svg', percent: 90 },
        { name: 'GitHub', logo: 'assets/TechStack/GitHub.svg', percent: 90 },
        { name: 'Postman', logo: 'assets/TechStack/Postman.svg', percent: 85 },
        {
          name: 'Firebase',
          logo: 'assets/TechStack/Firebase.svg',
          percent: 80,
        },
        { name: 'Jasmine', logo: 'assets/TechStack/Jasmine.svg', percent: 75 },
        { name: 'Karma', logo: 'assets/TechStack/Karma.svg', percent: 75 },
      ],
    },
    {
      category: 'Core CS Concepts',
      items: [
        {
          name: 'Data Structures and Algorithms',
          logo: 'assets/TechStack/Data-Structure.svg',
          percent: 80,
        },
        {
          name: 'DBMS',
          logo: 'assets/TechStack/database-icon.svg',
          percent: 85,
        },
      ],
    },
  ];
}
