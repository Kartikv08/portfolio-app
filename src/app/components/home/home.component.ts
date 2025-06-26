import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, NavbarComponent, ExperienceComponent, TechStackComponent, EducationComponent, ContactComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
