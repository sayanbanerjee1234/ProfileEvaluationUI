import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InterviewerRegisterComponent } from './interviewer-register/interviewer-register.component';
import { InterviewerHomeComponent } from './interviewer-home/interviewer-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path:'admin-dashboard', component:AdminHomeComponent,
  },
  {
    path:'interviewer-dashboard', component:InterviewerHomeComponent,
  },
  {
    path:'interviewer-register', component:InterviewerRegisterComponent,
  },  
  {
    path:'admin-register', component:RegisterComponent,
  },
  {
    path:'login', component:LoginComponent,
  },  
  {
    path:'**', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
