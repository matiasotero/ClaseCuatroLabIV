import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nombre: string = "https://www.google.com.ar";
  mostrar:boolean = false;
  dato:number = 0;
  ruta:string="/assets/Koala.jpg";
  tamanio:number=5;
  posicion:string="absolute";

  MostrarNombre(){
    console.log(this.nombre);
  }
  
}
