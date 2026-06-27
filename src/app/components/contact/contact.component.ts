import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private translocoService = inject(TranslocoService);

  getWhatsAppLink(): string {
    const message = this.translocoService.translate('contact.whatsapp_msg');
    return `https://wa.me/51981292656?text=${encodeURIComponent(message)}`;
  }

  getEmailLink(): string {
    const subject = this.translocoService.translate('contact.email_subject');
    const body = this.translocoService.translate('contact.email_body');
    return `mailto:alex_162001@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
