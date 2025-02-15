import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  private minPriceSubject = new BehaviorSubject<number | null>(null);
  private maxPriceSubject = new BehaviorSubject<number | null>(null);
  private selectedColorsSubject = new BehaviorSubject<string[]>([]);
  private selectedConditionsSubject = new BehaviorSubject<string[]>([]);

  minPrice$ = this.minPriceSubject.asObservable();
  maxPrice$ = this.maxPriceSubject.asObservable();
  selectedColors$ = this.selectedColorsSubject.asObservable();
  selectedConditions$ = this.selectedConditionsSubject.asObservable();

  setMinPrice(value: string) {
    this.minPriceSubject.next(value ? Number(value) : null);
  }

  setMaxPrice(value: string) {
    this.maxPriceSubject.next(value ? Number(value) : null);
  }

  getMinPrice(): number | null {
    return this.minPriceSubject.value;
  }

  getMaxPrice(): number | null {
    return this.maxPriceSubject.value;
  }

  setSelectedColors(colors: string[]) {
    this.selectedColorsSubject.next(colors);
  }

  getSelectedColors(): string[] {
    return this.selectedColorsSubject.value;
  }

  setSelectedConditions(conditions: string[]) {
    this.selectedConditionsSubject.next(conditions);
  }

  getSelectedConditions(): string[] {
    return this.selectedConditionsSubject.value;
  }
}