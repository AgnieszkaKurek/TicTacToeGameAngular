import { TicTacToeGameScoreService } from './../tic-tac-toe-game-score.service';
import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { Component, Input } from '@angular/core';
import { TicTacToeGameStatus } from '../models/tic-tac-toe-game-status.enum';

@Component({
  selector: 'ttt-box',
  templateUrl: './box.component.html',
  styleUrls: [
    './box.component.behavior.scss',
    './box.component.rwd.scss',
  ]
})
export class BoxComponent {

  public constructor(
    private game: TicTacToeGameService,
    private score: TicTacToeGameScoreService,
  ) {
  }

  @Input()
  public position: number;

  public handleGameMove(): void {
    if (this.game.status() === TicTacToeGameStatus.UNFINISHED) {
      this.game.move(this.position);
      this.score.update(this.game.status());
    }
  }

  public getBoxStatus(): TicTacToeGamePlayer | undefined {
    return this.game.board[this.position];
  }

  public isXNextPlayer(): boolean {
    return this.canMove() && this.game.nextPlayer === TicTacToeGamePlayer.X;
  }

  public isONextPlayer(): boolean {
    return this.canMove() && this.game.nextPlayer === TicTacToeGamePlayer.O;
  }

  public isMoveForbidden(): boolean {
    return !!this.getBoxStatus() || this.game.status() !== TicTacToeGameStatus.UNFINISHED;
  }

  public isWinningBox(): boolean {
    return this.game.isWinningBox(this.position);
  }

  private canMove(): boolean {
    return !this.getBoxStatus() && this.game.status() === TicTacToeGameStatus.UNFINISHED;
  }
}
