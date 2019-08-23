import { Injectable } from '@angular/core';
import { TicTacToeGameStatus } from './tic-tac-toe-game-status.enum.js';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeGameScoreService {

  public constructor(
    public scorePlayerX: number = 0,
    public scorePlayerO: number = 0,
    public numberOfDraws: number = 0,
  ) {

  }

  public update(status: TicTacToeGameStatus): void {
    if (status === TicTacToeGameStatus.statusXWins) {
      this.scorePlayerX++;
    } else if (status === TicTacToeGameStatus.statusOWins) {
      this.scorePlayerO++;
    } else if (status === TicTacToeGameStatus.statusDraw) {
      this.numberOfDraws++;
    }
  }
}
