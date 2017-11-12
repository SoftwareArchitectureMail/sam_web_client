import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sentmail } from '../sentmail';
import { MailService } from '../mail.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {MatSnackBar,MatDatepickerModule} from '@angular/material';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';


const COMMA = 188;

@Component({
  selector: 'app-create-mail',
  templateUrl: './create-mail.component.html',
  styleUrls: ['./create-mail.component.css']
})
export class CreateMailComponent {
  visible: boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = true;

// Enter, comma
 separatorKeysCodes = [ENTER, COMMA];

 recipients = [];
  public moment: Date = new Date();

public pickerColor: string = '#0070ba';

  es: any;
  sentmail=new Sentmail('','','','','','','');
  rForm: FormGroup;

  post: any;

  ngOnInit() {
    this.es = {
         firstDayOfWeek: 1,
         dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
         dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
         monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
         monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
    };
}

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

    this.recipients.forEach(function (value) {
      this.sentmail.recipient = value.username;
      this.sentmail.subject = post.subject;
      this.sentmail.message_body = post.message_body;
      this.sentmail.attachment = post.attachment;
      this.sentmail.draft = (post.draft)?post.draft:false;
      this.sentmail.urgent = (post.urgent)?post.urgent:false;
      this.sentmail.sent_date = post.sent_date;
      this.createMail(this.sentmail);
    });
    this.recipients=[];

  }

  createMail(mail) {
    this.mailService.createMail(mail).subscribe(res=> {
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


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.recipients.push({ username: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(recipient: any): void {
    let index = this.recipients.indexOf(recipient);

    if (index >= 0) {
      this.recipients.splice(index, 1);
    }
  }

}
