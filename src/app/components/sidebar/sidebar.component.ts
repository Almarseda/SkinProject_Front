import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() stateChange = new EventEmitter<string[]>();

  arrEstados: string[] = []
  arrRareza: string[] = []

  selectedEstados: string[] = [];

  productService = inject(ProductService)

  ngOnInit() {
    this.arrEstados = this.productService.getCondition();
    this.selectedEstados = [...this.arrEstados];
    this.stateChange.emit(this.selectedEstados);
    console.log(this.arrEstados);
  }

  onStateChange(event: any) {
    const estado = event.target.value;
    if (event.target.checked) {
      this.selectedEstados.push(estado);
    } else {
      this.selectedEstados = this.selectedEstados.filter(e => e !== estado);
    }
    this.stateChange.emit(this.selectedEstados);
  }
}
