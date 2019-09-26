import { Component, Input } from '@angular/core';
import { TicTacToeGamePlayer } from '../models/tic-tac-toe-game-player.enum';

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
}
