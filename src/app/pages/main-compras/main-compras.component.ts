import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-main-compras',
  templateUrl: './main-compras.component.html',
  styleUrl: './main-compras.component.css'
})
export class MainComprasComponent {

  constructor(
    private appComponent: AppComponent
  ) {
    this.appComponent.login = false
  }
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '365px'
    };
  }

}
