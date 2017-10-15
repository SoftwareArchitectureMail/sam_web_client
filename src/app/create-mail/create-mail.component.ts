import { Component, EventEmitter, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-mail',
  templateUrl: './create-mail.component.html',
  styleUrls: ['./create-mail.component.css']
})
export class CreateMailComponent implements OnChanges {

  @Input() showForm: boolean;
  @Output() onShowForm = new EventEmitter<boolean>();
  constructor() { }

  ngOnChanges() {
  }

  changeForm(showForm:boolean){
    this.onShowForm.emit(showForm);
    this.showForm = showForm;
  }

  showFormMail() {
    if(this.showForm) {
      return "block";
    } else {
      return "none";
    }
  }

}
