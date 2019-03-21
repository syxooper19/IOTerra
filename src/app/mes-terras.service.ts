import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MesTerrasService {

  listeTerra      :   Array<any>    =   new Array();
    
  //Contient le nom du terra actuel
  terraActuel     :   any;


  constructor() { 

    this.listeTerra = [
      {id : 1, nom : 'Pantherophis Guttatus', soleil : 'oui', temperature : '28', hygrometrie : '50', alertes : 'oui'}, 
      {id : 2, nom : 'Python',                soleil : 'non', temperature : '32', hygrometrie : '40', alertes : 'non'}, 
    ];
  }

}
