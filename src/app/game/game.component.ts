import { Component } from '@angular/core';
import { TicTacToeGameService } from '../tic-tac-toe-game.service';

@Component({
  selector: 'ttt-game',
  templateUrl: './game.component.html',
})
export class GameComponent {

  constructor(public game: TicTacToeGameService) { }
}
