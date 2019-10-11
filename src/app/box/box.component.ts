import { TicTacToeGameScoreService } from './../tic-tac-toe-game-score.service';
import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { Component, Input, HostListener } from '@angular/core';
import { TicTacToeGameStatus } from '../models/tic-tac-toe-game-status.enum';

@Component({
  selector: 'ttt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {

  public constructor(
    private game: TicTacToeGameService,
    private score: TicTacToeGameScoreService,
  ) {
  }

  @Input()
  public position: number;

  @HostListener('click')
  public handleGameMove(): void {
    if (this.game.status() === TicTacToeGameStatus.UNFINISHED) {
      this.game.move(this.position);
      this.score.update(this.game.status());
    }
  }

  public getBoxStatus(): TicTacToeGamePlayer {
    return this.game.board[this.position];
  }
}
