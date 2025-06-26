import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  fullName = 'Kartik Vaishnav';
  fullTitle = 'Full Stack Developer';

  typedName = '';
  typedTitle = '';

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    let indexName = 0;
    let indexTitle = 0;
    const maxLen = Math.max(this.fullName.length, this.fullTitle.length);
    const speed = 100; // ms

    const interval = setInterval(() => {
      if (indexName < this.fullName.length) {
        this.typedName += this.fullName.charAt(indexName++);
      }

      if (indexTitle < this.fullTitle.length) {
        this.typedTitle += this.fullTitle.charAt(indexTitle++);
      }

      if (
        indexName >= this.fullName.length &&
        indexTitle >= this.fullTitle.length
      ) {
        clearInterval(interval);
      }
    }, speed);
  }
}
