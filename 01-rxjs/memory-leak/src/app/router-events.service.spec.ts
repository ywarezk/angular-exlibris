import { TestBed } from '@angular/core/testing';

import { RouterEventsService } from './router-events.service';

describe('RouterEventsService', () => {
  let service: RouterEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
