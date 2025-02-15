import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-services.service';
import { FilterServicesService } from '../../../services/filter-services.service';

@Component({
  selector: 'app-rarity',
  standalone: true,
  imports: [],
  templateUrl: './rarity.component.html',
  styleUrl: './rarity.component.css'
})
export class RarityComponent {
  private productService = inject(ProductService);
  private filterService = inject(FilterServicesService);

  rarities: string[] = [];
  selectedRarities: string[] = [];

  ngOnInit() {
    this.rarities = this.productService.getRarity();
  }

  onRarityChange(rarity: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedRarities.push(rarity);
    } else {
      this.selectedRarities = this.selectedRarities.filter(c => c !== rarity);
    }

    this.filterService.setSelectedRarities(this.selectedRarities);
  }
}
