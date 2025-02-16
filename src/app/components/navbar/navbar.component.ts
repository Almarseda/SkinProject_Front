import { Component, inject } from '@angular/core';
import { SearchComponent } from "../filters/search/search.component";
import { RouterLink } from '@angular/router';
import { SesionService } from '../../services/sesion.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sesionService = inject(SesionService)
}