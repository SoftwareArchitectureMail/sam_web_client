import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-sent-details',
  templateUrl: './sent-details.component.html',
  styleUrls: ['./sent-details.component.css']
})
export class SentDetailsComponent implements OnInit {
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
   this.getSent(this.id);
  }

  getSent(id) {
    this.mailService.getSent(id).subscribe(res=> {
      this.mail=res;

    });
  }

}
