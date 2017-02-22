import { Injectable } from '@angular/core';
import { Jsonp, Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { WalmartResponse } from '../walmartResponse';

@Injectable()
export class WalmartService{

  data : any;
  constructor(private _http: Http, private jsonp: Jsonp){

  }
  getData(query : string): Observable<WalmartResponse>{
    return this._http.get('http://localhost:8000/search/'+ query)
      .map((res:Response) => res.json());
  }

}
