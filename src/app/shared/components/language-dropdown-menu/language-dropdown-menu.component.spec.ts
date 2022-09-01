import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropdownMenuComponent } from './language-dropdown-menu.component';

describe('LanguageDropdownMenuComponent', () => {
  let component: LanguageDropdownMenuComponent;
  let fixture: ComponentFixture<LanguageDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDropdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
