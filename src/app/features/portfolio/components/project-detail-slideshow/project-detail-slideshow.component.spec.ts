import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailSlideshowComponent } from './project-detail-slideshow.component';

describe('ProjectDetailSlideshowComponent', () => {
  let component: ProjectDetailSlideshowComponent;
  let fixture: ComponentFixture<ProjectDetailSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
