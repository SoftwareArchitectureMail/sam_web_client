import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MailService {

  private samUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  sent() {
    let body = { }
    let headers = new Headers({ 'ContentType': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //return this.http.get(this.samUrl+'/sent',options).map(
    return this.http.get(this.samUrl+'/sent',options).map(
      response =>  response.json()
    );
    }

    draft() {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      //return this.http.get(this.samUrl+'/draft',options).map(
      return this.http.get(this.samUrl+'/draft',options).map(
        response =>  response.json()
      );
      }

      getSent(id) {
        let body = { }
        let headers = new Headers({ 'ContentType': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //return this.http.get(this.samUrl+'/sent/'+id,options).map(
        return this.http.get(this.samUrl+'/sent/'+id,options).map(
          response =>  response.json()
        );
        }
        getDraft(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          //return this.http.get(this.samUrl+'/draft/'+id,options).map(
          return this.http.get(this.samUrl+'/draft/'+id,options).map(
            response =>  response.json()
          );
          }

      createMail(mail){
        let body = JSON.stringify(mail);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.samUrl+'/send', body, options).map(
          response =>  response.json()
          );
      }


  }
