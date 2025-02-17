import { Component, inject } from '@angular/core';
import { SearchComponent } from "../filters/search/search.component";
import { RouterLink } from '@angular/router';
import { SesionService } from '../../services/sesion.service';
import { NgAuthDirective } from '../../directives/ng-auth.directive';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent, RouterLink, NgAuthDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sesionService = inject(SesionService)

  logout() {
    this.sesionService.logout()
  }
}