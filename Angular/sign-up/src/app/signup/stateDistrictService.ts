import { Injectable } from '@angular/core';

import { State } from './states';
import { District } from './districts';

@Injectable()
export class StateDistrictService{
	getStates(){
		return [
			new State(1, 'Maharashtra'),
			new State(2, 'West Bengal'),
			new State(3, 'Karnataka'),
			new State(4, 'Gujarat'),
			new State(5, 'Rajasthan'),
			new State(6, 'Uttar Pradesh')
		];
	}

	getDistricts(){
		return [
			new District(1, 1, 'Thane'),
			new District(2, 2, 'North 24 Parganas'),
			new District(3, 3, 'Bangalore Urban'),
			new District(4, 1, 'Pune'),
			new District(5, 2, 'Paschim Bardhaman'),
			new District(6, 1, 'Mumbai suburban'),
			new District(7, 2, 'South 24 Parganas'),
			new District(8, 2, 'Kolkata'),
			new District(9, 4, 'Ahmedabad'),
			new District(10, 2, 'Murshidabad'),
			new District(11, 5, 'Jaipur'),
			new District(12, 1, 'Nashik'),
			new District(13, 6, 'Allahabad')
		];
	}
}