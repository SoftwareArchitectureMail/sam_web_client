import { Component, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  rows = [];
  selected =[];
  temp = [];

  @ViewChild('getInbox') table: DatatableComponent;

  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.getInbox();
  }

  getInbox() {
    this.mailService.inbox().subscribe((res)=>{
      this.rows=res;
      this.temp=res;
    })
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.sender.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ selected }) {
      console.log('Select Event', selected, this.selected);
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
  }

  onClick(row) {
    row.read = true;
    let i = 1;
    i = row.id;
    this.mailService.readMail(i).subscribe()
    /*this.mailService.getMail(i).subscribe()*/
  }

}
