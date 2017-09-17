import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})
export class ScoreViewComponent implements OnInit {
  score: number;

  constructor(private scoreService: ScoreService) {
      this.score = scoreService.getScore()
   }

  ngOnInit() {
  }

}
