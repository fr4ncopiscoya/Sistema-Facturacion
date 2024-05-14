import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-main-compras',
  templateUrl: './main-compras.component.html',
  styleUrl: './main-compras.component.css'
})
export class MainComprasComponent {

  constructor(
    private appComponent : AppComponent
  ){
    this.appComponent.login = false
  }
}
