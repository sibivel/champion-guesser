import { Component, OnInit, Input } from '@angular/core';
import { SpellDto } from "../match";
import { DDragonUtil } from "../../utils";

@Component({
  selector: 'app-spell-thumbnail',
  templateUrl: './spell-thumbnail.component.html',
  styleUrls: ['./spell-thumbnail.component.css']
})
export class SpellThumbnailComponent implements OnInit {

  constructor() { }
  
  @Input()
  spell:SpellDto;
  url:string;
  
  ngOnInit() {
    this.url = DDragonUtil.spellUrl(this.spell.key);
  }

}
