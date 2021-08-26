import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerificationRegisterAccountComponent } from './codeVerificationRegisterAccount.component';

describe('VerifyNumberComponent', () => {
  let component: CodeVerificationRegisterAccountComponent;
  let fixture: ComponentFixture<CodeVerificationRegisterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeVerificationRegisterAccountComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeVerificationRegisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
