import { TestBed } from '@angular/core/testing';

import { homeGuard } from './home.guard';
import { CanActivateFn } from '@angular/router';

describe('homeGuard', () => {
  let guard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(homeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
