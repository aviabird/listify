export class UserAuth {
    constructor(
        public access_token: string = localStorage.getItem('access_token'),
        public secret_token: string = localStorage.getItem('secret_token')
    ) { }
}