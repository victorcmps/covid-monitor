import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries.model';
import { AllCountries } from '../models/all-countries.model';
import { CountryHistory } from '../models/countries-history.model';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  getAllCovidData(): Observable<AllCountries> {
    return this.http.get<AllCountries>(`https://disease.sh/v3/covid-19/all`);
  }

  getCountriesData(country?: number): Observable<Countries[]> {
    return this.http.get<Countries[]>(`https://disease.sh/v3/covid-19/countries/${country || ''}`);
  }

  getHistory(country?: number): Observable<CountryHistory> {
    return this.http.get<CountryHistory>(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=10`);
  }
}
