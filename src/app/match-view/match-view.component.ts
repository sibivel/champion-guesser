import { Component, OnInit, Input } from '@angular/core';
import { MatchDataDto } from "../match";

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  constructor() { }
  
  @Input()
  match:MatchDataDto;
  
  ngOnInit() {
    console.log('match: '+ this.match)
  }

  ngOnChanges(){
    console.log('change, match: '+ this.match)
  }

}
