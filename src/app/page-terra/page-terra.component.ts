import { MesTerrasService } from './../mes-terras.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-page-terra',
  templateUrl: './page-terra.component.html',
  styleUrls: ['./page-terra.component.scss']
})
export class PageTerraComponent implements OnInit, OnChanges{
  
  
  ngOnChanges(changes: SimpleChanges): void {

      //if (changes['nomPS'] || changes['nomAT']) {
      if (changes['nomAT']) {
        //console.log(this.nomAT);
      }
  
      if (changes['nomPS']){
        //console.log('change PS');
      }
  }

  //nom du terra
  idTerra       : any;
  terraActuel   : any   = this.serviceTerra.terraActuel;

  //tooltips
  tooltip_temperature   : any;
  tooltip_humidite      : any;
  tooltip_luminosite    : any;
  tooltip_meteo         : any;

  //mesures
  mesuresTerraActuel    : any;
  temperatureActuelle   : any;
  hygrometrieActuelle   : any;
  luminositeActuelle    : any;
  meteoActuelle         : any;
  temperatureExtActuelle: any;
  risqueMeteo           : any;
  risqueLuminosite      : any;
  hygroConforme         : any;
  tempConforme          : any;

  collectionTerraFireBase : any;
  terraFirebase           : any;


  constructor(private serviceTerra : MesTerrasService, private route : ActivatedRoute) {
    
  }

  ngOnInit() {

    this.route.queryParams.subscribe( params => {
      this.idTerra    =   this.route.snapshot.params['id_terra'];
      console.log(this.idTerra);
    });

    //this.terraActuel  =   this.serviceTerra.terraActuel;
    //console.log(this.terraActuel);


    this.mesuresTerraActuel  = this.serviceTerra.getDerniereMesureTerra(this.idTerra).then(
      (res : any) => {
        this.temperatureActuelle    = res.temperature;
        this.hygrometrieActuelle    = res.hygrometrie;
        this.luminositeActuelle     = res.luminosite;
        this.meteoActuelle          = res.meteo;
        this.temperatureExtActuelle = res.temperatureExterieure;


        switch (this.meteoActuelle){

          case "Clouds":{
            this.risqueMeteo        = 'aucun';
            this.meteoActuelle      = 'Nuageux';
          }

          case "Clear":{
            this.risqueMeteo        = 'surchauffe';
            this.meteoActuelle      = 'Ensoleillé';
          }

        }

        // Tooltip luminosité
        if (this.luminositeActuelle > 600) {
          this.risqueLuminosite     = 'surchauffe';
          this.tooltip_luminosite   = this.serviceTerra.tooltip_luminosite_forte;

        } else {
          this.risqueLuminosite     = 'aucun';
          this.tooltip_luminosite   = this.serviceTerra.tooltip_luminosite_faible;

        }


        // Tooltip Hygrométrie
        let toleranceHygroMin = Number(this.serviceTerra.listeTerra[0].HygrometrieSouhaitee) * (1 - Number(this.serviceTerra.listeTerra[0].toleranceHygro) / 100);
        let toleranceHygroMax = Number(this.serviceTerra.listeTerra[0].HygrometrieSouhaitee) * (1 + Number(this.serviceTerra.listeTerra[0].toleranceHygro) / 100);

        console.log(toleranceHygroMin);
        console.log(toleranceHygroMax);
        console.log(this.hygrometrieActuelle);

         if (this.hygrometrieActuelle >= toleranceHygroMin && this.hygrometrieActuelle <= toleranceHygroMax){
           //conforme
           this.hygroConforme       = "Conforme"
           this.tooltip_humidite    = this.serviceTerra.tooltip_humidite_conforme;

           //Si conforme mais météo ensoleillé
           if (this.meteoActuelle == 'Ensoleillé' && this.serviceTerra.listeTerra[0].exposeAuSoleil == 'oui'){
            this.tooltip_humidite    = this.serviceTerra.tooltip_humidite_conforme_alerte;
           }

         } else {
           //non conforme
           this.hygroConforme       = "Non Conforme"
           this.tooltip_humidite    = this.serviceTerra.tooltip_humidite_nonConforme;
         }




         // Tooltip Temperature
         let toleranceTempMin = Number(this.serviceTerra.listeTerra[0].temperatureSouhaitee) * (1 - Number(this.serviceTerra.listeTerra[0].toleranceTemp) / 100);
         let toleranceTempMax = Number(this.serviceTerra.listeTerra[0].temperatureSouhaitee) * (1 + Number(this.serviceTerra.listeTerra[0].toleranceTemp) / 100);
 
         if (this.temperatureActuelle >= toleranceTempMin && this.temperatureActuelle <= toleranceTempMax){
          //conforme
          this.tempConforme           = "Conforme"
          this.tooltip_temperature    = this.serviceTerra.tooltip_temperature_conforme;

          //Si conforme mais météo ensoleillé
          if (this.meteoActuelle == 'Ensoleillé' && this.serviceTerra.listeTerra[0].exposeAuSoleil == 'oui'){
           this.tooltip_temperature   = this.serviceTerra.tooltip_temperature_conforme_alerte;
          }

        } else {
          //non conforme
          this.tempConforme           = "Non Conforme"
          this.tooltip_temperature    = this.serviceTerra.tooltip_temperature_nonConforme;
        }



        // Tooltip Météo
        if (this.meteoActuelle == 'Nuageux'){
          this.tooltip_meteo          = this.serviceTerra.tooltip_meteo_nuage;
        } else {
          this.tooltip_meteo          = this.serviceTerra.tooltip_meteo_soleil;
        }
      }
    );    
    

    this.collectionTerraFireBase  = this.serviceTerra.TerrariumsCollection;
    this.terraFirebase            = this.serviceTerra.Terrarium;

      
  }


}
