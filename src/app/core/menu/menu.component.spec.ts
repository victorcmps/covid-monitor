import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Covid19Service } from '../services/covid19.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let covidService: Covid19Service;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
        Covid19Service
    ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    covidService = TestBed.createComponent(Covid19Service);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar uma lista de países', () => {
    const mockedData = {
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
    };

    spyOn(covidService, 'getCountriesData').and.returnValue(
      of([mockedData]).pipe(delay(1))
    );

    fixture.detectChanges();

    expect(component.countriesData).toBeUndefined();
    expect(covidService.getCountriesData).toHaveBeenCalledWith();
    tick(1);

    expect(component.countriesData).toEqual([mockedData]);
  });
});
