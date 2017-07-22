import { Component, OnInit, Input } from '@angular/core';
import { ItemDto } from "../match";
import { DDragonUtil } from "../../constants";

@Component({
  selector: 'app-champ-thumbnail',
  templateUrl: './champ-thumbnail.component.html',
  styleUrls: ['./champ-thumbnail.component.css']
})
export class ChampThumbnailComponent implements OnInit {
  
  constructor() {}
  


  @Input()
  item:ItemDto;
  
  url:string;

  ngOnInit() {
    this.url = DDragonUtil.itemUrl(this.item.id)
  }

}
