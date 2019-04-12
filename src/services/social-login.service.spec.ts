import { TestBed } from '@angular/core/testing';

import { SocialLoginService } from './social-login.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from 'angularx-social-login';
import { provideConfig } from 'src/app/app.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

describe('SocialLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
      { provide: AuthService, useFactory: provideConfig },
      HttpClient,
      HttpHandler,
      

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
});
