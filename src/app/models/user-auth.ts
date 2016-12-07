export class UserAuth {
    constructor(
        public access_token: string = localStorage.getItem('access_token')
    ) { }
}