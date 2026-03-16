import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../../features/contact/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public async sendEmail(formData: ContactMessage): Promise<EmailJSResponseStatus> {
    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams as Record<string, unknown>,
      environment.emailjs.publicKey,
    );
  }
}
