import {Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  home:any = true;
  auth:any = false;
  user:any = localStorage.getItem("username");
  constructor(private router:Router) {
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
    this.router.navigate(['/']);
  }

}
