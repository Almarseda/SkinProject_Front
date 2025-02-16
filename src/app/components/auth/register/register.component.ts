import { Component, inject } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'sonner';

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
  errorMessage = '';
  successMessage = '';


  passwordValidator(form: AbstractControl) {
    const passwordControl = form.get('password')
    const repitePasswordControl = form.get('confirmPassword');

    if (passwordControl?.value !== repitePasswordControl?.value) {
      repitePasswordControl?.setErrors({ passwordvalidator: true });
      return { passwordvalidator: true };
    }

    return null;
  }

  regForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.passwordValidator]),
  });

  checkError(fieldName: string, errorName: string) {
    return this.regForm.get(fieldName)?.hasError(errorName) && this.regForm.get(fieldName)?.touched;
  }



  onSubmit() {
    if (this.regForm.valid) {
      const { username, email, password } = this.regForm.value;

      if (this.sesionService.register(username, email, password)) {
        toast.success('✅ Registro exitoso. Redirigiendo...', { duration: 2000 });
        setTimeout(() => this.router.navigate(['/login']), 2000);
      } else {
        toast.error('⚠️ Este correo ya está registrado.');
      }
    }
  }
}
