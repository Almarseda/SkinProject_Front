import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-services.service';
import { FilterServicesService } from '../../services/filter-services.service';
import { CardProductComponent } from "../card-product/card-product.component";
import { ButtonService } from '../../services/button.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardProductComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  filterService = inject(FilterServicesService);

  filteredProductList: Product[] = [];
  productList: Product[] = [];

  faFilter = faFilter
  private buttonService = inject(ButtonService);

  toggleFilters() {
    this.buttonService.toggleFilters();
  }

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
    this.filteredProductList = this.productList;

    this.filterService.minPrice$.subscribe(() => this.filterProducts());
    this.filterService.maxPrice$.subscribe(() => this.filterProducts());
    this.filterService.selectedColors$.subscribe(() => this.filterProducts());
    this.filterService.selectedConditions$.subscribe(() => this.filterProducts());
    this.filterService.selectedRarities$.subscribe(() => this.filterProducts())
    this.filterService.searchQuery$.subscribe(() => this.filterProducts());
  }

  filterProducts() {
    let filteredList = this.productList;

    // Condition
    const selectedConditions = this.filterService.getSelectedConditions();
    if (selectedConditions.length > 0) {
      filteredList = filteredList.filter(product =>
        selectedConditions.includes(product.condition)
      );
    }

    // Price
    const minPrice = this.filterService.getMinPrice();
    const maxPrice = this.filterService.getMaxPrice();
    filteredList = filteredList.filter(
      (product) =>
        (minPrice == null || product.price >= minPrice) &&
        (maxPrice == null || product.price <= maxPrice)
    );

    // Color
    const selectedColors = this.filterService.getSelectedColors();
    if (selectedColors.length > 0) {
      filteredList = filteredList.filter(product =>
        product.color.some(color => selectedColors.includes(color))
      );
    }

    // Search
    const searchQuery = this.removeAccents(this.filterService.getSearchQuery().toLowerCase().trim());
    if (searchQuery) {
      const searchWords = searchQuery.split(/\s+/);

      filteredList = filteredList.filter(product => {
        const productText = this.removeAccents(`${product.name} ${product.model}`.toLowerCase());
        return searchWords.every(word => productText.includes(word));
      });
    }

    // Rarity
    const selectedRarities = this.filterService.getSelectedRarities();
    if (selectedRarities.length > 0) {
      filteredList = filteredList.filter(product => selectedRarities.includes(product.rarity))
    }


    this.filteredProductList = filteredList;
  }

  removeAccents(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}