import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router  } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MailComponent implements OnInit {

  showForm:boolean= false;
  changeStyle:boolean= false;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  this.router.navigate(['/mail',{outlets:{'mailContent':['inbox']}}]);
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
