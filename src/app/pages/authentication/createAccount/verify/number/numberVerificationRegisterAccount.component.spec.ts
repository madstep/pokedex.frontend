import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberVerificationRegisterAccountComponent } from './numberVerificationRegisterAccount.component';

describe('VerifyNumberComponent', () => {
  let component: NumberVerificationRegisterAccountComponent;
  let fixture: ComponentFixture<NumberVerificationRegisterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberVerificationRegisterAccountComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      NumberVerificationRegisterAccountComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
