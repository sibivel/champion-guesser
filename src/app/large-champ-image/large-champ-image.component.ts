import { Component, OnInit, Injector, Input } from '@angular/core';
import { MatchViewComponent } from "../match-view/match-view.component";
import { DDragonUtil } from "../../utils";
import { ChampionDto } from "../match";

@Component({
  selector: 'app-large-champ-image',
  templateUrl: './large-champ-image.component.html',
  styleUrls: ['./large-champ-image.component.css']
})
export class LargeChampImageComponent implements OnInit {
  
  constructor(private inj:Injector) {
    this.matchViewParent = this.inj.get(MatchViewComponent);
  }
  
  @Input()
  champion:ChampionDto;
  
  matchViewParent: MatchViewComponent;
  url:string;

  ngOnInit() {
    console.log("url: "+ this.url);
    this.url = DDragonUtil.championLargeUrl(this.champion.key);
    console.log("url: "+ this.url);
  }


}
