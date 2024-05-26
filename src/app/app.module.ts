import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainClientesComponent } from './pages/main-clientes/main-clientes.component';
import { MainInventarioComponent } from './pages/main-inventario/main-inventario.component';
import { MainVentasComponent } from './pages/main-ventas/main-ventas.component';
import { MainComprasComponent } from './pages/main-compras/main-compras.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { InputMaskModule } from '@ngneat/input-mask';
import { AuthService } from './services/auth.service';
import { HttpClientUtils } from './utils/http-client.utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../app/interceptors/auth.interceptor';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MainClientesComponent,
    MainInventarioComponent,
    MainVentasComponent,
    MainComprasComponent,
    ToastComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    NgbModule,
    NgSelectModule,
    InputMaskModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    provideClientHydration()
  ],
  exports: [
    ToastComponent // Si necesitas usar el componente en otros módulos, también puedes exportarlo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
