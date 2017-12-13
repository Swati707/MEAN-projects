import { Users } from './users';

export interface Farmers{
	userDetails: Users,
	farmingType: string[],
	cropsProduced: string[]
}