import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search = new BehaviorSubject('');
  search$ = this.search.asObservable();


  searchCountry(event): void {
    this.search.next(event);
  }
}
