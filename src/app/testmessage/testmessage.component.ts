<<<<<<< HEAD
import { Component, OnInit } from '@angular/core'; 
=======
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
>>>>>>> 200bc1893f63b0a9d65e57fe725eb14c5d629b78

@Component({
  selector: 'app-testmessage',
  templateUrl: './testmessage.component.html',
  styleUrls: ['./testmessage.component.css']
})
export class TestmessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  displayEmo(){
    
  }

=======
  GoToLogin(){
    this.router.navigate(['../login']);
  }

  GoToMessages() {
    this.router.navigate(['../message']);
  }



>>>>>>> 200bc1893f63b0a9d65e57fe725eb14c5d629b78
}
