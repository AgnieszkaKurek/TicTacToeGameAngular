import { Component } from '@angular/core';
import { TicTacToeGameStatus } from './../models/tic-tac-toe-game-status.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-winner-info',
  templateUrl: './winner-info.component.html',
  styleUrls: ['./winner-info.component.scss']
})
export class WinnerInfoComponent {
  public status = {
    x: TicTacToeGameStatus.X_WINS,
    o: TicTacToeGameStatus.O_WINS,
    draw: TicTacToeGameStatus.DRAW,
  };

  public constructor(
    public game: TicTacToeGameService,
  ) { }

}
