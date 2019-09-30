import { Component } from '@angular/core';
import { TicTacToeGameService } from '../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public constructor(
    public game: TicTacToeGameService,
  ) {
  }
}
