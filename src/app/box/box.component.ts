import { TicTacToeGamePlayer } from './../models/tic-tac-toe-game-player.enum';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'ttt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input()
  public status: TicTacToeGamePlayer;

  @Input()
  public position: number;

  public playerX: TicTacToeGamePlayer = TicTacToeGamePlayer.X;

  public playerO: TicTacToeGamePlayer = TicTacToeGamePlayer.O;

  @HostListener('click')
  public onClick() {
    console.log('TEST');
  }
}
