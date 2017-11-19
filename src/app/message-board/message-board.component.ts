import { Component, OnInit } from '@angular/core';
import { GetMessagesService } from '../get-messages.service'
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'
import { UsernameService } from '../username.service'
import {Router} from '@angular/router'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  private url = "https://hackwesternserver-sammallabone.c9users.io/api";
  messages;
  constructor(private getMessagesService: GetMessagesService, private http: HttpClient, private usernameService: UsernameService, private router: Router) { }

  ngOnInit() {
    this.GetMessages();
  }

  GetMessages() : void {
    console.log('hello');
    this.http.get(this.url + "/message").subscribe(data => {
      //convert to seconds
      var timeNow = Date.now() / 1000;
      var mes = Object.assign([], data);
      //data.length isnt actually an error
      for(var i = 0; i < mes.length; i++) {
        if(parseFloat(mes[i].sentiment) < 0.25){
          mes[i].sentiment = "😡";
        } else if (parseFloat(mes[i].sentiment) < 0.75){
         mes[i].sentiment = "😐";
        } else {
         mes[i].sentiment = "😃";
        }
        //unary operator to convert to number
        var oldTime = +data[i].time;
        oldTime = oldTime / 1000;
        var timeDiff = Math.round(timeNow - oldTime);
        if(timeDiff < 60){
          mes[i].time = timeDiff.toString() + " seconds ago";
        }
        else if(timeDiff < 3600){
          mes[i].time = Math.round((timeDiff / 60)).toString() + " minute(s) ago";
        }
        else if(timeDiff < 86400){
          mes[i].time = Math.round((timeDiff / 3600)).toString() + " hour(s) ago"
        }
        else{
          mes[i].time = "Over one day ago"
        }
      }
      //Data is type object array
      mes = mes.reverse();
      this.messages = mes;
      console.log(this.messages);
    });
  }
  
  PostMessage(msg: String){
    console.log("POST called");
    var today = Date.now();
    var stringTime = today.toString();
    var name = this.usernameService.GetUserName();
    var body = {userName: name, message: msg, time: stringTime, sentiment: " "};
    const req = this.http.post(this.url + '/message', body);
    req.subscribe();
    setTimeout(() => {
      this.GetMessages();
    }, 1000);
  }

  FilterMessages(angry: boolean, content: boolean, happy: boolean ) {
    console.log('hello');
    var temp = 0;
    this.http.get(this.url + "/message").subscribe(data => {
      var mes = Object.assign([], data);
      //convert to seconds
      var timeNow = Date.now() / 1000;
      var temp = mes.length;
      //data.length isnt actually an error
      for(var i = 0; i < temp; i++) {
        if(parseFloat(mes[i].sentiment) < 0.25 ){
          mes[i].sentiment = "😡";
        }else if (parseFloat(mes[i].sentiment) < 0.75){
         mes[i].sentiment = "😐";
        }else {
         mes[i].sentiment = "😃";
        }

        //unary operator to convert to number
        var oldTime = +mes[i].time;
        oldTime = oldTime / 1000;
        var timeDiff = Math.round(timeNow - oldTime);
        if(timeDiff < 60){
          mes[i].time = timeDiff.toString() + " seconds ago";
        }
        else if(timeDiff < 3600){
          mes[i].time = Math.round((timeDiff / 60)).toString() + " minute(s) ago";
        }
        else if(timeDiff < 86400){
          mes[i].time = Math.round((timeDiff / 3600)).toString() + " hour(s) ago"
        }
        else{
          data[i].time = "Over one day ago"
        }
      }
      var len = mes.length;
      var count = 0;
      for(var i = 0; i < len; i++ ){
        //Removing the results that aren't supposed to be included
        if(mes[count].sentiment == "😡" && !angry) {
          console.log("I went in angry "+ i);
          mes.splice(count, 1);
          continue;
        }
        if(mes[count].sentiment == "😐" && !content) {
          console.log("I went in content"+ i);
          mes.splice(count, 1);
          continue;
        }
        if(mes[count].sentiment == "😃" && !happy) {
          console.log("I went in happy"+ i);
          mes.splice(count, 1);
          continue;
        }
        count++;
      }
      //Data is type object array
      mes = mes.reverse();
      this.messages = mes;
      console.log(this.messages);
    });
  }

  GoToDetails(message) {
      var partialURL = "../message/detail/" + message._id;
      this.router.navigate([partialURL])
  }

  TestMessage() {
    this.router.navigate(['../testmessage'])
  }

}
