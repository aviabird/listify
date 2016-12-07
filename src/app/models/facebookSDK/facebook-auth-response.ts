export interface FacebookAuthResponse {
    accessToken:   string;
    expiresIn:     number;
    signedRequest: string;
    userID:        string;
}