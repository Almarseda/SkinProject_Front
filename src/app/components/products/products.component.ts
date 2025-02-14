import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CardProductComponent } from "../card-product/card-product.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productService = inject(ProductService)

  productList: Product[] = []

  ngOnInit() {
    this.productList = this.productService.getAllProducts()
    console.log(this.productList)
  }
}
