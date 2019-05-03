import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTerrasComponent } from './resume-terras.component';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

describe('ResumeTerrasComponent', () => {
  let component: ResumeTerrasComponent;
  let fixture: ComponentFixture<ResumeTerrasComponent>;


  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTerrasComponent ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTerrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
