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
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);
    });
    var user = firebase.auth().currentUser;
    if(user){
      alert("Logged In User: " + user.email);
    }
    else{
      alert("Null");
    }


    this.router.navigate(['/home']);

  }
  register(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);

    });
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
