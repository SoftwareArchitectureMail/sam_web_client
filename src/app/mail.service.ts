import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MailService {

  private samUrl = 'http://192.168.99.101:4000';
  //private samUrl = 'http://localhost:4000';
  sender='?sender='+localStorage.getItem('username');
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
    let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.samUrl+'/sent',options).map(
      response =>  response.json()
    );
    }

    draft() {
      let body = { }
      let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.samUrl+'/draft',options).map(
        response =>  response.json()
      );
      }

      getSent(id) {
        let body = { }
        let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.samUrl+'/sent/'+id,options).map(
          response =>  response.json()
        );
        }
        getDraft(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.get(this.samUrl+'/draft/'+id,options).map(
            response =>  response.json()
          );
          }

      createMail(mail){
        let body = JSON.stringify(mail);
        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.samUrl+'/send', body, options).map(
          response =>  response.json()
          );
      }
      inbox() {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
            return this.http.get(this.samUrl+'/inbox',options).map(
            response =>  response.json()
            )
        }

        getMail(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.get(this.samUrl+'/inbox/'+id,options).map(
            response =>  response.json()
            )
        }

        deleteSent(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.delete(this.samUrl+'/sent/'+id,options).map(
            response =>  response.json()
            )
        }

        deleteDraft(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.delete(this.samUrl+'/draft/'+id,options).map(
            response =>  response.json()
            )
        }

        deleteMail(id) {
          let body = { }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.delete(this.samUrl+'/inbox/'+id,options).map(
            response =>  response.json()
            )
        }
        readMail(id) {
          let body = { read: true }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.put(this.samUrl+'/inbox/'+id,body,options).map(
            response =>  response.json()
            )
        }

        updateToken(uId) {
          let body = { read: true }
          let headers = new Headers({ 'ContentType': 'application/json','Authorization': localStorage.getItem('token') });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.samUrl+'/user_devices'+uId,body,options).map(
            response =>  response.json()
            )
        }



  }
