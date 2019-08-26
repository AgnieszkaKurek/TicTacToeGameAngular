import { Injectable } from '@angular/core';
import { TicTacToeGameStatus } from './models/tic-tac-toe-game-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeGameScoreService {

  public scorePlayerX = 0;
  public scorePlayerO = 0;
  public numberOfDraws = 0;

  public update(status: TicTacToeGameStatus): void {
    if (status === TicTacToeGameStatus.X_WINS) {
      this.scorePlayerX++;
    } else if (status === TicTacToeGameStatus.O_WINS) {
      this.scorePlayerO++;
    } else if (status === TicTacToeGameStatus.DRAW) {
      this.numberOfDraws++;
    }
  }
}
