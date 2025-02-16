import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private filtersVisible = new BehaviorSubject<boolean>(true);
  filtersVisible$ = this.filtersVisible.asObservable();

  toggleFilters() {
    this.filtersVisible.next(!this.filtersVisible.value);
  }
}