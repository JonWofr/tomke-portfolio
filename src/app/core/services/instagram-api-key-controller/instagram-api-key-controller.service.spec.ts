import { TestBed } from '@angular/core/testing';

import { InstagramApiKeyControllerService } from './instagram-api-key-controller.service';

describe('InstagramApiKeyControllerService', () => {
  let service: InstagramApiKeyControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramApiKeyControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
