import { Component, OnInit, Input } from '@angular/core';
import { ItemDto } from "../match";
import { DDragonUtil } from "../../utils";

@Component({
  selector: 'app-item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.css']
})
export class ItemThumbnailComponent implements OnInit {

  constructor() { }
  
  @Input()
  item:ItemDto;
  
  url:string;

  ngOnInit() {
    this.url = DDragonUtil.itemUrl(this.item.id)
  }

}
