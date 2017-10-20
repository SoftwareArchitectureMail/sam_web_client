import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router  } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { MessagingService } from "../messaging.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MailComponent implements OnInit {
message;
  showForm:boolean= false;
  changeStyle:boolean= false;

username='';
  constructor(
    private msgService: MessagingService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  this.router.navigate(['/mail',{outlets:{'mailContent':['inbox']}}]);
  this.username=  localStorage.getItem('username');
  this.msgService.receiveMessage();
  this.message = this.msgService.currentMessage;
  }

  setWidth() {
    if(this.changeStyle) {
      return "250px";
    } else {
      return "0";
    }
  }

  onShowForm(showForm: boolean){
    this.showForm = showForm;
  }

}
