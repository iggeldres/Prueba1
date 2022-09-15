import { Component, Output, EventEmitter } from '@angular/core';
import {Seccion} from './../../../modelos/seccion'
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  public seccion: Seccion ={
    idSeccion:'', //input
    nombreSeccion:'', //input


  }

  public inpid(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.idSeccion = elemento.value
  }

  public inpnombreseccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = elemento.value
  }



  @Output()public enviarSeccion = new EventEmitter<Seccion>()
  public guardarElemnto(){
    const copia: Seccion ={
      ...this.seccion
    }
    this.enviarSeccion.emit(copia);

    this.seccion = {
      idSeccion: "",
      nombreSeccion:"",
    }
  }




}
