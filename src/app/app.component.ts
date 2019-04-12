import { MesTerrasService } from './mes-terras.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { SocialLoginService } from 'src/services/social-login.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{

  public user                      : SocialUser;
  public loggedIn                  : boolean;
  public collectionTerraFireBase   : any;
  public terraFirebase             : any;

  title = 'IOTerra';


  ngOnInit(){

    this.loggedIn = false;
    
    this.user = this.socialAuthService.user;
    this.loggedIn = (this.user != null);

    this.authService.authState.subscribe(
      (user) => {
        this.user     = user;
        this.loggedIn = (user != null);
        console.log(this.user);
        console.log(this.loggedIn);
      });


      this.collectionTerraFireBase  = this.mesTerras.TerrariumsCollection;
      this.terraFirebase            = this.mesTerras.Terrarium;

      
     
  }

  constructor(private mesTerras : MesTerrasService, private authService: AuthService, public http : HttpClient, private socialAuthService: SocialLoginService){
  
  }


  deconnexion(){
    this.authService.signOut();
  }


}