import { TestBed, inject } from '@angular/core/testing';

import { SkiPoleService } from './skiPole.service';

describe('SkiPoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkiPoleService]
    });
  });

  it('should be created', inject([SkiPoleService], (service: SkiPoleService) => {
    expect(service).toBeTruthy();
  }));
});
