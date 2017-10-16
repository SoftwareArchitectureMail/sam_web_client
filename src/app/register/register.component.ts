import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {AbstractControl} from '@angular/forms';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { MailService } from '../mail.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  auth:any = false;
  register:any = true;
  rForm: FormGroup;
  titleAlert:string = 'Este campo es obligatorio';
  post:any;
  content={
    first_name:"",
    last_name:"",
    username:"",
    password:"",
    date_birth:"",
    gender:null,
    mobil_phone:null,
    current_email:null,
    location: null
  };


  constructor(private router:Router, private fb: FormBuilder, private mailService: MailService,  private http: Http) {
    router.events.subscribe(event => {
      if(localStorage.getItem("username")!=null && localStorage.getItem("token")!=null){
        this.auth=true;
      }else{
        this.auth=false;
      }
      if (event instanceof NavigationEnd ) {
        if (event.url !== "/register"){
          this.register = false;
        }
        if (event.url == "/register"){
          this.register = true;
        }
      }
    });
    this.rForm = fb.group({
      'name': [null,Validators.required],
      'lastname': [null, Validators.required],
      'user': [null, Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'year': ['',Validators.required],
      'month': ['',Validators.required],
      'day': ['',Validators.required],
      'gender':['',Validators.nullValidator],
      'phone':['',Validators.nullValidator],
      'email':['',Validators.nullValidator],
      'city':['',Validators.nullValidator]
    },{
      validator: PasswordValidation.MatchPassword // your validation method
    });

    }

addPost(post){
  this.content.first_name = post.name;
  this.content.last_name = post.lastname;
  this.content.username = post.user;
  this.content.password = post.password;
  this.content.date_birth = post.year +"/"+ post.month +"/"+ post.day;
  if (post.genter=="femenino"){
    this.content.gender = 0;
  }else{
    this.content.gender = 1;
  }
  this.content.mobil_phone = post.phone;
  this.content.current_email= post.email;
  this.content.location = post.city;

 this.mailService.register(this.content).subscribe(res => {
    console.log(res)
  });
  this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}

export class PasswordValidation {


      static MatchPassword(AC: AbstractControl) {
         let password = AC.get('password').value; // to get value in input tag
         let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
          if(password != confirmPassword) {
              AC.get('confirmPassword').setErrors( {MatchPassword: true} )
          } else {
              return null
          }
      }
  }
