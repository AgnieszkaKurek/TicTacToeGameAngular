import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class GameModule { }
