import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ttt-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent {
  public constructor(
    public game: TicTacToeGameService,
  ) {
  }
}
