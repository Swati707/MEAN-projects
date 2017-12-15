import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Farmers } from '../../farmers';
import { StateDistrictService } from '../stateDistrictService';
import { State } from '../states';
import { District } from '../districts';

@Component({
  selector: 'app-step-1-farmer',
  templateUrl: './step-1-farmer.component.html',
  styleUrls: ['./step-1-farmer.component.css'],
  providers: [StateDistrictService]
})
export class Step1FarmerComponent implements OnInit {

	farmer: Farmers;
	step1Form: FormGroup;
	states: State[];
	districts: District[];

	@Output() transferEvent = new EventEmitter<Farmers>();

	step1Submit(){
		let detail: any = this.step1Form.value;
		let states:State[];
		let districts:District[];
		let f:any = {address: {}};
		states = this._ds.getStates().filter((item)=> item.id == detail.state);
		districts = this._ds.getDistricts().filter((item)=> item.id == detail.district);
		f.name = detail.name;
		f.age = detail.age;
		f.gender = detail.gender;
		f.address.village = detail.village;
		f.address.citytown = detail.citytown;
		f.address.district = districts[0].name;
		f.address.state = states[0].name;
		f.address.pin = detail.pin;
		f.aadhar = detail.aadhar;
		f.mob1 = detail.mob1;
		f.mob2 = detail.mob2;
		this.farmer = f;
		console.log(this.farmer);
		this.transferEvent.emit(this.farmer);
	}

	constructor(private _ds: StateDistrictService) {
		this.states = this._ds.getStates();
	}
	onStateSelect(stateid){
		this.districts = this._ds.getDistricts().filter((item)=> item.stateid == stateid);	
	}

	ngOnInit() {
		this.step1Form = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z]+')]),
			age: new FormControl(''),
			gender: new FormControl('', Validators.required),
			mob1: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]),
			mob2: new FormControl('', [Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]),
			village: new FormControl('', Validators.required),
			citytown: new FormControl(''),
			district: new FormControl('', Validators.required),
			state: new FormControl('', Validators.required),
			pin: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6), Validators.maxLength(6)]),
			aadhar: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(12), Validators.maxLength(12)])
		})
	}

}
