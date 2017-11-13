import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../mail.service';
import {MatCardModule,MatExpansionModule,MatSnackBar} from '@angular/material';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css']
})
export class MailDetailsComponent implements OnInit {

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
     this.getMail(this.id);
    }

    getMail(id) {
      this.mailService.getMail(id).subscribe(res=> {
        this.mail=res;
        this.mailService.readMail(id).subscribe(res=> {});
      });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3000,
        });
      }
volver(){
  this.router.navigate(['/mail',{outlets:{'mailContent':['inbox']}}]);
}
    deleteMail(id){
      this.mailService.deleteMail(id).subscribe(res=> {
        this.openSnackBar('Mensaje eliminado','Cerrar');
        this.router.navigate(['/mail',{outlets:{'mailContent':['inbox']}}]);
      });
    }

  }
