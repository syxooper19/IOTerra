import { MesTerrasService } from './../mes-terras.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  listeTerra    : any;
  terraActuel   : any;

  constructor(private serviceTerra : MesTerrasService ) {
    this.listeTerra   =   this.serviceTerra.listeTerra;
  }

  ngOnInit() {
  }


  onClickTerra(item : any){
    this.terraActuel                =   item.nom;
    this.serviceTerra.terraActuel   =   item.nom;
  }

}
