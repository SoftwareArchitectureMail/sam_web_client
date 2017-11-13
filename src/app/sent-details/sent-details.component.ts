import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../mail.service';
import {MatCardModule,MatExpansionModule,MatSnackBar} from '@angular/material';
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
    private router: Router,
    private mailService: MailService,
      public snackBar: MatSnackBar,
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
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000,
      });
    }
volver(){
  this.router.navigate(['/mail',{outlets:{'mailContent':['sent']}}]);
}
  deleteSent(id){
    this.mailService.deleteSent(id).subscribe(res=> {
      this.openSnackBar('Mensaje eliminado','Cerrar');
      this.router.navigate(['/mail',{outlets:{'mailContent':['sent']}}]);
    });
  }
}
