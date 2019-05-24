import { MesTerrasService } from './../mes-terras.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {

  //Liste terrarium
  //listeTerra      :   Array<any>    =   new Array();
  listeTerra      :   any;
  modification    :   Boolean       =   false;

  constructor(private serviceTerra : MesTerrasService) { 
    //this.listeTerra   =   this.serviceTerra.listeTerra;
  }

  ngOnInit() {

    this.serviceTerra.constructionListeTerra().then(
      (res) =>  {
        this.listeTerra = res;
      }
    );

  }

  onClicModif(){
    if (this.modification){
      //On est entrain de modifier les paramètres

      //Sauvegarde des modifs
      this.serviceTerra.sauvegardeModif(this.listeTerra);

    } else {
      //On est entrain de consulter les parametres
    }

    this.modification = !this.modification;
    console.log(this.listeTerra);
  }


  valueTerra : string;

  valueChange(nomTerra : string){
    this.valueTerra = nomTerra;
    console.log(this.valueTerra)
  }





}
