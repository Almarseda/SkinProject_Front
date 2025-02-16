import { Component, inject } from '@angular/core';
import { SearchComponent } from "../filters/search/search.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}