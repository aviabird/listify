export class LocalStorage {
    user;
    constructor(){
    }

    setUser(userData){
        console.log("User Data", userData);
        this.user = userData;
    }

    getUser(){
        console.log("Get user");
        return this.user;
    }
}