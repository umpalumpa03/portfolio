import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LucideAngularModule, Send } from 'lucide-angular';
import { SOCIAL_LINKS } from './config/contact.config';
import { ContactMessage, SocialLink } from './models/contact.model';
import { EmailService } from '../../core/services/email.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  private readonly toastService = inject(ToastService);

  public readonly isSending = signal<boolean>(false);
  public readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  public readonly SendIcon = Send;

  public readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
  });

  public isInvalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && control.touched;
  }

  public async onSubmit(): Promise<void> {
    if (this.contactForm.invalid || this.isSending()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    const formData = this.contactForm.getRawValue() as ContactMessage;

    try {
      await this.emailService.sendEmail(formData);
      this.toastService.show('Message sent successfully! I will reach out soon.', 'success');
      this.contactForm.reset();
    } catch (error) {
      this.toastService.show('Oops! Something went wrong. Please try again.', 'error');
    } finally {
      this.isSending.set(false);
    }
  }
}
