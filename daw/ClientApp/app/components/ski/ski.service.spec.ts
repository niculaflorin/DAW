import { TestBed, inject } from '@angular/core/testing';

import { SkiService } from './ski.service';

describe('SkiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkiService]
    });
  });

  it('should be created', inject([SkiService], (service: SkiService) => {
    expect(service).toBeTruthy();
  }));
});
