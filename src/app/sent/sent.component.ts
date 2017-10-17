import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MailService } from '../mail.service';
import { DatePipe } from '@angular/common';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {DatatableComponent} from '@swimlane/ngx-datatable/src/components/datatable.component';
import { Router  } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})

export class SentComponent implements OnInit {
today: number = Date.now();
  ngOnInit() {
    this.sent();
    this.start();
  }
  rows = [];
  selected = [];
  temp = [];

  active: boolean = true;

  @ViewChild('sent') table: DatatableComponent;

  constructor(
    private router: Router,
    private location: Location,
    private mailService: MailService,
    private http: Http) {
      this.rows= [];
      this.temp = [];
      this.selected = [];
    }


    sent() {
      this.mailService.sent().subscribe(res=> {
        this.rows=res;
        this.selected=this.selected;
        this.temp=res;
      });
    }

    onSelect({ selected }) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
  }


    updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function(d) {
        return d.recipient.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;

      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
      this.active = true;
    }

    start() {
      if(!this.active) return;
      setTimeout(this.updateRandom.bind(this), 60000);
    }

    updateRandom(){
      this.sent();
      this.start();
    }

    getSent(id){
      this.router.navigate(['/mail',{outlets:{'mailContent':['sentDetails',id]}}]);
    }
  }
