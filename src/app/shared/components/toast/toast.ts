import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle2, AlertCircle, X } from 'lucide-angular';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
  public toastService = inject(ToastService);

  public readonly SuccessIcon = CheckCircle2;
  public readonly ErrorIcon = AlertCircle;
  public readonly CloseIcon = X;
}
