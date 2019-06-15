import { MesTerrasService } from './../mes-terras.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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
  
  collectionTerraFireBase : any;
  terraFirebase           : any;


  constructor(private serviceTerra : MesTerrasService, private route : ActivatedRoute) {
    this.tooltip_humidite   = serviceTerra.tooltip_humidite;
    this.tooltip_luminosite = serviceTerra.tooltip_luminosite;
    this.tooltip_meteo      = serviceTerra.tooltip_meteo;
    this.tooltip_temperature= serviceTerra.tooltip_temperature;
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

        if (this.luminositeActuelle > 600) {
          this.risqueLuminosite     = 'surchauffe';
        } else {
          this.risqueLuminosite     = 'aucun';
        }
      }
    );    
    
    this.collectionTerraFireBase  = this.serviceTerra.TerrariumsCollection;
    this.terraFirebase            = this.serviceTerra.Terrarium;

      
  }


}
