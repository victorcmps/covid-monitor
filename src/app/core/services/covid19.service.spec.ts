import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Covid19Service } from './covid19.service';

describe('Covid19Service', () => {
  let service: Covid19Service;
  let httpMock: HttpTestingController;
  const mockResponse = [
    [
      {
        active: 1140693,
        activePerOneMillion: 5335.56,
        cases: 14340787,
        casesPerOneMillion: 67079,
        continent: 'South America',
        country: 'Brazil',
        countryInfo: { _id: 76, iso2: 'BR', iso3: 'BRA', lat: -10, long: -55 },
        critical: 8318,
        criticalPerOneMillion: 38.91,
        deaths: 390925,
        deathsPerOneMillion: 1829,
        oneCasePerPeople: 15,
        oneDeathPerPeople: 547,
        oneTestPerPeople: 5,
        population: 213790656,
        recovered: 12809169,
        recoveredPerOneMillion: 59914.54,
        tests: 43538104,
        testsPerOneMillion: 203648,
        todayCases: 0,
        todayDeaths: 0,
        todayRecovered: 0,
        undefined: 5336,
        updated: 1619452979746,
      },
    ],
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Covid19Service],
    });
    service = TestBed.inject(Covid19Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should test the getCountriesData method', () => {
    service.getCountriesData(76).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      'https://disease.sh/v3/covid-19/countries/76'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should test the getAllCovidData method', () => {
    service.getAllCovidData().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      'https://disease.sh/v3/covid-19/all'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
