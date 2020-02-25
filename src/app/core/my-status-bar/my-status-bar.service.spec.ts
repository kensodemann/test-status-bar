import { TestBed } from '@angular/core/testing';

import { MyStatusBarService } from './my-status-bar.service';

describe('MyStatusBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyStatusBarService = TestBed.get(MyStatusBarService);
    expect(service).toBeTruthy();
  });
});
