import { Component, OnInit, Input, SimpleChanges, Injector, EventEmitter, Output } from '@angular/core';
import { MatchDataDto, ChampionDto } from "../match";
import { AppComponent } from "../app.component";
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {
  constructor(private scoreService:ScoreService) {}
  
  @Input()
  match:MatchDataDto;
  
  @Output() guessed: EventEmitter<Object> = new EventEmitter<Object>();

  guesses:Array<ChampionDto> = [];
  guessedCorrectly:boolean = false;
  
  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('change, match: '+ this.match)
  }

  onGuess(event:Event){
    this.guessed.emit({guessedCorrectly:this.guessedCorrectly, guesses: this.guesses})
    if(this.guessedCorrectly){
      this.scoreService.increaseScore(15 - this.guesses.length * 5);
    }else if(this.guesses.length >= 3){
      this.scoreService.resetScore();
    }
  }

}
