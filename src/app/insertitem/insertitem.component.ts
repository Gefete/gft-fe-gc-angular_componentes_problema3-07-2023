import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-insertitem',
  templateUrl: './insertitem.component.html',
  styleUrls: ['./insertitem.component.css']
})
export class InsertitemComponent {
  /* En este ejercicio se practica el uso de recibir y enviar datos desde el componente hijo */

  // Array de items que sale hacia el padre
  @Output() 
  productListPush:any = new EventEmitter<any[]>();

  // Array que recibe hacia el hijo (este componente)
  @Input()
  producListPull:any[] | undefined;

  codigo:number|undefined;
  descripcion:string|undefined;
  precio:number|undefined;
  datos:any[]=[];
  
  // Metodo que añade el item creado (siempre que el codigo no se repita) y lo envia al componente padre
  enviarDatos() {
    if(this.datos.find(codigo=>codigo.codigo == this.codigo)){
      // muestra una alerta de item duplicado (solo comprueva el ID)
      alert("Codigo utilizado por otro producto")
    }else if(this.codigo! < 0 || this.codigo == undefined){
      alert("Numero de codigo no valido");
    }else{
      this.datos.push({
        "codigo":this.codigo,
        "descripcion":this.descripcion,
        "precio":this.precio
      });
      this.productListPush.emit(this.datos);
    }
  }

 /*  generateProduct(){

  }
  modifyProduct(){

  } */
}
