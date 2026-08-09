import { Component, inject, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private translocoService = inject(TranslocoService);

  // Obfuscated contact details (Base64)
  private readonly encEmail = 'YWxleF8xNjIwMDFAaG90bWFpbC5jb20=';
  private readonly encPhoneRaw = 'NTE5ODEyOTI2NTY=';
  private readonly encPhoneFmt = 'KzUxIDk4MSAyOTIgNjU2';

  public emailRevealed = signal(false);
  public phoneRevealed = signal(false);

  revealEmail(): void {
    this.emailRevealed.set(true);
  }

  revealPhone(): void {
    this.phoneRevealed.set(true);
  }

  getEmail(): string {
    return atob(this.encEmail);
  }

  getRawPhone(): string {
    return atob(this.encPhoneRaw);
  }

  getFormattedPhone(): string {
    return atob(this.encPhoneFmt);
  }

  getWhatsAppLink(): string {
    const message = this.translocoService.translate('contact.whatsapp_msg');
    return `https://wa.me/${this.getRawPhone()}?text=${encodeURIComponent(message)}`;
  }

  getEmailLink(): string {
    const subject = this.translocoService.translate('contact.email_subject');
    const body = this.translocoService.translate('contact.email_body');
    return `mailto:${this.getEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
