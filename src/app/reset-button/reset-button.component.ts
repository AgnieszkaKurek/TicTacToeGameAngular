import { Component } from '@angular/core';
import { TicTacToeGameStatus } from './../models/tic-tac-toe-game-status.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent {
  public status = {
    x: TicTacToeGameStatus.X_WINS,
    o: TicTacToeGameStatus.O_WINS,
    draw: TicTacToeGameStatus.DRAW,
  };
  public constructor(
    public game: TicTacToeGameService,
  ) {
  }
}
