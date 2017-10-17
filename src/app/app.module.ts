import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule,MatCardModule,MatButtonModule, MatCheckboxModule,MatSlideToggleModule,MatFormFieldModule,MatExpansionModule} from '@angular/material';

import { MailService } from './mail.service';
import { SentComponent } from './sent/sent.component';
import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { RegisterComponent } from './register/register.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MailComponent } from './mail/mail.component';
import { SentDetailsComponent } from './sent-details/sent-details.component';
import { DraftDetailsComponent } from './draft-details/draft-details.component';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { CreateMailComponent } from './create-mail/create-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SentComponent,
    DraftComponent,
    RegisterComponent,
    InboxComponent,
    LoginComponent,
    NotificationsComponent,
    MailComponent,
    SentDetailsComponent,
    DraftDetailsComponent,
    MailDetailsComponent,
    CreateMailComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot([
      {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'mail',
      component: MailComponent,
      children: [
        {
          path: 'inbox',
          component: InboxComponent,
          outlet: 'mailContent'
        },
          {
          path: 'sent',
          component: SentComponent,
          outlet: 'mailContent'
        },
        {
        path: 'drafts',
        component: DraftComponent,
        outlet: 'mailContent'
      },
      {
      path: 'createmail',
      component: CreateMailComponent,
      outlet: 'mailContent'
    },
      {
        path: 'sentDetails/:id',
        component: SentDetailsComponent,
        outlet: 'mailContent'
      },
      {
        path: 'draftDetails/:id',
        component: DraftDetailsComponent,
        outlet: 'mailContent'
      },
      {
        path: 'mailDetails/:id',
        component: MailDetailsComponent,
        outlet: 'mailContent'
      },
      ]
    }
  ])
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
