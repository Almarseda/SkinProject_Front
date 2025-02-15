import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  private minPriceSubject = new BehaviorSubject<number | null>(null);
  private maxPriceSubject = new BehaviorSubject<number | null>(null);

  minPrice$ = this.minPriceSubject.asObservable();
  maxPrice$ = this.maxPriceSubject.asObservable();

  setMinPrice(value: string) {
    const minPrice = value ? Number(value) : null;
    this.minPriceSubject.next(minPrice);
  }

  setMaxPrice(value: string) {
    const maxPrice = value ? Number(value) : null;
    this.maxPriceSubject.next(maxPrice);
  }

  getMinPrice(): number | null {
    return this.minPriceSubject.value;
  }

  getMaxPrice(): number | null {
    return this.maxPriceSubject.value;
  }
}