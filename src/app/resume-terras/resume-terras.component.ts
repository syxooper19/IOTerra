import { Component, OnInit } from '@angular/core';
import { MesTerrasService } from '../mes-terras.service';

@Component({
  selector: 'app-resume-terras',
  templateUrl: './resume-terras.component.html',
  styleUrls: ['./resume-terras.component.scss']
})
export class ResumeTerrasComponent implements OnInit {

  //Liste terrarium
  listeTerra      :   Array<any>    =   new Array();

  

  constructor(private serviceTerra : MesTerrasService) { 
    this.listeTerra   =   this.serviceTerra.listeTerra;
  }

  ngOnInit() {
  }

}
