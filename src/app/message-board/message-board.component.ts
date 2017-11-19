import { Component, OnInit } from '@angular/core';
import { GetMessagesService } from '../get-messages.service'
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'
import { UsernameService } from '../username.service'

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
  constructor(private getMessagesService: GetMessagesService, private http: HttpClient, private usernameService: UsernameService) { }

  ngOnInit() {
    this.GetMessages();
  }

  GetMessages() : void {
    console.log('hello');
    this.http.get(this.url + "/message").subscribe(data => {
      //convert to seconds
      var timeNow = Date.now() / 1000;
      //data.length isnt actually an error
      for(var i = 0; i < 5; i++) {
        if(parseFloat(data[i].sentiment) < 0.25){
          data[i].sentiment = "😡";
        } else if (parseFloat(data[i].sentiment) < 0.75){
         data[i].sentiment = "😐";
        } else {
         data[i].sentiment = "😃";
        }
        //unary operator to convert to number
        var oldTime = +data[i].time;
        oldTime = oldTime / 1000;
        var timeDiff = Math.round(timeNow - oldTime);
        if(timeDiff < 60){
          data[i].time = timeDiff.toString() + " seconds ago";
        }
        else if(timeDiff < 3600){
          data[i].time = Math.round((timeDiff / 60)).toString() + " minutes ago";
        }
        else if(timeDiff < 86400){
          data[i].time = Math.round((timeDiff / 3600)).toString() + " hours ago"
        }
        else{
          data[i].time = "Over one day ago"
        }
      }
      //Data is type object array
      data = data.reverse();
      this.messages = data;
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
}
