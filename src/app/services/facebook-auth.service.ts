import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare const FB:any;

@Injectable()
export class FacebookAuthService {
  
  constructor() { 
    FB.init({
      appId      : '112535305898047',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.5
    });
  }

  // Check Login Status first
  checkLoginState() {
     FB.getLoginStatus(response => {
        var status = this.statusChangeCallback(response);
        console.log("Status is: ", status);
    });
    console.log("Status outside the FB Function is:", status);
    return status;
  }


  statusChangeCallback(response){
    if(response.status === 'connected'){
      console.log("Already Connected");
      return true;
    } else if (response.status === 'not_authrised'){
      console.log("You are not authrized");
      return false;
    } else {
      console.log("Unkown Response");
      return false;
    }
  }




  login(){
    console.log("In side the service");
    FB.Login()
  }
}