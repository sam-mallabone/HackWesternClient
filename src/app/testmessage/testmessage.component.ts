import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Component({
  selector: 'app-testmessage',
  templateUrl: './testmessage.component.html',
  styleUrls: ['./testmessage.component.css']
})
export class TestmessageComponent implements OnInit {
  private url = "https://hackwesternserver-sammallabone.c9users.io/api";
  public message;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  GoToLogin(){
    this.router.navigate(['../login']);
  }

  GoToMessages() {
    this.router.navigate(['../message']);
  }

  TestMessage(msg: String){
    console.log("POST called");
    var today = Date.now();
    var stringTime = today.toString();
    //var name = this.usernameService.GetUserName();
    var body = {userName: " ", message: msg, time: stringTime, sentiment: " "};
    const req = this.http.post(this.url + '/test', body);
    req.subscribe(data => 
    {
      console.log(data);
      data.anger = parseFloat(data.anger) * 100;
      data.joy = parseFloat(data.joy) * 100;
      data.surprise = parseFloat(data.surprise) * 100;
      data.sadness = parseFloat(data.sadness) * 100;
      data.fear = parseFloat(data.fear) * 100;

      this.message = data;
    });
    
  }


}
