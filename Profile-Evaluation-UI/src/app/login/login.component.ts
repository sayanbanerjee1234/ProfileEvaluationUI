import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    isForgetPassword:boolean=false;
    isConfirmPassWord:boolean=false;
    forgetEmail:any;
    clickForgetPassword(){
      this.isForgetPassword=true;
    }
    backForgetPassword(){
      this.isForgetPassword=false;
    }
    submitForgetPassword(item:any){
      this.isConfirmPassWord=true;
      this.forgetEmail=item.forgetEmail;
    }
    backConfirmPassword(){
      this.isConfirmPassWord=false;
    }
    submitConfirmPassword(){
      this.isForgetPassword=false;
      this.isConfirmPassWord=false;
    }
}
