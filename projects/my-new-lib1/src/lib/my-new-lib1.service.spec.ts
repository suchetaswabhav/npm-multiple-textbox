import { TestBed } from '@angular/core/testing';

import { MyNewLib1Service } from './my-new-lib1.service';

describe('MyNewLib1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNewLib1Service = TestBed.get(MyNewLib1Service);
    expect(service).toBeTruthy();
  });
});
