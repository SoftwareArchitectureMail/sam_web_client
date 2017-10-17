import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../mail.service';
import {MatCardModule,MatExpansionModule,MatSnackBar} from '@angular/material';
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
     this.getDraft(this.id);
    }

    getDraft(id) {
      this.mailService.getDraft(id).subscribe(res=> {
        this.mail=res;
      });
    }
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3000,
        });
      }
volver(){
  this.router.navigate(['/mail',{outlets:{'mailContent':['drafts']}}]);
}
    deleteDraft(id){
      this.mailService.deleteDraft(id).subscribe(res=> {
        this.openSnackBar('Borrador eliminado','Cerrar');
        this.router.navigate(['/mail',{outlets:{'mailContent':['drafts']}}]);
      });
    }
  }
