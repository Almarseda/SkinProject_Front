import { Component, inject } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  sesionService = inject(SesionService)
  router = inject(Router)
  toastr = inject(ToastrService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (this.sesionService.login(email, password)) {
        this.toastr.success('Inicio de sesión exitoso', 'Éxito');
        setTimeout(() => this.router.navigate(['/main']), 1500);
      } else {
        this.toastr.error('Correo o contraseña incorrectos', 'Error');
      }
    } else {
      this.toastr.warning('Por favor completa todos los campos correctamente', 'Advertencia');
    }
  }
}
