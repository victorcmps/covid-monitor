import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Covid19Service } from '../services/covid19.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MenuComponent } from './menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../services/search.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let covidService: Covid19Service;
  let search: SearchService;
  let mockedData = [
    {
      active: 3934,
      activePerOneMillion: 99.25,
      cases: 59015,
      casesPerOneMillion: 1489,
      continent: 'Asia',
      country: 'Afghanistan',
      countryInfo: { _id: 4, iso2: 'AF', iso3: 'AFG', lat: 33, long: 65 },
      critical: 1124,
      criticalPerOneMillion: 28.36,
      deaths: 2592,
      deathsPerOneMillion: 65,
      oneCasePerPeople: 672,
      oneDeathPerPeople: 15292,
      oneTestPerPeople: 100,
      population: 39636165,
      recovered: 52489,
      recoveredPerOneMillion: 1324.27,
      tests: 395395,
      testsPerOneMillion: 9976,
      todayCases: 168,
      todayDeaths: 10,
      todayRecovered: 97,
      undefined: 99,
      updated: 1619375565852,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [HttpClientTestingModule],
      providers: [Covid19Service],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    covidService = TestBed.inject(Covid19Service);
    search = TestBed.inject(SearchService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an country list', fakeAsync(() => {
    spyOn(covidService, 'getCountriesData').and.returnValue(of(mockedData));

    covidService.getCountriesData().subscribe();

    fixture.detectChanges();

    component.getCountries();

    expect(covidService.getCountriesData).toHaveBeenCalledWith();
    expect(component.countriesData).toEqual(mockedData);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the search field', fakeAsync(() => {
    const searchCountry = {
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
      updated: 1619462581745,
    };
    mockedData = [...mockedData, ...[searchCountry]];

    spyOn(covidService, 'getCountriesData').and.returnValue(of(mockedData));
    covidService.getCountriesData().subscribe();
    component.searchCountry('Brazil');

    fixture.detectChanges();

    component.getCountries();

    expect(covidService.getCountriesData).toHaveBeenCalledWith();
    expect(component.countriesData).toEqual([searchCountry]);
  }));
});
