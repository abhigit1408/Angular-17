import { TestBed } from '@angular/core/testing';

import { OtherMessageService } from './other-message.service';

describe('OtherMessageService', () => {
  let service: OtherMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
