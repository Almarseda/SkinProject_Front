import { Component, inject, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CardProductComponent } from "../card-product/card-product.component";
import { ProductService } from '../../services/product-services.service';
import { FilterServicesService } from '../../services/filter-services.service';
import { PriceComponent } from "../filters/price/price.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @Input() selectedCondition: string[] = [];
  productService = inject(ProductService);
  filterService = inject(FilterServicesService);

  filteredProductList: Product[] = [];
  productList: Product[] = [];

  ngOnInit() {

    this.productList = this.productService.getAllProducts();
    this.filteredProductList = this.productList;

    this.filterService.minPrice$.subscribe(() => {
      this.filterProducts();
    });


    this.filterService.maxPrice$.subscribe(() => {
      this.filterProducts();
    });
  }

  onStateChange(selectedEstados: string[]) {
    this.filterProducts(selectedEstados);
  }

  filterProducts(selectedEstados?: string[]) {
    let filteredList = this.productList;


    if (selectedEstados && selectedEstados.length > 0) {
      filteredList = filteredList.filter((product) =>
        selectedEstados.includes(product.condition)
      );
    }


    const minPrice = this.filterService.getMinPrice();
    const maxPrice = this.filterService.getMaxPrice();

    filteredList = filteredList.filter(
      (product) =>
        (minPrice == null || product.price >= minPrice) &&
        (maxPrice == null || product.price <= maxPrice)
    );

    this.filteredProductList = filteredList;
  }
}