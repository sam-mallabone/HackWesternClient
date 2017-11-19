import { Component, OnInit } from '@angular/core';
import {UsernameService} from '../username.service'
import {Location} from '@angular/common'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usernameService: UsernameService, private location: Location, private router: Router) { }

  ngOnInit() {
  }

  SetUserName(name: String) {
    if(name){
      console.log('called for location');
      this.usernameService.SetUserName(name);
      this.router.navigate(['../message'])
    }
    else{
      alert("Please enter a name");
    }
  }

  GoToTestMessage() {
    this.router.navigate(['../testmessage'])
  }


}
