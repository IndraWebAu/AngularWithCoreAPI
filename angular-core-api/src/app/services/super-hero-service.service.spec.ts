import { TestBed } from '@angular/core/testing';

import { SuperHeroService } from './super-hero-service';

describe('SuperHeroServiceService', () => {
  let service: SuperHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
