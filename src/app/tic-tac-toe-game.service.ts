import { Injectable } from '@angular/core';
import { TicTacToeCombination } from './moduls/tic-tac-toe-combination';
import { TicTacToeGamePlayers } from './moduls/tic-tac-toe-game-players.enum';
import { TicTacToeGameStatus } from './moduls/tic-tac-toe-game-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeGameService {

  public board: TicTacToeGamePlayers[];
  public startingPlayer: TicTacToeGamePlayers;
  public nextPlayer: TicTacToeGamePlayers;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.board = new Array<TicTacToeGamePlayers>(9);
    this.startingPlayer = this.startingPlayer === TicTacToeGamePlayers.X ? TicTacToeGamePlayers.O : TicTacToeGamePlayers.X;
    this.nextPlayer = this.startingPlayer;
  }

  public move(position: number): boolean {
    if (this.isPositionEmpty(position)) {
      this.board[position] = this.nextPlayer;
      this.nextPlayer = this.nextPlayer === TicTacToeGamePlayers.X ? TicTacToeGamePlayers.O : TicTacToeGamePlayers.X;
      return true;
    }
    return false;
  }
  public isPositionEmpty(position: number) {
    return this.board[position] === undefined;
  }
  status() {
    const winningCombination = this.getWinningCombination();
    if (winningCombination) {
      return this.board[winningCombination.position1] ===
        TicTacToeGamePlayers.X ? TicTacToeGameStatus.statusXWins : TicTacToeGameStatus.statusOWins;
    }
    if (this.board.includes(undefined)) { return TicTacToeGameStatus.statusUnfinished; }
    return TicTacToeGameStatus.statusDraw;
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

  private isWinningCombination(combination: TicTacToeCombination): boolean {
    return this.board[combination.position1] !== undefined &&
      this.board[combination.position1] === this.board[combination.position2] &&
      this.board[combination.position2] === this.board[combination.position3];
  }
}
