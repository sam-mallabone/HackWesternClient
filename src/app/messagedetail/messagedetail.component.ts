import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  private url = "https://hackwesternserver-sammallabone.c9users.io/api";
  //variable that is bound to the View
  //message;
  public myMessage;
  public username;
  public message; 
  public time; 
  sentiment; anger; joy; surprise;
  sadness; fear;
  constructor(private location: Location, 
    private http: HttpClient, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.http.get(this.url + '/message/' + id)
        .subscribe(data => {
          console.log(data);
              //All these objects exist they are just not seen
              //Says there are errors but there actually isn't. It just can't 
              //this.message = data;
              this.username = data.username;
              this.message = data.message;
              
              var timeNow = Date.now() / 1000;
              var oldTime = +data.time;
              oldTime = oldTime / 1000;
              var timeDiff = Math.round(timeNow - oldTime);
              if(timeDiff < 60){
                this.time = timeDiff.toString() + " seconds ago";
              }
              else if(timeDiff < 3600){
                this.time = Math.round((timeDiff / 60)).toString() + " minutes ago";
              }
              else if(timeDiff < 86400){
                this.time = Math.round((timeDiff / 3600)).toString() + " hours ago"
              }
              this.sentiment= data.sentiment;
              this.anger = parseFloat(data.anger) * 100;
              this.joy = parseFloat(data.joy) * 100;
              this.surprise = parseFloat(data.surprise) * 100;
              this.sadness = parseFloat(data.sadness) * 100;
              this.fear = parseFloat(data.fear) * 100;
              this.myMessage = data;
        });
  }

  GoBack() {
    this.location.back();
  }

}
