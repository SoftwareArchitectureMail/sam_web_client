import {Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home:any = true;
  let
  constructor(private router:Router) {
    localStorage.setItem('username','janoguerab');
    router.events.subscribe(event => {
      
      if (event instanceof NavigationEnd ) {
        //console.log(event.url !== "/"); // event.url has current url
        if (event.url !== "/"){
          this.home = false;
        }
      }
    });
  }


}
