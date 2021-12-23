import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardContextMenuComponent } from './project-card-context-menu.component';

describe('ProjectCardContextMenuComponent', () => {
  let component: ProjectCardContextMenuComponent;
  let fixture: ComponentFixture<ProjectCardContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
