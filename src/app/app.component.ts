import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno'
import { Seccion} from './modelos/seccion'
import { Historial } from './modelos/historial'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaAlumnos: Array<Alumno> = [
    {rut: '12345678',
    nombre: 'Fernando',
    apellido: 'Riffo',
    edad: 21,
    seccion: {id: 1, nombre: '007D'}
    }
  ]
  public listaSecciones: Array<Seccion> = [
    {id: 1,
    nombre: '007D'}
  ]
  public listaHistorial: Array<Seccion> = [

  ]
}
