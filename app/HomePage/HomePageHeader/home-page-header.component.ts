import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page-header',
  templateUrl: 'app/HomePage/HomePageHeader/home-page-header.component.html'
})
export class HomePageHeader  {
  constructor(
    private router : Router
  ){};
  items = ["--","Auto", "Home", "Beauty"];
  selectedSearchField : string = "Select";
  searchString: string;
  selectField(field: string): void {
    if(field=="--"){
      this.selectedSearchField = "Select";
    }
    else{
      this.selectedSearchField = field;
    }
  };
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      alert("Error logging out: " + error.message);
    });
    this.router.navigate(['login']);
  };
  // search(){
  //   firebase.database().ref('users/' + "test").set({
  //   searchString: this.searchString
  // });
  // };
}
