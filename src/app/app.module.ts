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
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
