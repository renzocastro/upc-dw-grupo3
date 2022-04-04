import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EmpleadosComponent } from './private/gestion/empleados/empleados.component';
import { EmpleadoComponent } from './private/gestion/empleado/empleado.component';
import { MultiserviciosComponent } from './private/gestion/multiservicios/multiservicios.component';
import { MultiservicioComponent } from './private/gestion/multiservicio/multiservicio.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    MultiserviciosComponent,
    MultiservicioComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
