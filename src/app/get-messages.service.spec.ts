import { TestBed, inject } from '@angular/core/testing';

import { GetMessagesService } from './get-messages.service';

describe('GetMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMessagesService]
    });
  });

  it('should be created', inject([GetMessagesService], (service: GetMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
