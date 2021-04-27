import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/core/models/countries.model';
import { CountryHistory } from 'src/app/core/models/countries-history.model';
import { Covid19Service } from 'src/app/core/services/covid19.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  chartColorScheme = {
    domain: ['#35a8e0', '#49b0e3', '#5db9e6', '#71c2e9', '#85caec'],
  };

  countryData: Countries[];
  casesTimeline: Array<object>;
  historicErrorMsg: string;
  constructor(
    private covidService: Covid19Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.covidService.getCountriesData(params.id).subscribe((country) => {
        this.countryData = country;
        this.getHistory(params);
      });
    });
  }

  getHistory(params): void {
    this.covidService.getHistory(params.id).subscribe(
      (history) => {
        this.casesTimeline = [];
        const keys = Object.keys(history.timeline.cases);
        const values = Object.values(history.timeline.cases);

        keys.forEach((key, index) => {
          this.casesTimeline.push({ name: key, value: values[index] });
        });
      }, err => {
        this.casesTimeline = [];
        this.historicErrorMsg = 'Country doesn\'t have any historical data';
      },
    );
  }
}
