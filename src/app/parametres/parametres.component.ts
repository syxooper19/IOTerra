import { MesTerrasService } from './../mes-terras.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {

  //Liste terrarium
  listeTerra      :   Array<any>    =   new Array();


  constructor(private serviceTerra : MesTerrasService) { 
    this.listeTerra   =   this.serviceTerra.listeTerra;
  }

  ngOnInit() {
  }



}
