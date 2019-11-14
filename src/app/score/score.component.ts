import { TicTacToeGameStatus } from './../models/tic-tac-toe-game-status.enum';
import { Component } from '@angular/core';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { TicTacToeGameScoreService } from './../tic-tac-toe-game-score.service';

@Component({
  selector: 'ttt-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  public status = {
    x: TicTacToeGameStatus.X_WINS,
    o: TicTacToeGameStatus.O_WINS,
    draw: TicTacToeGameStatus.DRAW,
  };

  public constructor(
    public game: TicTacToeGameService,
    public score: TicTacToeGameScoreService,
  ) {
  }

}
