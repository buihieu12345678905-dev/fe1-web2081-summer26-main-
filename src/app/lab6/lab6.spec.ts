import { TestBed } from '@angular/core/testing';

import { Lab6 } from './lab6';

describe('Lab6', () => {
  let service: Lab6;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lab6);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
