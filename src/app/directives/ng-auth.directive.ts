import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SesionService } from '../services/sesion.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appNgAuth]',
  standalone: true
})
export class NgAuthDirective implements OnInit, OnDestroy {
  @Input() appNgAuth: boolean = true;
  private authSubscription!: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    // Suscribirse a la auth
    this.authSubscription = this.sesionService.isAuthenticated$.subscribe(isAuthenticated => {
      this.updateVisibility(isAuthenticated);
    });

    // Configurar para que se vea si estas auth o no
    this.updateVisibility(this.sesionService.isAuthenticated());
  }

  private updateVisibility(isAuthenticated: boolean): void {
    if ((this.appNgAuth && !isAuthenticated) || (!this.appNgAuth && isAuthenticated)) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
    }
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}