import { Component, Input } from '@angular/core';
import { Historial } from '../../modelos/historial';
@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.scss']
})
export class ListarHistorialComponent {
  @Input()
  public historiales: Array<Historial> = [];
}
