import { TestBed, async } from '@angular/core/testing';

import { SocialLoginService } from './social-login.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService, SocialUser } from 'angularx-social-login';
import { provideConfig } from 'src/app/app.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HttpClientTestingModule } from '@angular/common/http/testing'


describe('SocialLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
      { provide: AuthService, useFactory: provideConfig },
      HttpHandler,
      HttpClientTestingModule
      

    ],
  }));

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  
  it('should be created', () => {
    const service: SocialLoginService = TestBed.get(SocialLoginService);
    expect(service).toBeTruthy();
  });


  it('fonction connexion', () => {
    const service: SocialLoginService = TestBed.get(SocialLoginService);
    const user = service.connexionUser();
    expect(user).toBe(undefined);
  });

  
  it('appel FB', () => {
    const service: SocialLoginService = TestBed.get(SocialLoginService);
    expect(service.signInWithFB).toBeDefined;
  });


  
});
