import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = signal<boolean>(false);

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted.set(true);
      
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 5000);
    }
  }
}
