import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrl: './main-ventas.component.css'
})
export class MainVentasComponent {
  constructor(
    private appComponent: AppComponent
  ) {
    this.appComponent.login = false
  }
}
