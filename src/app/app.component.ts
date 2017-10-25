import {Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MessagingService } from "./messaging.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  home:any = true;
  auth:any = false;
  user:any = localStorage.getItem("username");
  device_id:any=localStorage.getItem("device_id");
  constructor(private router:Router,private msgService: MessagingService) {
    router.events.subscribe(event => {
      if(localStorage.getItem("username")!=null && localStorage.getItem("token")!=null){
        this.auth=true;
      }else{
        this.auth=false;
      }
      if (event instanceof NavigationEnd ) {
        //console.log(event.url !== "/"); // event.url has current url
        if (event.url !== "/"){
          this.home = false;
        }
        if (event.url == "/"){
          this.home = true;
        }
      }
    });

  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('token');    //remove user local storage
    localStorage.removeItem('device_id');
    this.router.navigate(['/']);
  }


    ngOnInit() {
      this.msgService.getPermission();
    }
}
