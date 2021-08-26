import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerificationChangePasswordComponent } from './codeVerificationChangePassword.component';

describe('RecoveryPasswordVerifyCodeComponent', () => {
  let component: CodeVerificationChangePasswordComponent;
  let fixture: ComponentFixture<CodeVerificationChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeVerificationChangePasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeVerificationChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
