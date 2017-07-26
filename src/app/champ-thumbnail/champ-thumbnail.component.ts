import { Component, OnInit, Input, Injector } from '@angular/core';
import { ChampionDto } from "../match";
import { DDragonUtil } from "../../utils";
import { MatchViewComponent } from "../match-view/match-view.component";

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

  url:string;

  ngOnInit() {
    this.url = DDragonUtil.championSmallUrl(this.champion.key)
  }

  myOnClick(event:Event){
    console.log(this.champion.name)
    if(this.matchViewParent.guesses.length < 3){
      this.matchViewParent.guesses.push(this.champion);
      this.matchViewParent.guessedCorrectly = (this.champion.key == this.matchViewParent.match.champion.key);
    }
  }

}

