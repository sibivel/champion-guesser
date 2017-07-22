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
    
  }

  ngOnChanges(){
    console.log('change, match: '+ this.match)
  }

}
