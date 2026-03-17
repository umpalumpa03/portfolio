import { AbstractControl } from '@angular/forms';

export const getValidationMessage = (
  control: AbstractControl | null,
  fieldName: string,
): string | null => {
  if (!control || control.valid || !control.touched) {
    return null;
  }

  if (control.hasError('required')) {
    return `${fieldName} is required.`;
  }

  if (control.hasError('email')) {
    return 'Please enter a valid email address.';
  }

  if (control.hasError('minlength')) {
    const required = control.getError('minlength').requiredLength;
    return `Must be at least ${required} characters.`;
  }

  if (control.hasError('maxlength')) {
    const required = control.getError('maxlength').requiredLength;
    return `Cannot exceed ${required} characters.`;
  }

  return 'Invalid input.';
};
