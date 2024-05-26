import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  username: string = '';
  password: string = '';
  loading = false;
  error = '';
  showSpinner = false;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private authService: AuthService,
  ) {
    this.appComponent.login = true;
  }

  login() {
    this.loading = true; // Muestra el estado de carga
    this.error = ''; // Limpia cualquier mensaje de error anterior
    this.showSpinner = true; // Muestra la animación de carga

    let post = {
      username: this.username,
      password: this.password
    };

    this.authService.login(post).subscribe({
      next: (data: any) => {
        console.log("data-login: ", data);
        if (data) {
          setTimeout(() => {
            this.router.navigate(['/dashboard',]);
          }, 2000);
        } else {
          this.error = 'Inicio de sesión incorrecto';
          this.showSpinner = false; // Oculta la animación de carga cuando hay un error
          this.loading = false; // Restablece el estado de carga a false
        }
      },
      error: (error: any) => {
        console.log(error);
        this.error = 'Error en el servidor';
        this.showSpinner = false; // Oculta la animación de carga cuando hay un error
        this.loading = false; // Restablece el estado de carga a false
      },
      complete: () => {
        this.loading = false; // Restablece el estado de carga a false cuando la solicitud se completa
      }
    });
  }
  // login() {
  //   let post = {
  //     username: this.username,
  //     password: this.password
  //   };
  //   this.loading = true;
  //   this.authService.login(post).subscribe(
  //     (response) => {
  //       const token = response.token;
  //       localStorage.setItem('token', token);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     (error) => {
  //       this.error = 'Login failed';
  //       this.loading = false;
  //     }
  //   );
  // }

  ingresarUsuario() {
    // localStorage.setItem("session-dashboard", 'session-dashboard');
    // this.router.navigateByUrl('/dashboard')
  }
}
