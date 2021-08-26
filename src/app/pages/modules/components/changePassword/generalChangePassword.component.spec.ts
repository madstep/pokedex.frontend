import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChangePasswordComponent } from './generalChangePassword.component';

describe('GeneralChangePasswordComponent', () => {
  let component: GeneralChangePasswordComponent;
  let fixture: ComponentFixture<GeneralChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
