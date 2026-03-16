import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LucideAngularModule, Send } from 'lucide-angular';
import { SOCIAL_LINKS } from './config/contact.config';
import { ContactMessage, SocialLink } from './models/contact.model';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);

  public readonly isSending = signal<boolean>(false);
  public readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  public readonly SendIcon = Send;

  public readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  public async onSubmit(): Promise<void> {
    if (this.contactForm.invalid || this.isSending()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);

    const formData: ContactMessage = {
      name: this.contactForm.value.name!,
      email: this.contactForm.value.email!,
      message: this.contactForm.value.message!,
    };

    try {
      await this.emailService.sendEmail(formData);
      alert('Success! Your message has been sent. I will be in touch soon.');
      this.contactForm.reset();
    } catch (error) {
      console.error('Email transmission failed:', error);
      alert('Oops! Something went wrong. Please try again or email me directly.');
    } finally {
      this.isSending.set(false);
    }
  }
}
