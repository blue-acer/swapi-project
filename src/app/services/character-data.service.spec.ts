import { TestBed } from '@angular/core/testing';

import { CharacterDataService } from './character-data.service';

describe('ApiService', () => {
  let service: CharacterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
