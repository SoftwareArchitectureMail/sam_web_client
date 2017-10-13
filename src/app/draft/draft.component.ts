import { Component, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {DatatableComponent} from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  ngOnInit() {
    this.draft();
  }
  rows = [];

  temp = [];

  columns = [
    { name: 'recipient' },
    { name: 'subject' },
    { prop: 'message_body' },
    { prop: 'created_at' },
    { name: 'urgent' }
  ];

  @ViewChild('draft') table: DatatableComponent;

  constructor(
    private mailService: MailService,
    private http: Http) {
      this.temp = [];
      this.rows= [];
    }


    draft() {
      this.mailService.draft().subscribe(res=> {
        this.rows=res;
        this.temp=res;
      });
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
    }


  }
