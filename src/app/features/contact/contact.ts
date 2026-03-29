import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LucideAngularModule, Send } from 'lucide-angular';
import { SOCIAL_LINKS } from './config/contact.config';
import { ContactMessage, SocialLink } from './models/contact.model';
import { EmailService } from '../../core/services/email.service';
import { ToastService } from '../../core/services/toast.service';
import { getValidationMessage } from '../../core/utils/validation.utils';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule, TranslateModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  private readonly toastService = inject(ToastService);
  private readonly translate = inject(TranslateService);

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
    const displayNameKey = `CONTACT.LABELS.${field.toUpperCase()}`;
    const displayName = this.translate.instant(displayNameKey);

    return getValidationMessage(control, displayName, this.translate);
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
      this.toastService.show(this.translate.instant('CONTACT.TOASTS.SUCCESS'), 'success');
      this.contactForm.reset();
    } catch (error) {
      this.toastService.show(this.translate.instant('CONTACT.TOASTS.ERROR'), 'error');
    } finally {
      this.isSending.set(false);
    }
  }
}
