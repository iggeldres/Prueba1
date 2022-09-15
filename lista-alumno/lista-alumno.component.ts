import { Component, Input} from '@angular/core';
import {Alumnos} from './../../../modelos/alumno'

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent {
  @Input() public lista!: Array<Alumnos>;
}
