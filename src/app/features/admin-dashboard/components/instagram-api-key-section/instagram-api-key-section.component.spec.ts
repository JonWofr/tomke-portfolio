import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramApiKeySectionComponent } from './instagram-api-key-section.component';

describe('InstagramApiKeySectionComponent', () => {
  let component: InstagramApiKeySectionComponent;
  let fixture: ComponentFixture<InstagramApiKeySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramApiKeySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramApiKeySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
