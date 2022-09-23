import { Component, Input } from '@angular/core';
import { Alumno } from './modelos/alumno'
import { Seccion} from './modelos/seccion'
import { Historial } from './modelos/historial'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input()

  public listaAlumnos: Array<Alumno> = [
  ]

  public listaSecciones: Array<Seccion> = [
    {id: 1,
    nombre: 'Sin Sección'}
  ]

  public listaHistorial: Array<Historial> = [
  ]

  public guardarAlumno(nuevo: Alumno): void{
    this.listaAlumnos.push(nuevo)
    this.guardarHistorial(nuevo)
  }

  public guardarSeccion(nuevo: Seccion): void {
    this.listaSecciones.push(nuevo)
  }

  public guardarHistorial(nuevo: Alumno): void{
    const variable: Historial = {
      fecha: new Date(),
      alumno: nuevo,
    }
    this.listaHistorial.push(variable)
  }


}
