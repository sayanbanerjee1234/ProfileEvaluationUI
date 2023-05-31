import { Component } from '@angular/core';

@Component({
  selector: 'app-interviewer-register',
  templateUrl: './interviewer-register.component.html',
  styleUrls: ['./interviewer-register.component.scss']
})
export class InterviewerRegisterComponent {

  specialty = ['Front-end','Back-end','Testing','Full-stack'];
  level = ['SSE', 'TL', 'AM'];

  registerInterviewer() {
    console.log('success');
  }

}
