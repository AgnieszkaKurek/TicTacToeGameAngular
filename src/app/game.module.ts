import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { BoxComponent } from './box/box.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    BoxComponent,
    ResetButtonComponent,
    PlayerInfoComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class GameModule { }
