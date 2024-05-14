import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-main-clientes',
  templateUrl: './main-clientes.component.html',
  styleUrl: './main-clientes.component.css'
})
export class MainClientesComponent {

  constructor(
    private appComponent : AppComponent
  ) {
    this.appComponent.login = false
  }

}
