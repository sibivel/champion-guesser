import { Component, OnInit, Input } from '@angular/core';
import { ChampionDto } from "../match";
import { DDragonUtil } from "../../utils";

@Component({
  selector: 'app-champ-thumbnail',
  templateUrl: './champ-thumbnail.component.html',
  styleUrls: ['./champ-thumbnail.component.css']
})
export class ChampThumbnailComponent implements OnInit {
  
  constructor() {}
  
  @Input()
  champion:ChampionDto;

  url:string;

  ngOnInit() {
    this.url = DDragonUtil.championSmallUrl(this.champion.key)
  }

}

