import { Component, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {DatatableComponent} from '@swimlane/ngx-datatable/src/components/datatable.component';
import { Router  } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
 today: number = Date.now();
  ngOnInit() {
    this.draft();
    this.start();
  }
  rows = [];
  selected = [];
  temp = [];

  active: boolean = true;

  @ViewChild('draft') table: DatatableComponent;

  constructor(
    private router: Router,
    private location: Location,
    private mailService: MailService,
    private http: Http) {
      this.rows= [];
      this.temp = [];
      this.selected = [];
    }


    draft() {
      this.mailService.draft().subscribe(res=> {
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
      this.draft();
      this.start();
    }

    getDraft(id){
      this.router.navigate(['/mail',{outlets:{'mailContent':['draftDetails',id]}}]);
    }
  }
