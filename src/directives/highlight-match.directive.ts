import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterServicesService } from '../app/services/filter-services.service';


@Directive({
  selector: '[appHighlightMatch]', // Coincidir con lo que usas en el HTML
  standalone: true,  // Debe ser standalone 
})
export class HighlightMatchDirective implements OnInit, OnDestroy {
  @Input() text: string = ''; // Evita que Angular reciba undefined

  private searchTerm: string = '';
  private subscription!: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private filterService: FilterServicesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.filterService.searchQuery$.subscribe(query => {
      this.searchTerm = query.toLowerCase().trim();
      this.highlightText();
    });
  }

  private highlightText() {
    if (!this.searchTerm) {
      this.el.nativeElement.innerHTML = this.text;
      return;
    }

    const regex = new RegExp(`(${this.escapeRegExp(this.searchTerm)})`, 'gi');
    const highlightedText = this.text.replace(regex, `<span class="bg-yellow-300 text-black px-1 rounded">$1</span>`);

    this.el.nativeElement.innerHTML = highlightedText;
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}