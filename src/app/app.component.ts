import { Component, inject } from '@angular/core';
import { ProductsComponent } from "./components/products/products.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ButtonService } from './services/button.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0%)', opacity: 1, width: '16rem' })),
      state('out', style({ transform: 'translateX(-100%)', opacity: 0, width: '0' })),
      transition('in => out', [
        animate('700ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)', width: '0' }))
      ]),
      transition('out => in', [
        animate('700ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)', width: '16rem' }))
      ]),
    ])
  ]
})
export class AppComponent {
  private buttonService = inject(ButtonService);
  isSidebarVisible = true;
  showSidebar = true;

  constructor() {
    this.buttonService.filtersVisible$.subscribe(visible => {
      if (!visible) {

        this.isSidebarVisible = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 800);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.isSidebarVisible = true;
        }, 10);
      }
    });
  }

  get animationState() {
    return this.isSidebarVisible ? 'in' : 'out';
  }
  ngOnInit(): void {
    initFlowbite();
  }
}