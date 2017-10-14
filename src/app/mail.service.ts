import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  constructor(private http: Http) { }
  sent() {
    let body = { }
    let headers = new Headers({ 'ContentType': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //return this.http.get('http://192.168.99.101:4000/sent',options).map(
    return this.http.get('http://localhost:4000/sent',options).map(
      response =>  response.json()
      )
    }

    draft() {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      //return this.http.get('http://192.168.99.101:4000/draft',options).map(
      return this.http.get('http://localhost:4000/draft',options).map(
        response =>  response.json()
        )
      }

      getSent(id) {
        let body = { }
        let headers = new Headers({ 'ContentType': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //return this.http.get('http://192.168.99.101:4000/sent/'+id,options).map(
        return this.http.get('http://localhost:4000/sent/'+id,options).map(
          response =>  response.json()
          )
        }


  }
