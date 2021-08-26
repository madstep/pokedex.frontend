import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationChangePasswordComponent } from './emailVerificationChangePassword.component';

describe('RecoveryPasswordVerifyEmailComponent', () => {
  let component: EmailVerificationChangePasswordComponent;
  let fixture: ComponentFixture<EmailVerificationChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailVerificationChangePasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerificationChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
