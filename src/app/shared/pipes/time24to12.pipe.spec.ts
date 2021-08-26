import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Time24to12Format } from './time24to12.pipe';

describe('AuditComponent', () => {
  let component: Time24to12Format;
  let fixture: ComponentFixture<Time24to12Format>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Time24to12Format ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Time24to12Format);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
