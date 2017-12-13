import { Component, OnInit } from '@angular/core';

import { Farmers } from '../../farmers';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-1-farmer',
  templateUrl: './step-1-farmer.component.html',
  styleUrls: ['./step-1-farmer.component.css']
})
export class Step1FarmerComponent implements OnInit {

	farmer: Farmers;
	step1form: FormGroup;

	constructor() { }

	ngOnInit() {
		this.step1form = new FormGroup({
			name: new FormControl(''),
			age: new FormControl(''),
			gender: new FormControl(''),
			mob1: new FormControl(''),
			mob2: new FormControl(''),
			village: new FormControl(''),
			citytown: new FormControl(''),
			state: new FormControl(''),
			pin: new FormControl(''),
			aadhar: new FormControl('')
		})
	}

}
