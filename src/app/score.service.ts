import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  private score: number = 0;

  constructor() { }

  getScore():number{
    return this.score
  }

  increaseScore(amt:number):number{
    return this.score += amt;
  }

  resetScore():number{
    return this.score = 0;
  }

}
