export type XO = "X" | "O" | "-";

export class Game {

  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(cell => cell === 'X').length
    const countO = this.cells.filter(cell => cell === 'O').length
    return countX === countO ? 'X' : 'O';
  }

  getWinner(): XO {
    if (this.cells[0] ===  this.cells[1] 
      && this.cells[1] === this.cells[2] && this.cells[0] !== '-')
    {
      return this.cells[0]
    }

    if (this.cells[3] ===  this.cells[4] 
      && this.cells[4] === this.cells[5] && this.cells[3] !== '-')
    {
      return this.cells[3]
    }

    if (this.cells[6] ===  this.cells[7] 
      && this.cells[7] === this.cells[8] && this.cells[6] !== '-')
    {
      return this.cells[6]
    }

    if (this.cells[0] ===  this.cells[4] 
      && this.cells[4] === this.cells[8] && this.cells[0] !== '-')
    {
      return this.cells[0]
    }

    if (this.cells[6] ===  this.cells[4] 
      && this.cells[4] === this.cells[2] && this.cells[6] !== '-')
    {
      return this.cells[6]
    }

    if (this.cells[0] ===  this.cells[3] 
      && this.cells[3] === this.cells[6] && this.cells[0] !== '-')
    {
      return this.cells[0]
    }

    if (this.cells[1] ===  this.cells[4] 
      && this.cells[4] === this.cells[7] && this.cells[1] !== '-')
    {
      return this.cells[1]
    }

    if (this.cells[2] ===  this.cells[5] 
      && this.cells[5] === this.cells[8] && this.cells[2] !== '-')
    {
      return this.cells[2]
    }

    return "-";
  }

  isBelowThreshold( currentValue: string) {
    return currentValue !== "-";
  }

  isTie(): boolean {
    if (this.getWinner() === "-" && this.cells.every(this.isBelowThreshold))
    {
      return true;
    }
    return false;
  }

  onClick(i: number): void {
    if (this.cells[i] !== '-')
    {
      return
    }
    this.cells[i] = this.getTurn();
  }

  restart(): void {
    //this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    window.location.reload();
  }
}
