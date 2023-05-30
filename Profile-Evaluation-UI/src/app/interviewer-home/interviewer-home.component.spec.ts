import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerHomeComponent } from './interviewer-home.component';

describe('InterviewerHomeComponent', () => {
  let component: InterviewerHomeComponent;
  let fixture: ComponentFixture<InterviewerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewerHomeComponent]
    });
    fixture = TestBed.createComponent(InterviewerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
