import { Component } from '@angular/core';



@Component({
  selector: 'home-page',
  templateUrl: 'app/HomePage/home-page.component.html',
})
export class HomePage  {
  email='Null';
  var user = firebase.auth().currentUser;
  if(user){
    alert("Home Page: Logged In User: " + user.email);
    this.email=user.email;
  }
  else{
    alert("Null");
    this.email="Null2";
  }
}
