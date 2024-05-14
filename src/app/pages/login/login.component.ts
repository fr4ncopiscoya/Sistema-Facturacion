import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {
    this.appComponent.login = true;
  }

  ingresarUsuario() {
    localStorage.setItem("session-dashboard", 'session-dashboard');
    this.router.navigateByUrl('/dashboard')
  }
}
