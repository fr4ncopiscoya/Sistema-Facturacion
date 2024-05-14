import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-main-inventario',
  templateUrl: './main-inventario.component.html',
  styleUrl: './main-inventario.component.css'
})
export class MainInventarioComponent {
  constructor(
    private appComponent : AppComponent
  ){
    this.appComponent.login = false
  }
}
