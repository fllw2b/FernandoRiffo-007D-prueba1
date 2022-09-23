import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListarHistorialComponent } from './componentes/listar-historial/listar-historial.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListarAlumnosComponent,
    HistorialComponent,
    ListarHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
