import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-services.service';
import { FilterServicesService } from '../../services/filter-services.service';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  filterService = inject(FilterServicesService);

  filteredProductList: Product[] = [];
  productList: Product[] = [];

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
    this.filteredProductList = this.productList;

    this.filterService.minPrice$.subscribe(() => this.filterProducts());
    this.filterService.maxPrice$.subscribe(() => this.filterProducts());
    this.filterService.selectedColors$.subscribe(() => this.filterProducts());
    this.filterService.selectedConditions$.subscribe(() => this.filterProducts());
    this.filterService.selectedRarities$.subscribe(() => this.filterProducts())
  }

  filterProducts() {
    let filteredList = this.productList;

    // Filter condition
    const selectedConditions = this.filterService.getSelectedConditions();
    if (selectedConditions.length > 0) {
      filteredList = filteredList.filter(product =>
        selectedConditions.includes(product.condition)
      );
    }

    // Filter price
    const minPrice = this.filterService.getMinPrice();
    const maxPrice = this.filterService.getMaxPrice();
    filteredList = filteredList.filter(
      (product) =>
        (minPrice == null || product.price >= minPrice) &&
        (maxPrice == null || product.price <= maxPrice)
    );

    // Filter color
    const selectedColors = this.filterService.getSelectedColors();
    if (selectedColors.length > 0) {
      filteredList = filteredList.filter(product =>
        product.color.some(color => selectedColors.includes(color))
      );
    }

    // Filter Rarity
    const selectedRarities = this.filterService.getSelectedRarities();
    if (selectedRarities.length > 0) {
      filteredList = filteredList.filter(product => selectedRarities.includes(product.rarity))
    }

    this.filteredProductList = filteredList;
  }
}