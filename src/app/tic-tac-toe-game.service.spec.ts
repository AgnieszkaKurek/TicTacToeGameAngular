import { TestBed } from '@angular/core/testing';
import { TicTacToeGamePlayer } from './models/tic-tac-toe-game-player.enum';
import { TicTacToeGameStatus } from './models/tic-tac-toe-game-status.enum';
import { TicTacToeGameService } from './tic-tac-toe-game.service';

describe('TicTacToeGameService', () => {
  let game;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    game = new TicTacToeGameService();
  });

  it('The test has been initiated', () => {
    const service: TicTacToeGameService = TestBed.get(TicTacToeGameService);
    expect(service).toBeTruthy();
  });
  it('Given game, when game begins, then contains a board', () => {
    expect(game.board).toBeDefined();
  });

  it('Given game, when game begins, then board is of 9 empty elements', () => {
    expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  });

  it('Given game, when game begins, then X player should start', () => {
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.X);
  });

  it('Given game, when move once, then next player should be O', () => {
    const wasSuccessfull = game.move(0);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.O);
    expect(wasSuccessfull).toEqual(true);
  });

  it('Given game, when move twice, then next player should be X', () => {
    game.move(0);
    game.move(2);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, undefined, TicTacToeGamePlayer.O, undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.X);
  });
  it('Given game, when player tries moving on the position that was already used, then state of the game does not change', () => {
    game.move(0);
    game.move(2);
    const wasSuccessfull = game.move(2);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, undefined, TicTacToeGamePlayer.O, undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.X);
    expect(wasSuccessfull).toEqual(false);
  });
  it('Given game, when moves were made and X occurs in all cells of one line, then X wins', () => {
    game.move(0);
    game.move(3);
    game.move(1);
    game.move(4);
    game.move(2);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, TicTacToeGamePlayer.O, undefined, undefined, undefined, undefined]);
    expect(game.status()).toEqual(TicTacToeGameStatus.X_WINS);
  });
  it('Given game, when moves were made and O occurs in all cells of one line, then O wins', () => {
    game.move(1);
    game.move(2);
    game.move(5);
    game.move(4);
    game.move(7);
    game.move(6);
    expect(game.board).toEqual([undefined, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, undefined, TicTacToeGamePlayer.O, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, TicTacToeGamePlayer.X, undefined]);
    expect(game.status()).toEqual(TicTacToeGameStatus.O_WINS);
  });

  it('Given game, when moves were made and neither X nor O occupy cells in one line and empty spaces left, then game is unfinished', () => {
    game.move(0);
    game.move(2);
    game.move(1);
    game.move(3);
    game.move(5);
    game.move(4);
    game.move(6);
    game.move(7);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, TicTacToeGamePlayer.O, TicTacToeGamePlayer.O, TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, undefined]);
    expect(game.status()).toEqual(TicTacToeGameStatus.UNFINISHED);
  });

  it('Given game status, when moves makes and neither X nor O occupy cells in one line and any spaces left, then game is draw', () => {
    game.move(0);
    game.move(2);
    game.move(1);
    game.move(3);
    game.move(5);
    game.move(4);
    game.move(6);
    game.move(7);
    game.move(8);
    expect(game.board).toEqual([TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, TicTacToeGamePlayer.O, TicTacToeGamePlayer.O, TicTacToeGamePlayer.X, TicTacToeGamePlayer.X, TicTacToeGamePlayer.O, TicTacToeGamePlayer.X]);
    expect(game.status()).toEqual(TicTacToeGameStatus.DRAW);
  });

  it('Given game, when game is reseted, then player O starts game', () => {
    game.reset();
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.O);
  });

  it('Given game, when even number of moves were made and game is reseted, then O starts game because number of moves does not matter', () => {
    game.move(0);
    game.move(1);
    game.reset();
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.O);
  });

  it('Given game, when odd number of moves were made and game is reseted, then O starts game because number of moves does not matter', () => {
    game.move(0);
    game.move(1);
    game.move(2);
    game.reset();
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.O);
  });

  it('Given game, when game is reseted twice, then X starts next game', () => {
    game.reset();
    game.reset();
    expect(game.nextPlayer).toEqual(TicTacToeGamePlayer.X);
  });

  it('Given game, when no moves were done, then there is no winning combination', () => {
    expect(game.getWinningCombination()).toBeUndefined();
  });

  it('Given game, when x sets first row, then first row is a winning combination', () => {
    game.move(0);
    game.move(3);
    game.move(1);
    game.move(4);
    game.move(2);
    const winningCombination = game.getWinningCombination();
    expect(winningCombination.position1).toEqual(0);
    expect(winningCombination.position2).toEqual(1);
    expect(winningCombination.position3).toEqual(2);
  });

  it('Given game, when x sets first row and game is reseted, then there is no winning combination ', () => {
    game.move(0);
    game.move(3);
    game.move(1);
    game.move(4);
    game.move(2);
    game.reset();
    expect(game.getWinningCombination()).toBeUndefined();
  });

  it('Given game, when game status is a draw, then there is no winning combination ', () => {
    game.move(0);
    game.move(2);
    game.move(1);
    game.move(3);
    game.move(5);
    game.move(4);
    game.move(6);
    game.move(7);
    game.move(8);
    expect(game.getWinningCombination()).toBeUndefined();
  });
});
