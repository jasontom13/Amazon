import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: 'app/LoginPage/login.component.html',
})
export class LoginPage  {
  constructor(
    private router: Router
  ){}
  hideToggle: boolean = true;
  email: string;
  password: string;
  hideClass: string = 'fa fa-eye-slash';
  login(){
    this.router.navigate(['/home']);
  }
  register(){
    this.login();

  }
  togglePasswordHide(){
    this.hideToggle = !this.hideToggle;
    if(!this.hideToggle){
      this.hideClass='fa fa-eye';
    }
    else{
      this.hideClass='fa fa-eye-slash';
    }
  }
}
