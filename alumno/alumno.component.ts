import { Component, Input } from '@angular/core';
import {Alumnos} from './../../../modelos/alumno'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() public alumno!: Alumnos;



}
