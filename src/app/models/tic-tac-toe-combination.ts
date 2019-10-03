export class TicTacToeCombination {

  public constructor(
    public position1: number,
    public position2: number,
    public position3: number,
  ) {
  }

  public isWinningPosition(position: number): boolean {
    return position === this.position1 || position === this.position2 || position === this.position3;
  }
}
