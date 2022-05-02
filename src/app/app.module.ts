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
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitasComponent } from './pages/citas/citas.component';
import { RecaptchaFormsModule, RecaptchaV3Module, RECAPTCHA_LANGUAGE, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './private/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CargoComponent } from './private/gestion/cargo/cargo.component';
import { CargosComponent } from './private/gestion/cargos/cargos.component';

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
    ContactanosComponent,
    CitasComponent,
    EquipoComponent,
    ContactanosComponent,
    LoginComponent,
    CargoComponent,
    CargosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    HttpClientModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "es"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
