import { TestBed } from '@angular/core/testing';

import { EXEMPLO } from './exemplo';

describe('EXEMPLO', () => {
  let service: EXEMPLO;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EXEMPLO);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
