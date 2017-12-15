export interface Users{
	name: string,
	age: number,
	gender: string,
	address: Address,
	aadhar: string,
	mob1: string,
	mob2: string
}
interface Address{
	village: string,
	citytown: string,
	district: string,
	state: string,
	pin: string
}