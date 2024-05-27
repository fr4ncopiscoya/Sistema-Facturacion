import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
  ) {
    this.appComponent.login = false;
  }

  dtOptions: Config = {};
  dtOptionsVendidos: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '162px'
    };
    this.dtOptionsVendidos = {
      pagingType: 'full_numbers',
      scrollY: '162px'
    };
  }

}
