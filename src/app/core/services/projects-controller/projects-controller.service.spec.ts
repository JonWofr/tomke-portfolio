import { TestBed } from '@angular/core/testing';

import { ProjectsControllerService } from './projects-controller.service';

describe('ProjectsControllerService', () => {
  let service: ProjectsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
