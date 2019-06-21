import { SocialLoginService } from './../../services/social-login.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginComponent } from './social-login.component';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { provideConfig } from '../app.module';
import { HttpClientModule } from '@angular/common/http';

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
 



describe('SocialLoginComponent', () => {
  let component: SocialLoginComponent;
  let fixture: ComponentFixture<SocialLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLoginComponent ],

      providers: [
        { provide: AuthService, useFactory: provideConfig },
        { provide: AuthServiceConfig, useFactory: provideConfig },
        

        
  
      ],

      imports: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('appel FB', () => {
  //   fixture = TestBed.createComponent(SocialLoginComponent);
  //   const service = TestBed.get(SocialLoginService);
  //   component = fixture.componentInstance;
  //   expect(service.signInWithFB()).toHaveBeenCalled;
  // });




});
