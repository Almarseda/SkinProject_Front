import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product-services.service';
import { PriceComponent } from "../filters/price/price.component";
import { ColorComponent } from "../filters/color/color.component";
import { ConditionComponent } from "../filters/condition/condition.component";
import { RarityComponent } from "../filters/rarity/rarity.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PriceComponent, ColorComponent, ConditionComponent, RarityComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


}
