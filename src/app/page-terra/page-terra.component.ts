import { MesTerrasService } from './../mes-terras.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-terra',
  templateUrl: './page-terra.component.html',
  styleUrls: ['./page-terra.component.scss']
})
export class PageTerraComponent implements OnInit{

  //nom du terra
  idTerra       : any;
  terraActuel   : any   = this.serviceTerra.terraActuel;

  //tooltips
  tooltip_temperature   : any;
  tooltip_humidite      : any;
  tooltip_luminosite    : any;
  tooltip_meteo         : any;


  constructor(private serviceTerra : MesTerrasService, private route : ActivatedRoute) {
    this.tooltip_humidite   = serviceTerra.tooltip_humidite;
    this.tooltip_luminosite = serviceTerra.tooltip_luminosite;
    this.tooltip_meteo      = serviceTerra.tooltip_meteo;
    this.tooltip_temperature= serviceTerra.tooltip_temperature;
  }

  ngOnInit() {

    this.route.queryParams.subscribe( params => {
      this.idTerra    =   this.route.snapshot.params['id_terra'];
      console.log("pt :" + this.idTerra);
    });

    this.terraActuel  =   this.serviceTerra.terraActuel;
    //console.log(this.terraActuel);
  }


}
