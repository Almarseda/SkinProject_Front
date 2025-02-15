import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product-services.service';
import { PriceComponent } from "../filters/price/price.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PriceComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @Output() stateChange = new EventEmitter<string[]>();

  arrEstados: string[] = [];
  selectedEstados: string[] = [];

  productService = inject(ProductService);

  ngOnInit() {
    this.arrEstados = this.productService.getCondition();
  }

  onStateChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const estado = checkbox.value;

    if (checkbox.checked) {
      this.selectedEstados.push(estado);
    } else {
      this.selectedEstados = this.selectedEstados.filter(e => e !== estado);
    }

    this.stateChange.emit(this.selectedEstados);
  }
}
