import { inject, Injectable } from '@angular/core';
import { ProductService } from './product-services.service';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServicesService {

  productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productList = this.productService.getAllProducts();
  }
  private minPriceValue = new BehaviorSubject<number>(0);
  private maxPriceValue = new BehaviorSubject<number>(0);

  minPrice$ = this.minPriceValue.asObservable();
  maxPrice$ = this.maxPriceValue.asObservable();

  setMinPrice(price: number): void {
    this.minPriceValue.next(price);
  }

  setMaxPrice(price: number): void {
    this.maxPriceValue.next(price);
  }

  getMinPrice(): number {
    return this.minPriceValue.getValue();
  }

  getMaxPrice(): number {
    return this.maxPriceValue.getValue();
  }
}