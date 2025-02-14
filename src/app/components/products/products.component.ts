import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CardProductComponent } from "../card-product/card-product.component";
import { ProductService } from '../../services/product-services.service';
import { FilterServicesService } from '../../services/filter-services.service';

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
  filterService = inject(FilterServicesService);

  filteredProductList: Product[] = [];
  productList: Product[] = [];

  ngOnInit() {
    this.filterService.productList$.subscribe(products => {
      this.productList = products;
      this.filteredProductList = this.productList;
    });

    this.filterService.minPrice$.subscribe(minPrice => {
      this.filterProducts(minPrice, this.filterService.getMaxPrice());
    });

    this.filterService.maxPrice$.subscribe(maxPrice => {
      this.filterProducts(this.filterService.getMinPrice(), maxPrice);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCondition']) {
      this.filterProducts();
    }
  }

  filterProducts(minPrice?: number, maxPrice?: number) {
    let filteredList = this.productList;

    if (this.selectedCondition.length > 0) {
      filteredList = filteredList.filter(product =>
        this.selectedCondition.includes(product.condition)
      );
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      filteredList = filteredList.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
      );
    }

    this.filteredProductList = filteredList;
  }
}