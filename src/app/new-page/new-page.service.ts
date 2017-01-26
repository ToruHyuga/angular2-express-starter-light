import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewPageService {

  private mashapeKey = 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u';

  constructor(public http: Http) {}

   getTestUsers(): Observable<any> {

    return this.http.get('/api/test', {
      headers: new Headers({
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'application/json'
      })
    });
  }
}
