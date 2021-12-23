import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalImageComponent } from './project-modal-image.component';

describe('ProjectModalImageComponent', () => {
  let component: ProjectModalImageComponent;
  let fixture: ComponentFixture<ProjectModalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModalImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
