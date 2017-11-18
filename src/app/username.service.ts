import { Injectable } from '@angular/core';

@Injectable()
export class UsernameService {
  private username: String;

  SetUserName(name: String){
    this.username = name;
  }

  GetUserName() { 
    return this.username;
  }
  constructor() { }

}
