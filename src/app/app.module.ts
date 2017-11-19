import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AppRoutingModule } from './/app-routing.module';
import { GetMessagesService } from './get-messages.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import {UsernameService} from './username.service';
import { TestmessageComponent } from './testmessage/testmessage.component'

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent,
    LoginComponent,
    TestmessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetMessagesService, UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
