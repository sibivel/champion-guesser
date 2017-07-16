import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MatchService {

  constructor(private http: Http) { }
  getMatch(){
    // Make the HTTP request:
    return this.http.get("/api/match/").toPromise().then(function(response){
      console.log(response);
    })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
