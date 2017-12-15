import { Users } from './users';

export interface Farmers extends Users{
	//user: Users,
	farmingType: string[],
	cropsProduced: string[]
}