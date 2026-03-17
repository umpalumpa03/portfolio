import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LucideAngularModule, Send } from 'lucide-angular';
import { SOCIAL_LINKS } from './config/contact.config';
import { ContactMessage, SocialLink } from './models/contact.model';
import { EmailService } from '../../core/services/email.service';
import { ToastService } from '../../core/services/toast.service';
import { getValidationMessage } from '../../core/utils/validation.utils';

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

  public getErrorMessage(field: 'name' | 'email' | 'message'): string | null {
    const control = this.contactForm.controls[field];

    const displayName = field.charAt(0).toUpperCase() + field.slice(1);

    return getValidationMessage(control, displayName);
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
