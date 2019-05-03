import { TestBed } from '@angular/core/testing';

import { MesTerrasService } from './mes-terras.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreModule, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { Observable } from 'rxjs';

describe('MesTerrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
    imports: [
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
    ]
  }));

  it('should be created', () => {
    const service: MesTerrasService = TestBed.get(MesTerrasService);
    expect(service).toBeTruthy();
  });

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };
});
