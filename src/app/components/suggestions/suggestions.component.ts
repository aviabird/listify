import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ist-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers: [ApiService]
})
export class SuggestionsComponent implements OnInit {
  suggestedList;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.retriveSuggestion().subscribe(response => {
      this.suggestedList = response;
      console.log(this.suggestedList[0])
    })
  }

  follow(listId){
    // var list_id = this.suggestedList[0]['_id']
    this.api.followList(listId).subscribe(response => {
      console.log("Response is: ", response);
    })
  }

  goToFeedsDashboard(){
    this.router.navigate(['/dashboard'])
  }

}
