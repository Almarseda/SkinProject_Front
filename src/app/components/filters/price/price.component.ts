import { Component } from '@angular/core';
import { FilterServicesService } from '../../../services/filter-services.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {

  minPrice: number;
  maxPrice: number;

  constructor(private priceFilterService: FilterServicesService) {
    this.minPrice = 0;
    this.maxPrice = 0;
  }

  onMinPriceChange(event: any): void {
    this.minPrice = event.target.value;
    this.priceFilterService.setMinPrice(this.minPrice);
  }

  onMaxPriceChange(event: any): void {
    this.maxPrice = event.target.value;
    this.priceFilterService.setMaxPrice(this.maxPrice);
  }
}

