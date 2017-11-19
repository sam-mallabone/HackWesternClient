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
              var mes = Object.assign([], data)
              this.username = mes[0].username;
              this.message = mes[0].message;
              
              var timeNow = Date.now() / 1000;
              var oldTime = +mes[0].time;
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
              this.sentiment= mes[0].sentiment;
              this.anger = parseFloat(mes[0].anger) * 100;
              this.joy = parseFloat(mes[0].joy) * 100;
              this.surprise = parseFloat(mes[0].surprise) * 100;
              this.sadness = parseFloat(mes[0].sadness) * 100;
              this.fear = parseFloat(mes[0].fear) * 100;
              this.myMessage = mes;
        });
  }
  GoBack() {
    this.location.back();
  }

}
