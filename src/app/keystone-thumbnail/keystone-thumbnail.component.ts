import { Component, OnInit, Input } from '@angular/core';
import { KeystoneDto } from "../match";
import { DDragonUtil } from "../../utils";

@Component({
  selector: 'app-keystone-thumbnail',
  templateUrl: './keystone-thumbnail.component.html',
  styleUrls: ['./keystone-thumbnail.component.css']
})
export class KeystoneThumbnailComponent implements OnInit {

  constructor() { }

  @Input()
  keystone:KeystoneDto;
  url:string;
  ngOnInit() {
    this.url = DDragonUtil.keystoneUrl(this.keystone.id);
  }

}
