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

    inbox() {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://192.168.99.101:4000/inbox?page=1&per_page=100',options).map(
        response =>  response.json()
        )
    }

    getMail(id) {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://192.168.99.101:4000/inbox/'+String(id),options).map(
        response =>  response.json()
        )
    }

    readMail(id) {
      let body = { read: true }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put('http://192.168.99.101:4000/inbox/'+String(id),body,options).map(
        response =>  response.json()
        )
    }
  }
