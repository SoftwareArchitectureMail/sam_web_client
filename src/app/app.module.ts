import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {MatSnackBarModule,MatCardModule,MatButtonModule, MatIconModule, MatChipsModule, MatCheckboxModule,MatSlideToggleModule,MatFormFieldModule,MatExpansionModule,MatGridListModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { MessagingService } from './messaging.service';


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
    MatGridListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    DateTimePickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
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
  providers: [MailService,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
