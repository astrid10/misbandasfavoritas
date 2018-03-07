import { Injectable } from "@angular/core";

import { Banda } from './banda';
import { BANDAS } from './bandas-falsas';


@Injectable()
export class BandaService{

    getBandas():Promise<Banda[]>{
        return new Promise(resolve =>{
            setTimeout(() => resolve(BANDAS), 3000);
                
            
        });
    }
}