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
      //data.length isnt actually an error
      for(var i = 0; i < data.length ; i++) {
        if(parseFloat(data[i].sentiment) < 0.25){
          data[i].sentiment = "😡";
        } else if (parseFloat(data[i].sentiment) < 0.75){
         data[i].sentiment = "😐";
        } else {
         data[i].sentiment = "😃";
        }
      }
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
    //const req = this.http.post(this.url + '/message', body);
    //req.subscribe();
    console.log('before');
    
    console.log('after');
    this.GetMessages();
  }

<<<<<<< HEAD
=======
  FilterMessages(angry: boolean, content: boolean, happy: boolean ) {
    console.log('hello');
    var temp = 0;
    this.http.get(this.url + "/message").subscribe(data => {
      //convert to seconds
      var timeNow = Date.now() / 1000;
      var temp = data.length;
      //data.length isnt actually an error
      for(var i = 0; i < temp; i++) {
        if(parseFloat(data[i].sentiment) < 0.25 ){
          data[i].sentiment = "😡";
        }else if (parseFloat(data[i].sentiment) < 0.75){
         data[i].sentiment = "😐";
        }else {
         data[i].sentiment = "😃";
        }
       
        //Removing the results that aren't supposed to be included
        // if(data[i].sentiment == "😡" && !angry) {
        //   console.log("I went in angry "+ i);
        //   data.splice(i, 1);
        // }
        // if(data[i].sentiment == "😐" && !content) {
        //   console.log("I went in content"+ i);
        //   data.splice(i, 1);
        // }
        // if(data[i].sentiment == "😃" && !happy) {
        //   console.log("I went in happy"+ i);
        //   data.splice(i, 1);
        // }
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
      var len = data.length;
      var count = 0;
      for(var i = 0; i < len; i++ ){
        //Removing the results that aren't supposed to be included
        if(data[count].sentiment == "😡" && !angry) {
          console.log("I went in angry "+ i);
          data.splice(count, 1);
          continue;
        }
        if(data[count].sentiment == "😐" && !content) {
          console.log("I went in content"+ i);
          data.splice(count, 1);
          continue;
        }
        if(data[count].sentiment == "😃" && !happy) {
          console.log("I went in happy"+ i);
          data.splice(count, 1);
          continue;
        }
        count++;
      }
      //Data is type object array
      data = data.reverse();
      this.messages = data;
      console.log(this.messages);
    });
  }
<<<<<<< HEAD
>>>>>>> b23b96c0221e2dbc6a487120d332e8df84a9c055
=======

  GoToDetails(message) {
      var partialURL = "../message/detail/" + message._id;
      this.router.navigate([partialURL])
  }
>>>>>>> 200bc1893f63b0a9d65e57fe725eb14c5d629b78
}
