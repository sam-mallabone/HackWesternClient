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
       /*THIS CODE BELOW IS DEPRACTED BUT WORKS*/ 
      // var mes = Object.assign([], data)
      // //console.log(mes[1].anger);
      // mes[0].anger = parseFloat(mes[0].anger) * 100 + " %";
      // mes[0].joy = parseFloat(mes[0].joy) * 100 + " %";
      // mes[0].surprise = parseFloat(mes[0].surprise) * 100 + " %";
      // mes[0].sadness = parseFloat(mes[0].sadness) * 100 + " %";
      // mes[0].fear = parseFloat(mes[0].fear) * 100 + " %";

      this.message = data;
    });
    
  }


}
