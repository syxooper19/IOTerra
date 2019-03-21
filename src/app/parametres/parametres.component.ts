import { MesTerrasService } from './../mes-terras.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
