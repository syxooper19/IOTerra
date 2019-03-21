import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  //Tooltips
  public    tooltip_humidite      : any       = "Le taux d'humidité est conforme à vos attentes. Toutefois, il risque d'augmenter à cause de la forte luminosité";
  public    tooltip_temperature   : any       = "La température n'est pas conforme à vos attentes";
  public    tooltip_meteo         : any       = "Attention, votre terrarium est exposé au soleil. Ceci peux causer une hausse de la température ainsi qu'une baisse de l'hygrométrie";
  public    tooltip_luminosite    : any       = "La luminosité est forte. Pensez à surveiller la température et l'hygrométrie";



  constructor(){
  }



  //ouvrir ou fermer la Sidebar
  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

}
