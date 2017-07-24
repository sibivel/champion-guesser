import { Component, OnInit, Input } from '@angular/core';
import { MatchViewComponent } from "../match-view/match-view.component";
import { MatchDataDto } from "../match";

@Component({
  selector: 'app-match-data-view',
  templateUrl: './match-data-view.component.html',
  styleUrls: ['./match-data-view.component.css']
})
export class MatchDataViewComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor() {
    
  }
 
  @Input()
  match:MatchDataDto;
  
  myRole:String;
  ngOnChanges() {
    this.myRole = this.match.role;
    switch(this.match.role){
      case 'MIDDLE':
        this.myRole = 'MID';
        break;
    }
    console.log('role: ' + this.match.role);
  }

}

  

