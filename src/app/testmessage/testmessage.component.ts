import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-testmessage',
  templateUrl: './testmessage.component.html',
  styleUrls: ['./testmessage.component.css']
})
export class TestmessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToLogin(){
    this.router.navigate(['../login']);
  }

  GoToMessages() {
    this.router.navigate(['../message']);
  }



}
