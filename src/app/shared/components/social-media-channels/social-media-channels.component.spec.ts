import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaChannelsComponent } from './social-media-channels.component';

describe('SocialMediaChannelsComponent', () => {
  let component: SocialMediaChannelsComponent;
  let fixture: ComponentFixture<SocialMediaChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
