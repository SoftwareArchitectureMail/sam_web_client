import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {AbstractControl} from '@angular/forms';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { MailService } from '../mail.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { MessagingService } from "../messaging.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth:any = false;
  login:any = true;
  rForm: FormGroup;
  error:any = false;
  titleAlert:string = 'Este campo es obligatorio';
  post:any;
  content={
    username:"",
    password:"",
    device_id: []
  };


  constructor(private msgService: MessagingService,private router:Router, private fb: FormBuilder, private mailService: MailService,  private http: Http) {
    router.events.subscribe(event => {
      if(localStorage.getItem("username")!=null && localStorage.getItem("token")!=null){
        this.auth=true;
      }else{
        this.auth=false;
      }
      if (event instanceof NavigationEnd ) {
        if (event.url !== "/login"){
          this.login = false;
        }
        if (event.url == "/login"){
          this.login = true;
        }
      }
    });
    this.rForm = fb.group({
      'user': [null, Validators.required],
      'password': ['', Validators.required]
    });

    }

addPost(post){
  this.content.username = post.user;
  this.content.password = post.password;
  this.content.device_id = this.msgService.getDeviceId();
  let request = this.mailService.login(this.content).subscribe(res => {
    console.log(res);
    localStorage.setItem('username',res.username);
    localStorage.setItem('token',res.token.token);
  });
  setTimeout(() =>
  {
    if(localStorage.getItem("username")!=null && localStorage.getItem("token")!=null){
      this.router.navigate(['/mail']);
      this.error=false;
    }else{
      this.error=true;
    }
  },
  1000);


  }

  ngOnInit() {
    this.msgService.getPermission()
  }
}
