import { TestBed, inject } from '@angular/core/testing';

import { NpsService } from './nps.service';

describe('NpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NpsService]
    });
  });

  it('should be created', inject([NpsService], (service: NpsService) => {
    expect(service).toBeTruthy();
  }));
});
