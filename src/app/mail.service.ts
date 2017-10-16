import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  constructor(private http: Http) { }
    register(content) {
      let body =  content;
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://192.168.99.101:4000/users/create',body,options).map(
        response =>  response.json()
      );
      }
      login(content) {
        let body =  content;
        let headers = new Headers({ 'ContentType': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://192.168.99.101:4000/users/login',body,options).map(
          response =>  response.json()
        );
        }
  sent() {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.get('http://192.168.99.101:4000/sent',options).map(
            response =>  response.json()
            )
          }
    draft() {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://192.168.99.101:4000/draft',options).map(
        response =>  response.json()
        )
      }
  }
