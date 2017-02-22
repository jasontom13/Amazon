import { Component, Input } from '@angular/core';
import { WalmartService } from '../../services/walmart.service';
import { SearchService } from '../../services/search.service';
import { WalmartResponse } from '../../walmartResponse';
import { WalmartItem } from '../../walmartItem';

@Component({
  selector: 'home-page-recommendations',
  templateUrl: 'app/HomePage/HomePageRecommendations/home-page-recommendations.component.html'
})
export class HomePageRecommendations  {
  @Input() query : string;
  data : any;
  items : WalmartItem[];
  itemName : any;
  constructor(private walmartService: WalmartService, private searchService: SearchService){

  }
  ngOnInit(){
    this.searchService.getQuery().subscribe((query: string) => {
      this.walmartService.getData(query).subscribe((walmartRes: WalmartResponse) => {
        this.items = walmartRes.items;
        for (var i=0; i<this.items.length; i++){
          console.log("BEFORE " + this.items[i].longDescription + "\n")
          // this.items[i].longDescription.replace(/&amp;/g, '&');
          this.items[i].longDescription.replace(/&lt;/g, '<');
          this.items[i].longDescription.replace(/&gt;/g, '>');
          console.log("AFTER " + this.items[i].longDescription + "\n")
        }
        this.items = this.items;

      });
    });
  }

}
