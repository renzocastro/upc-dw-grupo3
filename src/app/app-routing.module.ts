import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {QuienesSomosComponent} from './pages/quienes-somos/quienes-somos.component';
import {ServiciosComponent} from './pages/servicios/servicios.component';
import {EmpleadosComponent} from "./private/gestion/empleados/empleados.component";
import {EmpleadoComponent} from "./private/gestion/empleado/empleado.component";
import {MultiserviciosComponent} from "./private/gestion/multiservicios/multiservicios.component";
import {MultiservicioComponent} from "./private/gestion/multiservicio/multiservicio.component";
import { EquipoComponent } from './pages/equipo/equipo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'privado/empleados', component: EmpleadosComponent},
  {path: 'privado/empleado', component: EmpleadoComponent},
  {path: 'privado/servicios', component: MultiserviciosComponent},
  {path: 'privado/servicio', component: MultiservicioComponent}
  // { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
