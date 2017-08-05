import { Component, OnInit, Input, Injector, Output } from '@angular/core';
import { ChampionDto } from "../match";
import { DDragonUtil } from "../../utils";
import { MatchViewComponent } from "../match-view/match-view.component";
import { EventEmitter } from "events";

@Component({
  selector: 'app-champ-thumbnail',
  templateUrl: './champ-thumbnail.component.html',
  styleUrls: ['./champ-thumbnail.component.css']
})
export class ChampThumbnailComponent implements OnInit {
  matchViewParent: MatchViewComponent;

  constructor(private inj:Injector) {
    this.matchViewParent = this.inj.get(MatchViewComponent);
  }
  
  @Input()
  champion:ChampionDto;

  @Output() guess: EventEmitter = new EventEmitter();

  url:string;
  red:boolean = false;
  gray:boolean = false;
  green:boolean = false;
  ngOnInit() {
    this.url = DDragonUtil.championSmallUrl(this.champion.key)
  }

  myOnClick(event:Event){
    console.log(this.champion.name)
    if(this.matchViewParent.guesses.length < 3){
      this.matchViewParent.guesses.push(this.champion);
      this.matchViewParent.guessedCorrectly = (this.champion.key == this.matchViewParent.match.champion.key);
      if(this.matchViewParent.guessedCorrectly == false){
        this.red = true;
      }else{
        this.green = true;
      }
    }
  }

  myRightClick(event:Event){
    this.gray = !this.gray;
    return false;
  }

}

