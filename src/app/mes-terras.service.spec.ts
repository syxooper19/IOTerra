import { TestBed } from '@angular/core/testing';

import { MesTerrasService } from './mes-terras.service';

describe('MesTerrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesTerrasService = TestBed.get(MesTerrasService);
    expect(service).toBeTruthy();
  });
});
