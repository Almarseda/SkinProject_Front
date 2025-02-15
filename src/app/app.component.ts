import { Component } from '@angular/core';
import { ProductsComponent } from "./components/products/products.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./components/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkinsProject';


  ngOnInit(): void {
    initFlowbite();
  }
}
