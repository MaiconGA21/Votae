import { TestBed } from '@angular/core/testing';

import { Web3serviceService } from './web3service.service';

describe('Web3serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Web3serviceService = TestBed.get(Web3serviceService);
    expect(service).toBeTruthy();
  });
});
