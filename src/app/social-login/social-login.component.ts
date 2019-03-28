import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
 
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})


export class SocialLoginComponent implements OnInit {
 
  private user: SocialUser;
  private loggedIn: boolean;


  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  constructor(private authService: AuthService) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }  
 
  signOut(): void {
    this.authService.signOut();
  }
 
}