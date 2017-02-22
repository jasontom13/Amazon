import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'home-page-header',
  templateUrl: 'app/HomePage/HomePageHeader/home-page-header.component.html'
})
export class HomePageHeader  {
  constructor(
    private router : Router,
    private searchService : SearchService
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
    this.router.navigate(['login']);
  };
  search(){
    this.searchService.setQuery(this.searchString);
  };


}
