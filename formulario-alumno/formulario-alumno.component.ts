import { Component,Output,EventEmitter} from '@angular/core';
import {Alumnos} from './../../../modelos/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {

  public seccion: Array<string> = [
  ]

  public alumno: Alumnos ={
    rut:'', //input
    nombre:'', //input
    apellido:'', //input
    edad: 0, //input
    seccion:'', //input

  }

  public inprut(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.rut = elemento.value
  }

  public inpnombre(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.nombre = elemento.value
  }

  public inpapellido(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.apellido= elemento.value
  }

  public inpedad(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(elemento.value)
  }

  public inpseccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.alumno.seccion = elemento.value
  }

  @Output()public enviaralumno = new EventEmitter<Alumnos>()
  public guardarElemnto(){
    const copia: Alumnos ={
      ...this.alumno
    }
    this.enviaralumno.emit(copia);

    this.alumno = {
      rut: "",
      nombre:"",
      apellido:"",
      edad:0,
      seccion: ""
    }
  }



}
