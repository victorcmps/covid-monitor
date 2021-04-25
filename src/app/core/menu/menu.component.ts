import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  countriesData: any;

  constructor(private covidService: Covid19Service) { }

  ngOnInit(): void {
    this.getCountriesList();
  }

  getCountriesList() {
    this.covidService.getCountriesData().subscribe(countries => {
    this.countriesData = countries;
    });
  }

  getCountry(country) {

  }

}
