export interface Users{
	name: string,
	age: number,
	gender: string,
	address: Address,
	uadai: string,
	contact: string[2]
}
interface Address{
	village: string,
	citytown: string,
	state: string,
	pin: string
}