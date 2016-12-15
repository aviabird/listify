export class UserAuth {
    constructor(
        public user_id:      string = localStorage.getItem('user_id'),
        public access_token: string = localStorage.getItem('access_token'),
        public secret_token: string = localStorage.getItem('secret_token'),
        public server_token: string = localStorage.getItem('server_token')
    ) { }
}