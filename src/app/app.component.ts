import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { SocialLoginService } from 'src/services/social-login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  private user: SocialUser;
  private loggedIn: boolean;


  ngOnInit(){

    this.loggedIn = false;
    
    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(this.user);
        console.log(this.loggedIn);
      });

  }

  constructor(private authService: AuthService, public http : HttpClient, private socialAuthService: SocialLoginService){
  }


  deconnexion(){
    this.authService.signOut();
  }

  //ouvrir ou fermer la Sidebar
  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

}