import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Countries } from '../models/countries.model';
import { Covid19Service } from '../services/covid19.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  countriesData: Countries[];

  constructor(
    private covidService: Covid19Service,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
   this.getCountries();
  }

  getCountries(): void {
    combineLatest([
      this.covidService.getCountriesData(),
      this.searchService.search$,
    ]).subscribe(([countries, search]) => {
      this.countriesData = countries.filter((country) => {
        if (
          country.country
            .toString()
            .toLowerCase()
            .indexOf(search.toLowerCase()) !== -1
        ) {
          return true;
        }
        return false;
      });
    });
  }

  searchCountry(event): void {
    this.searchService.searchCountry(event);
  }
}
