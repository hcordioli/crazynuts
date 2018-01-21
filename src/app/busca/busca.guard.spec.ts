import { TestBed, async, inject } from '@angular/core/testing';

import { BuscaGuard } from './busca.guard';

describe('BuscaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaGuard]
    });
  });

  it('should ...', inject([BuscaGuard], (guard: BuscaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
