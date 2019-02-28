import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userName:string;
arr = ['apple','orange','grape','mango']
  constructor() { }

  ngOnInit() {
   this.userName = 'jibin'
  

  }

}
