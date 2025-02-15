import { Component, inject } from '@angular/core';
import { FilterServicesService } from '../../../services/filter-services.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  filterService = inject(FilterServicesService);
  minPrice: number | null = null;
  maxPrice: number | null = null;

  onMinPriceChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.minPrice = value ? Number(value) : null;
    this.filterService.setMinPrice(value);
  }

  onMaxPriceChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.maxPrice = value ? Number(value) : null;
    this.filterService.setMaxPrice(value);
  }
}
