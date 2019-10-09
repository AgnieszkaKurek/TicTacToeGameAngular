import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { Component } from '@angular/core';
import { TicTacToeGameService } from '../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  public board: TicTacToeGamePlayer[];

  public constructor(
    private game: TicTacToeGameService,
  ) {
    this.board = this.game.board.slice();
  }
}
