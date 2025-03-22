import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../validators/password-validator';



@Component({
  selector: 'app-client-creation',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './client-creation.component.html',
  styleUrl: './client-creation.component.css'
})

export class ClientCreationComponent implements OnInit {
  showPassword = false;

  clientDetailsForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(4)]],
    mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    createPassword: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
    confirmPassword: ['', [Validators.required, passwordMatchValidator]]
    }
    , { validators: passwordMatchValidator })
  ;
    
  constructor(private fb: FormBuilder) {}

 

  ngOnInit() {
    console.log('Initial form state:', {
      dirty: this.clientDetailsForm.dirty,
      pristine: this.clientDetailsForm.pristine,
      valid: this.clientDetailsForm.valid,
      nameControl: {
        invalid: this.clientDetailsForm.get('name')?.invalid,
        dirty: this.clientDetailsForm.get('name')?.dirty,
        touched: this.clientDetailsForm.get('name')?.touched
      }
    });
  }

  onSubmit(): void {
    console.log('form submitted', 
      this.clientDetailsForm.value
    )
  }

}