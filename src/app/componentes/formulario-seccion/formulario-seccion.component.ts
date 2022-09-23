import { Component, EventEmitter, Output } from '@angular/core';
import { Seccion } from '../../modelos/seccion'

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output()

  public enviarSeccion = new EventEmitter<Seccion>;

  public seccion: Seccion = {
    id: 0,
    nombre: ''
  }

  public cambiarNombre(evento: Event): void{
    const variable = evento.target as HTMLInputElement;
    this.seccion.nombre = variable.value;
  }

  public guardarSeccion(): void{
    const copia: Seccion = {
      ...this.seccion
    }

    this.enviarSeccion.emit(copia);
    this.seccion.id = 0;
    this.seccion.nombre = '';
  }
}
