import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProductComponent } from "./components/card-product/card-product.component";
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardProductComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkinsProject';
}
