import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { MailService } from './mail.service'
import { SentComponent } from './sent/sent.component'

import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent, SentComponent, DraftComponent, InboxComponent
  ],
  imports: [
    NgxDatatableModule,
    HttpModule,
    BrowserModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
