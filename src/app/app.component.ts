import { Component } from '@angular/core';
import { MatchDataDto } from "./match";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){

  }
  showMatch:boolean = true;
  someProperty:string = '';
  guessedCorrectly: boolean;

  public match:MatchDataDto;
  ngOnInit() {
  }

  ngOnChange(){
    console.log('root match: ' + this.match)
  }

  

}
