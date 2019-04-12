import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from 'angularx-social-login';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { provideConfig } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: AuthService, useFactory: provideConfig },
        HttpClient,
        HttpHandler,
        

      ],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents();
  }));

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'IOTerra'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('IOTerra');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('IOTerra');
  });
});
