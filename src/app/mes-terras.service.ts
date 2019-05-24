import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { resolve } from 'dns';




interface Terrarium {
  AlertesSouhaitee      : string ;
  HygrometrieSouhaitee  : string ;
  exposeeAuSoleil       : Boolean ;
  nomTerra              : string ;
  temperatureSouhaitee  : string ;
}


@Injectable({
  providedIn: 'root'
})

export class MesTerrasService {

  listeTerra      :   Array<any>    =   new Array();
    
  //Contient le nom du terra actuel
  terraActuel     :   any;



  //Tooltips
  public    tooltip_humidite      : any       = "Le taux d'humidité est conforme à vos attentes. Toutefois, il risque d'augmenter à cause de la forte luminosité";
  public    tooltip_temperature   : any       = "La température n'est pas conforme à vos attentes";
  public    tooltip_meteo         : any       = "Attention, votre terrarium est exposé au soleil. Ceci peux causer une hausse de la température ainsi qu'une baisse de l'hygrométrie";
  public    tooltip_luminosite    : any       = "La luminosité est forte. Pensez à surveiller la température et l'hygrométrie";


  TerrariumsCollection  : AngularFirestoreCollection<Terrarium>;
  Terrarium             : Observable<Terrarium[]>

  
  constructor(private afs : AngularFirestore) { 

    this.TerrariumsCollection   = this.afs.collection('Terrarium');
    this.Terrarium              = this.TerrariumsCollection.valueChanges();


    this.listeTerra = [
      {id : 1, nom : 'Pantherophis Guttatus', soleil : 'oui', temperature_souhaitee : '28', hygrometrie_souhaitee : '50%', alertes : 'oui', temperature : '28', hygrometrie : '50%', luminosite : '700 Lux'}, 
      {id : 2, nom : 'Python',                soleil : 'non', temperature_souhaitee : '30', hygrometrie_souhaitee : '50%', alertes : 'non', temperature : '30', hygrometrie : '40%', luminosite : '600 Lux'}, 
    ];

    this.constructionListeTerra();
  }



  sauvegardeModif(tabTerra : any){
    // Modification terrarium Python
    this.afs.collection("Terrarium").doc("KreKAs5CarjyWiko68bv").set({
      nomTerra: tabTerra[0].nomTerra,
      exposeAuSoleil: tabTerra[0].exposeAuSoleil,
      temperatureSouhaitee: tabTerra[0].temperatureSouhaitee,
      HygrometrieSouhaitee: tabTerra[0].HygrometrieSouhaitee,
      AlertesSouhaitee: tabTerra[0].AlertesSouhaitee,
      toleranceHygro: tabTerra[0].toleranceHygro,
      toleranceTemp: tabTerra[0].toleranceTemp
    })
    .then(function() {
      console.log("Modification Python correctement effectuée");
    })
    .catch(function(error) {
      console.error("Erreur modification Python : ", error);
    });


    //Modification Terrarium Pantherophis
    this.afs.collection("Terrarium").doc("MWBEAHuSXLsmWPorGKwv").set({
      nomTerra: tabTerra[1].nomTerra,
      exposeAuSoleil: tabTerra[1].exposeAuSoleil,
      temperatureSouhaitee: tabTerra[1].temperatureSouhaitee,
      HygrometrieSouhaitee: tabTerra[1].HygrometrieSouhaitee,
      AlertesSouhaitee: tabTerra[1].AlertesSouhaitee,
      toleranceHygro: tabTerra[1].toleranceHygro,
      toleranceTemp: tabTerra[1].toleranceTemp
    })
    .then(function() {
      console.log("Modification Pantherophis Guttatus correctement effectuée");
    })
    .catch(function(error) {
      console.error("Erreur modification Pantherophis Guttatus : ", error);
    });
  }



  constructionListeTerra(){
      let promise               = new Promise(resolve => 
        {
          this.afs.collection('Terrarium').valueChanges().pipe(take(1)).toPromise()
          .then( (res : Array<any>) => {
            //console.log(res);
            resolve(res);
          });
        });
  
        return promise;

  }


  /**
   * permet d'obtenir la dernière mesure d'un terrarium
   * @param nomTerra 
   */
  getDerniereMesureTerra(nomTerra : any){

    let promise               = new Promise(resolve => 
      {
        this.afs.collection('Terrarium/KreKAs5CarjyWiko68bv/Mesures').valueChanges().pipe(take(1)).toPromise()
        .then( (res : Array<any>) => {

          let tmp   : Array<any>  = new Array<any>();
          for (let mesure of res){
            tmp.push(mesure.date.seconds);
          }

          let index = tmp.indexOf(Math.max(...tmp));
          resolve(res[index]);
        });
    });

    return promise;
  }

}
