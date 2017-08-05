import { Component, OnInit, Input, SimpleChanges, Injector } from '@angular/core';
import { MatchDataDto, ChampionDto } from "../match";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {
  constructor() {}
  
  @Input()
  match:MatchDataDto;
  
  
  guesses:Array<ChampionDto> = [];
  guessedCorrectly:boolean = false;
  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('change, match: '+ this.match)
  }

}
