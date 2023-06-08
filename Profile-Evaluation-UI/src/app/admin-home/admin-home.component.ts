import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {

  navbarCollapsed = true;
  isInterviewer = false;
  isCandidate = true;

  candidates=[{
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    Experience: '8yrs',
    Level: 'TL',
    Status: 'Yet To Start',
    Comments: 'Rescheduled'
  }];

  interviewers = [{
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    du: 'DU09',
    Level: 'TL'
  },
  {
    Name: 'Sayan Banerjee',
    Email: 'xyz@accenture.com',
    Phone: '1234567890',
    SkillSet: '.net, angular, sql',
    id: '9876543',
    Base: 'Kolkata',
    du: 'DU09',
    Level: 'SSE'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    du: 'DU09',
    Level: 'TL'
  },
  {
    Name: 'Sayan Banerjee',
    Email: 'xyz@accenture.com',
    Phone: '1234567890',
    SkillSet: '.net, angular, sql',
    id: '9876543',
    Base: 'Kolkata',
    du: 'DU09',
    Level: 'SSE'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    du: 'DU09',
    Level: 'TL'
  },
  {
    Name: 'Sayan Banerjee',
    Email: 'xyz@accenture.com',
    Phone: '1234567890',
    SkillSet: '.net, angular, sql',
    id: '9876543',
    Base: 'Kolkata',
    du: 'DU09',
    Level: 'SSE'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    du: 'DU09',
    Level: 'TL'
  },
  {
    Name: 'Sayan Banerjee',
    Email: 'xyz@accenture.com',
    Phone: '1234567890',
    SkillSet: '.net, angular, sql',
    id: '9876543',
    Base: 'Kolkata',
    du: 'DU09',
    Level: 'SSE'
  },
  {
    Name: 'Sudha Chandra',
    Email: 'abc@accenture.com',
    Phone: '9876543210',
    SkillSet: '.net, angular, sql',
    id: '1234567',
    Base: 'Chennai',
    du: 'DU09',
    Level: 'TL'
  },
  {
    Name: 'Sayan Banerjee',
    Email: 'xyz@accenture.com',
    Phone: '1234567890',
    SkillSet: '.net, angular, sql',
    id: '9876543',
    Base: 'Kolkata',
    du: 'DU09',
    Level: 'SSE'
  }];

  toggleNavBar(){
    this.navbarCollapsed=!this.navbarCollapsed;
  }

  toggleMenu(item:string) {
    if (item === 'candidate') {
      this.isCandidate = true;
      this.isInterviewer = false;
    } else if (item === 'interviewer') {
      this.isInterviewer = true;
      this.isCandidate = false;
    }
  }

}
