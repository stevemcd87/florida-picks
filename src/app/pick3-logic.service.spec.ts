import { TestBed, inject } from '@angular/core/testing';

import { Pick3LogicService } from './pick3-logic.service';

describe('Pick3LogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pick3LogicService]
    });
  });

  it('should be created', inject([Pick3LogicService], (service: Pick3LogicService) => {
    expect(service).toBeTruthy();
  }));
});
