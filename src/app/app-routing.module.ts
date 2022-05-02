import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {QuienesSomosComponent} from './pages/quienes-somos/quienes-somos.component';
import {ServiciosComponent} from './pages/servicios/servicios.component';
import {EmpleadosComponent} from "./private/gestion/empleados/empleados.component";
import {EmpleadoComponent} from "./private/gestion/empleado/empleado.component";
import {MultiserviciosComponent} from "./private/gestion/multiservicios/multiservicios.component";
import {MultiservicioComponent} from "./private/gestion/multiservicio/multiservicio.component";
import {ContactanosComponent} from './pages/contactanos/contactanos.component';
import { CitasComponent } from './pages/citas/citas.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { LoginComponent } from './private/auth/login/login.component';
import { CargosComponent } from './private/gestion/cargos/cargos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/empleados', component: EmpleadosComponent},
  {path: 'admin/empleado', component: EmpleadoComponent},
  {path: 'admin/servicios', component: MultiserviciosComponent},
  {path: 'admin/servicio', component: MultiservicioComponent},
  {path: 'admin/cargos', component: CargosComponent},
  // { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
