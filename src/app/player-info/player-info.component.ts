import { TicTacToeGameStatus } from './../models/tic-tac-toe-game-status.enum';
import { Component } from '@angular/core';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-player-info',
  templateUrl: './player-info.component.html'
})
export class PlayerInfoComponent {
  public constructor(
    private game: TicTacToeGameService,
  ) {
  }

  public isGameFinished(): boolean {
    return this.game.status() !== TicTacToeGameStatus.UNFINISHED;
  }
}
