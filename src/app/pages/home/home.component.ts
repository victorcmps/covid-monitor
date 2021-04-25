import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../../core/services/covid19.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCovidData: any;

  constructor(private covidService: Covid19Service) { }

  ngOnInit(): void {
  }

}
