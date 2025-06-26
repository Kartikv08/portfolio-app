import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationList = [
    {
      institution: 'SRM Institute of Science and Technology',
      degree: 'Bachelor of Technology',
      date: 'July 2019 – May 2023',
      location: 'Delhi-NCR, India',
      CGPA : '8.76/10'
    },
    {
      institution: 'DAV Public School',
      degree: 'HSC',
      date: 'April 2017 – May 2018',
      location: 'Kota, Rajasthan, India',
      Percentage : '60.2%'
    },
    {
      institution: 'DAV Public School',
      degree: 'SSC',
      date: 'April 2015 – May 2016',
      location: 'Kota, Rajasthan, India',
      CGPA : '9.2/10'
    },
  ];
}
