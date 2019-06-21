import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { Component, OnInit, Injectable } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { resolve } from 'dns';
 
@Injectable({
  providedIn: 'root'
})

export class SocialLoginService implements OnInit, CanActivate {
  


  canActivate() {

    this.connexionUser();

    if (this.loggedIn == true){
      return this.loggedIn;
    } else {
      return false;
      //this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  }
 
  private _user: SocialUser;
  
  public get user(): SocialUser {
    return this._user;
  }
  public set user(value: SocialUser) {
    this._user = value;
  }

  private loggedIn: boolean;


  public connexionUser() : SocialUser{
    let utilisateur : any;
    if (this.authService.authState != undefined){

      this.authService.authState.subscribe((user) => {
        utilisateur   = user;
        this.loggedIn = (user != null);
        console.log(this.loggedIn);
      });

    }
    
    return utilisateur;
  }


  ngOnInit(){
      this.loggedIn   = false;
      this.user = this.connexionUser();
  }


  constructor(private authService: AuthService) { 
    
  }
 
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  // signInWithLinkedIn(): void {
  //   this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  // }  
 
  signOut(): void {
    this.authService.signOut();
  }
 
}
