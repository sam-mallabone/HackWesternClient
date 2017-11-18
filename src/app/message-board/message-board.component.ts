import { Component, OnInit } from '@angular/core';
import { GetMessagesService } from '../get-messages.service'
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

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
  constructor(private getMessagesService: GetMessagesService, private http: HttpClient) { }

  ngOnInit() {
    this.GetMessages();
  }

  GetMessages() : void {
    console.log('hello');
    this.http.get(this.url + "/message").subscribe(data => {
      this.messages = data;
    });
  }

}
