import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGalleryItemComponent } from './project-gallery-item.component';

describe('ProjectGalleryItemComponent', () => {
  let component: ProjectGalleryItemComponent;
  let fixture: ComponentFixture<ProjectGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGalleryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
