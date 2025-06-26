import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastr.error(
        'Please fill in all required fields correctly.',
        'Form Error'
      );
      return;
    }

    const serviceID = 'service_o8i06s9'; // 🔁 Your EmailJS Service ID
    const templateID = 'template_w0977k4'; // 🔁 Your Template ID
    const publicKey = 'TSz4Egqtev6Gs1d-x';

    const templateParams = {
      title: 'Contact Us Form Submission', // or you can add a field for this
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => (this.sending = false));
  }
}
