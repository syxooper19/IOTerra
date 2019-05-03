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

    this.listeTerra = [
      {id : 1, nom : 'Pantherophis Guttatus', soleil : 'oui', temperature_souhaitee : '28', hygrometrie_souhaitee : '50%', alertes : 'oui', temperature : '28', hygrometrie : '50%', luminosite : '700 Lux'}, 
      {id : 2, nom : 'Python',                soleil : 'non', temperature_souhaitee : '30', hygrometrie_souhaitee : '50%', alertes : 'non', temperature : '30', hygrometrie : '40%', luminosite : '600 Lux'}, 
    ];


    this.TerrariumsCollection   = this.afs.collection('Terrarium');
    this.Terrarium              = this.TerrariumsCollection.valueChanges();




  }


  getTerra(nomTerra : any){
    // let TerrariumsCollection   = this.afs.collection('Terrarium').doc('KreKAs5CarjyWiko68bv').ref.get().then(function(doc) {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     console.log("No such document!");
    //   }
    // }).catch(function(error) {
    //   console.log("Error getting document:", error);
    // });;

    let promise               = new Promise(resolve => 
      {
        this.afs.collection('Terrarium/KreKAs5CarjyWiko68bv/Mesures').valueChanges().pipe(take(1)).toPromise()
        .then( (res : Array<any>) => {

          let tmp   : Array<any>  = new Array<any>();
          for (let mesure of res){
            tmp.push(mesure.date.seconds);
          }
          //let value = Math.max.apply(Math, res.map(function(o) { return o.date.seconds; }));

          let index = tmp.indexOf(Math.max(...tmp));
          resolve(res[index]);
        });
    });


    //let Terrarium              = this.TerrariumsCollection.valueChanges();
    //let Terrarium               = this.afs.collection('Terrarium/KreKAs5CarjyWiko68bv/Mesures', ref => ref.where('nomTerra', '==', 'Python'));
    // let Terrarium               = this.afs.collection('Terrarium/KreKAs5CarjyWiko68bv/Mesures').valueChanges().pipe(take(1))
    // .subscribe(v => {
    //   derniereMesure = v[0];
    //   console.log(derniereMesure);
    // });
    //let Terrarium = TerrariumsCollection.get();
    return promise;
  }

}
