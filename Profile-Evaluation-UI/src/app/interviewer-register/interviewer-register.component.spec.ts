import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerRegisterComponent } from './interviewer-register.component';

describe('InterviewerRegisterComponent', () => {
  let component: InterviewerRegisterComponent;
  let fixture: ComponentFixture<InterviewerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewerRegisterComponent]
    });
    fixture = TestBed.createComponent(InterviewerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
