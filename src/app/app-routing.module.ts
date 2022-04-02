import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import {EmpleadosComponent} from "./private/gestion/empleados/empleados.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: 'privado/empleados', component: EmpleadosComponent}
  // { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
