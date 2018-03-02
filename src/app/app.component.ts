import { Component } from '@angular/core';

export class Banda{
  id:number;
  nombre:string;
  constructor(id,nombre){
    this.id=id;
    this.nombre=nombre;
  }
}
const BANDAS:Banda[]=[
  {id: 11, nombre: 'sebastian yatra'},
  {id: 12, nombre: 'felipe santos'},
  {id: 13, nombre: 'camila'},
  {id: 14, nombre: 'noriel'},
  {id: 15, nombre: 'piso 21'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis bandas favoritas';
  bandas = BANDAS;

  banda : Banda;
  Seleccionar(item: Banda): void{
    this.banda = item;
  }
  
}
