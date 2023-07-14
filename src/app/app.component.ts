import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gft-fe-gc-angular_componentes_problema3-07-2023';
  datosRecibidos: any[] | undefined;
  itemSelect:number | undefined;

  recibirDatos(datos: any) {
    this.datosRecibidos = datos;
  }

  deleteItem(itemID:number){
    let index = this.datosRecibidos!.findIndex(item => item.codigo === itemID);
    if (index !== -1) {
      this.datosRecibidos!.splice(index, 1);
    }
    
  }

  selectItem(itemID:number){
    let index = this.datosRecibidos!.findIndex(item => item.codigo === itemID);
    this.itemSelect = index;
  }
}
