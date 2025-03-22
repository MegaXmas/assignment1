import { AbstractControl } from '@angular/forms';



export function passwordMatchValidator(clientDetailsForm: AbstractControl) {
  const password = clientDetailsForm.get('createPassword')?.value;
    const confirmPassword = clientDetailsForm.get('confirmPassword')?.value;    

  if (password !== confirmPassword) {
    clientDetailsForm.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    // Only clear the passwordMismatch error
    const errors = clientDetailsForm.get('confirmPassword')?.errors;
    if (errors) {
      delete errors['passwordMismatch'];
      if (Object.keys(errors).length === 0) {
        clientDetailsForm.get('confirmPassword')?.setErrors(null);
      } else {
        clientDetailsForm.get('confirmPassword')?.setErrors(errors);
      }
    }
  } return null
 
}
