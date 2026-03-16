import { Injectable, signal } from '@angular/core';
import { ToastMessage, ToastType } from '../../shared/components/toast/models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public readonly currentToast = signal<ToastMessage | null>(null);

  public show(message: string, type: ToastType = 'success'): void {
    this.currentToast.set({ message, type });

    setTimeout(() => {
      this.hide();
    }, 4000);
  }

  public hide(): void {
    this.currentToast.set(null);
  }
}
