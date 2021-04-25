import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Covid19Service } from './covid19.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

describe('Covid19Service', () => {
  let service: Covid19Service;
  const mockResponse = [
    [
      {
        updated: 0,
        country: 'string',
        countryInfo: {
          _id: 0,
          iso2: 'string',
          iso3: 'string',
          lat: 0,
          long: 0,
          flag: 'string',
        },
        cases: 0,
        todayCases: 0,
        deaths: 0,
        todayDeaths: 0,
        recovered: 0,
        todayRecovered: 0,
        active: 0,
        critical: 0,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        tests: 0,
        testsPerOneMillion: 0,
        population: 0,
        continent: 0,
        oneCasePerPeople: 0,
        oneDeathPerPeople: 0,
        oneTestPerPeople: 0,
        activePerOneMillion: 0,
        recoveredPerOneMillion: 0,
        criticalPerOneMillion: 0,
      },
    ],
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpTestingController],
    });
    service = TestBed.inject(Covid19Service);
  });

  it('deve retornar a lista de países', inject(
    [Covid19Service],
    (covid19Service: Covid19Service) => {
      covid19Service.getCountriesData().subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockResponse);
        }
      });
    }
  ));

  it('deve retornar um país específico', inject(
    [Covid19Service],
    (covid19Service: Covid19Service) => {
      const country = 'Brazil';
      covid19Service.getCountry(country).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockResponse);
        }
      });
    }
  ));
});
