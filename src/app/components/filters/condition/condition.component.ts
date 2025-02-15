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

  private productService = inject(ProductService)
  private filterService = inject(FilterServicesService)

  conditions: string[] = []

  ngOnInit() {
    this.conditions = this.productService.getCondition()
  }

}
