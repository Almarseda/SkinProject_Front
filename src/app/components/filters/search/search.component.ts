import { Component, inject } from '@angular/core';
import { FilterServicesService } from '../../../services/filter-services.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private filterService = inject(FilterServicesService);

  faGlass = faMagnifyingGlass

  searchControl = new FormControl('');

  ngOnInit() {

    /* this.searchControl.valueChanges.subscribe(value => {
      this.filterService.setSearchQuery(value || '');
    }); */

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filterService.setSearchQuery(value || '');
    });
  }
}