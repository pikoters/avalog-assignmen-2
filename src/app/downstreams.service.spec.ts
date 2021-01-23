import { TestBed } from '@angular/core/testing';

import { DownstreamsService } from './downstreams.service';

describe('DownstreamsService', () => {
  let service: DownstreamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownstreamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
