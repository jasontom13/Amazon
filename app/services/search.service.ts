import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  private query : string;
  private subject : Subject<string> = new Subject<string>();
  setQuery(q : string){
    this.query = q;
    this.subject.next(this.query);
  }
  getQuery() : Observable<string>{
    return this.subject.asObservable();
  }

}
