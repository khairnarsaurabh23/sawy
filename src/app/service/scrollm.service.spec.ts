import { TestBed } from '@angular/core/testing';

import { ScrollmService } from './scrollm.service';

describe('ScrollmService', () => {
  let service: ScrollmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
