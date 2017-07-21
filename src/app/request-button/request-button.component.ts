import { Component, OnInit, Injector } from '@angular/core';
import {MatchService} from '../match.service';
import { AppComponent } from "../app.component";
import {MatchDataDto } from "../match";
@Component({
  selector: 'app-request-button',
  templateUrl: './request-button.component.html',
  styleUrls: ['./request-button.component.css'],
  providers: []
})
export class RequestButtonComponent implements OnInit {

  constructor(private matchService: MatchService,private inj:Injector) { 
    this.parentComponent = this.inj.get(AppComponent);
  }
  parentComponent:AppComponent;

  ngOnInit() {
    console.log(this.parentComponent);
  }

  logData(event:Event){
    this.matchService.getMatch().then(function(response){
      console.log(response);
      let match = JSON.parse(response._body);
      console.log(match);
      
    });
  }

  showMatch(event:Event){
    let thing = this;
    this.matchService.getMatch().then(function(response){
      console.log(response._body);
      let match = JSON.parse(response._body);
      console.log(match);
      thing.parentComponent.showMatch = !thing.parentComponent.showMatch;
      thing.parentComponent.match = match;
    },function(error){
      let match = new MatchDataDto();
      thing.parentComponent.showMatch = !thing.parentComponent.showMatch;
      thing.parentComponent.match = match;
    });
  }

}
