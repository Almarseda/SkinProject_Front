import { Component, inject, Input, SimpleChanges } from '@angular/core';
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

  @Input() selectedCondition: string[] = [];

  productService = inject(ProductService);

  filteredProductList: Product[] = [];
  productList: Product[] = [];

  ngOnInit() {
    this.productList = this.productService.getAllProducts()
    this.filteredProductList = this.productList;
    console.log(this.filteredProductList)

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCondition']) {
      this.filterProducts();
    }
  }

  filterProducts() {
    if (this.selectedCondition.length === 0) {
      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList.filter(product =>
        this.selectedCondition.includes(product.condition)
      );
    }
  }
}
