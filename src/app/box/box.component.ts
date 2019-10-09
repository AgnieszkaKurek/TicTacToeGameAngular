import { TicTacToeGameScoreService } from './../tic-tac-toe-game-score.service';
import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { TicTacToeGameService } from './../tic-tac-toe-game.service';
import { Component, Input, HostListener, OnInit } from '@angular/core';
import { TicTacToeGameStatus } from '../models/tic-tac-toe-game-status.enum';

@Component({
  selector: 'ttt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  public constructor(
    private game: TicTacToeGameService,
    private score: TicTacToeGameScoreService,
  ) {
  }

  @Input()
  public position: number;

  public playerX: TicTacToeGamePlayer = TicTacToeGamePlayer.X;

  public playerO: TicTacToeGamePlayer = TicTacToeGamePlayer.O;

  public status: TicTacToeGamePlayer;

   @HostListener('click')
  public handleGameMove(): void {
    if (this.game.status() === TicTacToeGameStatus.UNFINISHED) {
      this.game.move(this.position);
      this.score.update(this.game.status());
      this.setStatus();
    }
  }

  public ngOnInit(): void {
    this.setStatus();
  }

  private setStatus(): void {
    this.status = this.game.board[this.position];
  }
}
