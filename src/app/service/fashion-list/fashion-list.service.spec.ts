import { TestBed, inject } from '@angular/core/testing';

import { FashionListService } from './fashion-list.service';

describe('FashionListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FashionListService]
    });
  });

  it('should be created', inject([FashionListService], (service: FashionListService) => {
    expect(service).toBeTruthy();
  }));
});
