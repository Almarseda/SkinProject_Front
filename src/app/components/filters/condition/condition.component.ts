import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-services.service';
import { FilterServicesService } from '../../../services/filter-services.service';

@Component({
  selector: 'app-condition',
  standalone: true,
  imports: [],
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.css'
})
export class ConditionComponent {
  private productService = inject(ProductService);
  private filterService = inject(FilterServicesService);

  conditions: string[] = [];
  selectedConditions: string[] = [];

  ngOnInit() {
    this.conditions = this.productService.getCondition();
  }

  onConditionChange(condition: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedConditions.push(condition);
    } else {
      this.selectedConditions = this.selectedConditions.filter(c => c !== condition);
    }

    this.filterService.setSelectedConditions(this.selectedConditions);
  }
}