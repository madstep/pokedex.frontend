import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAccountRegisterComponent } from './individualAccountRegister.component';

describe('IndividualComponent', () => {
  let component: IndividualAccountRegisterComponent;
  let fixture: ComponentFixture<IndividualAccountRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualAccountRegisterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAccountRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
