import { Component, inject } from '@angular/core';
import { PriceComponent } from "../filters/price/price.component";
import { ColorComponent } from "../filters/color/color.component";
import { ConditionComponent } from "../filters/condition/condition.component";
import { RarityComponent } from "../filters/rarity/rarity.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PriceComponent, ColorComponent, ConditionComponent, RarityComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor() { }
}