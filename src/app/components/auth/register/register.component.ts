import { Component, inject } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  toastr = inject(ToastrService);


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


  onSubmit() {
    if (this.regForm.valid) {
      const { username, email, password } = this.regForm.value;

      if (this.sesionService.register(username, email, password)) {
        this.toastr.success('✅ Registro exitoso. Redirigiendo...', 'Éxito');
        setTimeout(() => this.router.navigate(['/main']), 2000);
      } else {
        this.toastr.error('⚠️ Este correo ya está registrado.', 'Error');
      }
    } else {
      this.toastr.warning('⚠️ Completa todos los campos correctamente.', 'Advertencia');
    }
  }
}