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
  public    tooltip_humidite_conforme         : any       = "Le taux d'humidité est conforme à vos attentes";
  public    tooltip_humidite_conforme_alerte  : any       = "Le taux d'humidité est conforme à vos attentes. Mais le soleil actuel peut engendrer une baisse de l'hygrométrie";
  public    tooltip_humidite_nonConforme      : any       = "Le taux d'humidité n'est pas conforme à vos attentes. Une humidité trop élevée peut engendrer des problèmes de santé au niveau respiratoire";

  
  public    tooltip_temperature_conforme            : any       = "La température est conforme à vos attentes";
  public    tooltip_temperature_conforme_alerte     : any       = "La température est conforme à vos attentes. Mais les rayons du soleil peuvent engendrer une hausse de la température";
  public    tooltip_temperature_nonConforme         : any       = "La température n'est pas conforme à vos attentes";


  public    tooltip_meteo_soleil              : any       = "Attention, votre terrarium est exposé au soleil. Ceci peux causer une hausse de la température ainsi qu'une baisse de l'hygrométrie";
  public    tooltip_meteo_nuage               : any       = "La météo actuelle n'engendre aucun problème sur vos paramètres";


  public    tooltip_luminosite_forte          : any       = "La luminosité est forte. Pensez à surveiller la température et l'hygrométrie";
  public    tooltip_luminosite_faible         : any       = "La luminosité est faible.";


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
            this.listeTerra = res;
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
