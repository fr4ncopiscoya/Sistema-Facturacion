import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MainClientesComponent } from './pages/main-clientes/main-clientes.component';
import { MainVentasComponent } from './pages/main-ventas/main-ventas.component';
import { MainComprasComponent } from './pages/main-compras/main-compras.component';
import { MainInventarioComponent } from './pages/main-inventario/main-inventario.component';
import { AuthGuard } from './guards/auth.guard';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'clientes', component: MainClientesComponent, canActivate: [AuthGuard] },
  { path: 'ventas', component: MainVentasComponent, canActivate: [AuthGuard] },
  { path: 'compras', component: MainComprasComponent, canActivate: [AuthGuard] },
  { path: 'inventario', component: MainInventarioComponent, canActivate: [AuthGuard] },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
