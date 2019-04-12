import { TestBed } from '@angular/core/testing';

import { MesTerrasService } from './mes-terras.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

describe('MesTerrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
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
