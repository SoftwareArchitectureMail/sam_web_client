import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sentmail } from '../sentmail';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-mail',
  templateUrl: './create-mail.component.html',
  styleUrls: ['./create-mail.component.css']
})
export class CreateMailComponent {

  sentmail=new Sentmail('','','','','','','');
  rForm: FormGroup;

  post: any;

  public options: Object={
    placeholderText: 'Escribe tu mensaje',
    charCounterCount:false
  }

  @Input() showForm: boolean;
  @Output() onShowForm = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private mailService: MailService
  ) {
    this.rForm=fb.group({
      'recipient': [null,Validators.required],
      'subject': '',
      'message_body': '',
      'attachment': '',
      'draft':'',
      'urgent': '',
      'sent_date': '',
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  addPost(post){

    this.sentmail.recipient = post.recipient;
    this.sentmail.subject = post.subject;
    this.sentmail.message_body = post.message_body;
    this.sentmail.attachment = post.attachment;
    this.sentmail.draft = (post.draft)?post.draft:false;
    this.sentmail.urgent = (post.urgent)?post.urgent:false;
    this.sentmail.sent_date = post.sent_date;
    this.createMail(this.sentmail);

  }

  createMail(mail) {
    this.mailService.createMail(mail).subscribe(res=> {
      console.log(res);
      this.changeForm(false);
      this.openSnackBar('Mensaje enviado', 'Cerrar');
    });
  }

  changeForm(showForm:boolean){
    this.onShowForm.emit(showForm);
    this.showForm = showForm;
    this.rForm.reset();
  }

  showFormMail() {
    if(this.showForm) {
      return "block";
    } else {
      return "none";
    }
  }

}
