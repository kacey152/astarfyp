import { TestBed } from '@angular/core/testing';

import { ProductionInventoryService } from './production-inventory.service';

describe('ProductionInventoryService', () => {
  let service: ProductionInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
