import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-services.service';
import { FilterServicesService } from '../../../services/filter-services.service';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {

  private productService = inject(ProductService)
  private filterService = inject(FilterServicesService)

  colors: string[] = []

  ngOnInit() {
    this.colors = this.productService.getColors()
  }
}
