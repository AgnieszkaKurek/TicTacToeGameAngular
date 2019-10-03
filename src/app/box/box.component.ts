import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'ttt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {

  public constructor(
    public game: TicTacToeGameService,
  ) {
  }

  @Input()
  public position: number;

  public playerX: TicTacToeGamePlayer = TicTacToeGamePlayer.X;

  public playerO: TicTacToeGamePlayer = TicTacToeGamePlayer.O;

  public status = this.game.board[this.position];

  @HostListener('click')
  public onClick() {

  }
}
