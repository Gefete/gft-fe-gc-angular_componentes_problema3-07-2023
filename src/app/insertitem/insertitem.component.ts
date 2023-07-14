import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-insertitem',
  templateUrl: './insertitem.component.html',
  styleUrls: ['./insertitem.component.css']
})
export class InsertitemComponent implements OnChanges {
 
  /* En este ejercicio se practica el uso de recibir y enviar datos desde el componente hijo */

  // Array de items que sale/envia hacia el padre
  @Output() 
  productListPush:any = new EventEmitter<any[]>();

  // Array que recibe del padre al hijo (este componente)
  @Input()
  producListPull:any[] | undefined;

  // item seleccionado
  @Input()
  itemSelected:any | undefined;


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

  /* 
    Metodo predeterminado de Angular utilizado para saber cuando uno de 
    sus argumentos ha cambiado (en el componente app/"padre" se pasan) y asi proceder con una acción desde el componente hijo.
    En este ejercicio se utiliza para saber cuando se da desde el padre al botón seleccionar 
    y asi procesar los datos en el hijo y ponerlos en el formulario,
    dejandolo listo para poder modificarlo desde otro metodo.
  */
  ngOnChanges(changes: SimpleChanges): void {
    // Comprueba que asgumento es el que cambia (itemSelect) y tambien comprueba que la array no este vacia
    if (changes['itemSelected'] && this.producListPull != undefined) {
      this.codigo = this.producListPull![this.itemSelected].codigo;
      this.descripcion = this.producListPull![this.itemSelected].descripcion;
      this.precio = this.producListPull![this.itemSelected].precio;
    }
  }

  modifyProduct(itemID:any){
    if(itemID!=undefined || itemID!=null || this.producListPull!.findIndex(item => item.codigo === itemID)>=0){
      let index = this.producListPull!.findIndex(item => item.codigo === itemID);
      this.producListPull![index]={
        "codigo":this.codigo,
        "descripcion":this.descripcion,
        "precio":this.precio
      }
    }
  }
}
