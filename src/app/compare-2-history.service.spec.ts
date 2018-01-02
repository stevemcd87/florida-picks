import { TestBed, inject } from '@angular/core/testing';

import { Compare2HistoryService } from './compare2-history.service';

describe('Compare2HistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Compare2HistoryService]
    });
  });

  it('should be created', inject([Compare2HistoryService], (service: Compare2HistoryService) => {
    expect(service).toBeTruthy();
  }));
});
