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
  message;
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
              this.message = data;
        });
  }

  GoBack() {
    this.location.back();
  }

}
