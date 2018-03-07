import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService} from './banda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BandaService]
})
export class AppComponent implements OnInit {
  titulo = 'Mis bandas favoritas';
  bandas : Banda[];
  banda : Banda;
  constructor(private bandaService:BandaService) { }
  getBandas(): void{
    this.bandaService.getBandas().then(bandas => this.bandas=bandas);
  }
  ngOnInit():void{
    this.getBandas();
  }
  Seleccionar(item: Banda): void{
    this.banda = item;
  }
  
}
