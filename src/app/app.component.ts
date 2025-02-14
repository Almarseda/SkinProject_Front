import { Component } from '@angular/core';
import { ProductsComponent } from "./components/products/products.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkinsProject';

  selectedEstados: string[] = [];

  onStateChange(selectedEstados: string[]) {
    this.selectedEstados = selectedEstados;
  }
}
