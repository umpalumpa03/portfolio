import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export const getValidationMessage = (
  control: AbstractControl | null,
  fieldName: string,
  translate: TranslateService
): string | null => {
  if (!control || control.valid || !control.touched) {
    return null;
  }

  if (control.hasError('required')) {
    return translate.instant('VALIDATION.REQUIRED', { field: fieldName });
  }

  if (control.hasError('email')) {
    return translate.instant('VALIDATION.EMAIL');
  }

  if (control.hasError('minlength')) {
    const required = control.getError('minlength').requiredLength;
    return translate.instant('VALIDATION.MINLENGTH', { required });
  }

  if (control.hasError('maxlength')) {
    const required = control.getError('maxlength').requiredLength;
    return translate.instant('VALIDATION.MAXLENGTH', { required });
  }

  return translate.instant('VALIDATION.INVALID');
};
