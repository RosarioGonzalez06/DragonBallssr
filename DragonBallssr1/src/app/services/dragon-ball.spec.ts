import { TestBed } from '@angular/core/testing';

import { DragonBall } from './dragon-ball';

describe('DragonBall', () => {
  let service: DragonBall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
