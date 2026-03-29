export type ToastType = 'success' | 'error';

export interface ToastMessage {
  message: string;
  type: ToastType;
}
