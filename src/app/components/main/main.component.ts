import { Component, inject } from '@angular/core';
import { ButtonService } from '../../services/button.service';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProductsComponent } from "../products/products.component";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0%)', opacity: 1, width: '16rem' })), // Sidebar visible
      state('out', style({ transform: 'translateX(-100%)', opacity: 0, width: '0' })), // Sidebar oculto
      transition('in => out', [
        animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)', width: '0' }))
      ]),
      transition('out => in', [
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)', width: '16rem' }))
      ]),
    ])
  ]
})
export class MainComponent {
  private buttonService = inject(ButtonService);
  isSidebarVisible = true;
  showSidebar = true;

  constructor() {
    this.buttonService.filtersVisible$.subscribe(visible => {
      if (!visible) {

        this.isSidebarVisible = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 300);
      } else {

        this.showSidebar = true;
        setTimeout(() => {
          this.isSidebarVisible = true;
          initFlowbite();
        }, 10);
      }
    });
  }

  get animationState() {
    return this.isSidebarVisible ? 'in' : 'out';
  }
}
