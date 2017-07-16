import { Component, OnInit } from '@angular/core';
import {MatchService} from '../match.service';
@Component({
  selector: 'app-request-button',
  templateUrl: './request-button.component.html',
  styleUrls: ['./request-button.component.css'],
  providers: [MatchService]
})
export class RequestButtonComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    console.log(this.matchService.getMatch());
  }

  logData(event:Event){
        console.log(this.matchService.getMatch());
  }

}
