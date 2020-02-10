import { TestBed } from '@angular/core/testing';

import { MyserviceServiceService } from './myservice-service.service';

describe('MyserviceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserviceServiceService = TestBed.get(MyserviceServiceService);
    expect(service).toBeTruthy();
  });
});
