import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MailService } from './mail.service'
import { SentComponent } from './sent/sent.component'
import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { RegisterComponent } from './register/register.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SentComponent,
    DraftComponent,
    RegisterComponent,
    InboxComponent,
    LoginComponent,
    NotificationsComponent
  ],
  imports: [
    NgxDatatableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
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
      path: 'inbox',
      component: InboxComponent
    },
      {
      path: 'sent',
      component: SentComponent
    },
    {
    path: 'drafts',
    component: DraftComponent
  }
  ])
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
