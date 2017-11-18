import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class GetMessagesService {
  private url = "https://hackwesternserver-sammallabone.c9users.io/api";

  constructor(private http: HttpClient) { }

  GetMessages()  {
    console.log('hello');
      this.http.get(this.url + "/message").subscribe(data => {
        console.log(data) });
      
  }
}
