import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../modelos/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {

  public enviarAlumno = new EventEmitter<Alumno>;

  public alumnos: Array<Alumno> = [];

  public alumno: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion: {id: 0, nombre: ''}
  }

  public cambiarRut(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.alumno.rut = variable.value;
  }
  public cambiarNombre(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.alumno.nombre = variable.value;
  }
  public cambiarApellido(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.alumno.apellido = variable.value;
  }
  public cambiarEdad(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(variable.value);
  }

  public cambiarSeccion(evento: Event): void{
    const variable = evento.target as HTMLSelectElement;
    this.alumno.seccion.nombre = variable.value;
  }

  public guardarAlumno(): void{
    const copia: Alumno = {
      ...this.alumno
    }

    this.enviarAlumno.emit(copia)
    this.alumno.rut = '';
    this.alumno.nombre = '';
    this.alumno.apellido = '';
    this.alumno.edad = 0;
    this.alumno.seccion.nombre = '';
  }
}
