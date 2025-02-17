import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { HighlightMatchDirective } from '../../directives/highlight-match.directive';

// Asegura la ruta correcta

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [FontAwesomeModule, HighlightMatchDirective], // Ahora debe reconocer la directiva
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  faClock = faClock;
  faDot = faDotCircle;
  @Input() product: Product | null = null;
}