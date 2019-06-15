import { Component, OnInit } from '@angular/core';
import { MesTerrasService } from '../mes-terras.service';

@Component({
  selector: 'app-resume-terras',
  templateUrl: './resume-terras.component.html',
  styleUrls: ['./resume-terras.component.scss']
})
export class ResumeTerrasComponent implements OnInit {

  //Liste terrarium
  listeTerra        : any;
  listeMesures      : Array<any> = new Array();

  constructor(private serviceTerra : MesTerrasService) { 

  }

  ngOnInit() {

    console.log(this.listeMesures);

    this.serviceTerra.constructionListeTerra().then(
      (res) => {
        this.listeTerra   =   res;
      }
    )

    this.serviceTerra.getDerniereMesureTerra("Python").then(
      (res) => {
        this.listeMesures.push(Object.assign({nomTerra: "Python" }, res));
        this.listeMesures.push(Object.assign({nomTerra: "Pantherophis Guttatus" }, res));
        console.log(this.listeTerra);
      }
    )
  }

}
