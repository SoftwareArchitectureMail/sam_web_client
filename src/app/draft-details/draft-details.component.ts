import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-draft-details',
  templateUrl: './draft-details.component.html',
  styleUrls: ['./draft-details.component.css']
})
export class DraftDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  mail=[];
    constructor(
      private route: ActivatedRoute,
      private mailService: MailService,
      private http: Http
    ) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
     });
     this.getDraft(this.id);
    }

    getDraft(id) {
      this.mailService.getDraft(id).subscribe(res=> {
        this.mail=res;

      });
    }

  }
