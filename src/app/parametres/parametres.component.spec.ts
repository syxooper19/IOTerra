import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresComponent } from './parametres.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';

describe('ParametresComponent', () => {
  let component: ParametresComponent;
  let fixture: ComponentFixture<ParametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametresComponent ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  }));


  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };


  
  beforeEach(() => {
    fixture = TestBed.createComponent(ParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
