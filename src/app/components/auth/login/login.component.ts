import { Component, inject } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  sesionService = inject(SesionService)
  router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  onSubmit() {

  }
}
