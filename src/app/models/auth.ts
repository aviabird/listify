export interface Auth {
    status: String,
    authResponse: {
        accessToken:  String,
        expiresIn:    String,
        signedRequest:String,
        userID:       String
    }
}