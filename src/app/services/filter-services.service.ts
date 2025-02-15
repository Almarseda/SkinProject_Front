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
  private selectedRaritiesSubject = new BehaviorSubject<string[]>([])
  private searchQuerySubject = new BehaviorSubject<string>('');

  minPrice$ = this.minPriceSubject.asObservable();
  maxPrice$ = this.maxPriceSubject.asObservable();
  selectedColors$ = this.selectedColorsSubject.asObservable();
  selectedConditions$ = this.selectedConditionsSubject.asObservable();
  selectedRarities$ = this.selectedRaritiesSubject.asObservable();
  searchQuery$ = this.searchQuerySubject.asObservable();


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

  setSelectedRarities(rarities: string[]) {
    this.selectedRaritiesSubject.next(rarities);
  }

  getSelectedRarities(): string[] {
    return this.selectedRaritiesSubject.value
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  getSearchQuery(): string {
    return this.searchQuerySubject.value;
  }
}