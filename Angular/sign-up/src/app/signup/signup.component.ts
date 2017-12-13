import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	userType: any = null;
	selectedUserType(user){
		this.userType = user;
		console.log("#"+ this.userType);
	}
  constructor() { }

  ngOnInit() {
  }

}
