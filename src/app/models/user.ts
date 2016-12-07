import { UserProfile } from './user-profile';
export class User {
    constructor(public userId: string = null,
                public userProfile: UserProfile = new UserProfile() ) {}
}