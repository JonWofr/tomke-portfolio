import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalFileInputComponent } from './project-modal-file-input.component';

describe('ProjectModalFileInputComponent', () => {
  let component: ProjectModalFileInputComponent;
  let fixture: ComponentFixture<ProjectModalFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModalFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
