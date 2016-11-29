import { Component } from '@angular/core';
import {LoadingPage} from '../components/loading/loading.component';

@Component({
  selector: 'ist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  ngOnInit(){
    console.log("Inside APp IniT");

  }
}
