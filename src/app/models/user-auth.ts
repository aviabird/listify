export class UserAuth {
    constructor(
        public access_token: string = localStorage.getItem('access_token'),
        public secret_token: string = localStorage.getItem('secret_token'),
        public server_token: string = localStorage.getItem('server_token')
    ) { }
}