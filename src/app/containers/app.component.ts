import { Component } from '@angular/core';
import {LoadingPage} from '../components/loading/loading.component';
@Component({
  selector: 'ist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends LoadingPage {
  constructor(){
    super(true); // sets loading to true
    console.log("Inside App Component");
    setTimeout(()=>{
      console.log("Inside timeoit")
      this.ready(); // sets loading to false
    },10000)
  }
  ngOnInit(){
    console.log("Inside APp IniT");

  }
}
