import { Component, inject } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  sesionService = inject(SesionService);
  router = inject(Router);


  passwordValidator(form: AbstractControl): ValidationErrors | null {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }


  regForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: this.passwordValidator });


  checkError(fieldName: string, errorName: string) {
    return this.regForm.get(fieldName)?.hasError(errorName) && this.regForm.get(fieldName)?.touched;
  }


  onSubmit() {
    console.log('submit')
    if (this.regForm.valid) {
      console.log('validated')
      const { username, email, password } = this.regForm.value;

      if (this.sesionService.register(username, email, password)) {

        setTimeout(() => this.router.navigate(['/main']), 2000);
      } else {

      }
    }
  }
}