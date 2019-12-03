import { Component } from '@angular/core';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-next-player-info',
  templateUrl: './next-player-info.component.html',
  styleUrls: ['./next-player-info.component.scss']
})
export class NextPlayerInfoComponent {

  public constructor(
    public game: TicTacToeGameService,
  ) { }
}
