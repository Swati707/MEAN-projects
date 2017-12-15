import { Component, OnInit } from '@angular/core';

import { Farmers } from '../farmers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	userType: any = null;
  farmer: Farmers;

	selectedUserType(user){
		this.userType = user;
		console.log("#"+ this.userType);
	}

  receiveEvent($event){
    this.farmer = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
