import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  getAllCovidData(): Observable<any> {
    return this.http.get('https://disease.sh/v3/covid-19/all');
  }

  getCountriesData(): Observable<any> {
    return this.http.get('https://disease.sh/v3/covid-19/countries');
  }

  getCountry(country): Observable<any> {
    return this.http.get('');
  }
}
