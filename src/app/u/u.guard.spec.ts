import { TestBed, async, inject } from '@angular/core/testing';

import { UGuard } from './u.guard';

describe('UGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UGuard]
    });
  });

  it('should ...', inject([UGuard], (guard: UGuard) => {
    expect(guard).toBeTruthy();
  }));
});
