import { Injectable } from '@angular/core';
import { TicTacToeCombination } from './models/tic-tac-toe-combination';
import { TicTacToeGamePlayer } from './models/tic-tac-toe-game-player.enum';
import { TicTacToeGameStatus } from './models/tic-tac-toe-game-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeGameService {

  public board: TicTacToeGamePlayer[];
  public startingPlayer: TicTacToeGamePlayer;
  public nextPlayer: TicTacToeGamePlayer;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.board = new Array<TicTacToeGamePlayer>(9);
    this.startingPlayer = this.startingPlayer === TicTacToeGamePlayer.X ? TicTacToeGamePlayer.O : TicTacToeGamePlayer.X;
    this.nextPlayer = this.startingPlayer;
  }

  public move(position: number): boolean {
    if (this.isPositionEmpty(position)) {
      this.board[position] = this.nextPlayer;
      this.nextPlayer = this.nextPlayer === TicTacToeGamePlayer.X ? TicTacToeGamePlayer.O : TicTacToeGamePlayer.X;
      return true;
    }
    return false;
  }

  public status(): TicTacToeGameStatus {
    const winningCombination = this.getWinningCombination();
    if (winningCombination) {
      return this.board[winningCombination.position1] ===
        TicTacToeGamePlayer.X ? TicTacToeGameStatus.X_WINS : TicTacToeGameStatus.O_WINS;
    }
    if (this.board.includes(undefined)) { return TicTacToeGameStatus.UNFINISHED; }
    return TicTacToeGameStatus.DRAW;
  }

  public getWinningCombination(): TicTacToeCombination {
    const possibleWinningCombinations = [
      new TicTacToeCombination(0, 1, 2),
      new TicTacToeCombination(3, 4, 5),
      new TicTacToeCombination(6, 7, 8),
      new TicTacToeCombination(0, 3, 6),
      new TicTacToeCombination(1, 4, 7),
      new TicTacToeCombination(2, 5, 8),
      new TicTacToeCombination(0, 4, 8),
      new TicTacToeCombination(2, 4, 6),
    ];
    return possibleWinningCombinations.find(combination => this.isWinningCombination(combination));
  }

  private isPositionEmpty(position: number): boolean {
    return this.board[position] === undefined;
  }

  private isWinningCombination(combination: TicTacToeCombination): boolean {
    return this.board[combination.position1] !== undefined
      && this.board[combination.position1] === this.board[combination.position2]
      && this.board[combination.position2] === this.board[combination.position3]
      ;
  }

  public isWinningBox(position: number): boolean {
    const winningCombination = this.getWinningCombination();
    if (!winningCombination) {
      return false;
    }
    return position === winningCombination.position1 ||
      position === winningCombination.position2 ||
      position === winningCombination.position3;
  }
}
