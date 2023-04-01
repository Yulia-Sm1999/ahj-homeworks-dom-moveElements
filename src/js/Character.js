export default class Character {
  constructor(url) {
    this.url = url;
    this.cells = [...document.querySelectorAll('.cell')];
  }

  createCharacter() {
    const character = document.createElement('img');
    character.classList.add('img');
    character.src = this.url;
    return character;
  }

  randomMove() {
    const cellWithCharacter = this.cells.findIndex((cell) => cell.querySelector('.img'));
    let randomCell = Math.floor(Math.random() * (this.cells.length));

    if (cellWithCharacter) {
      while (randomCell === cellWithCharacter) {
        randomCell = Math.floor(Math.random() * (this.cells.length - 1));
      }
    }
    return randomCell;
  }

  MoveCharacter() {
    const characterToMove = this.createCharacter();
    setInterval(() => {
      this.cells[this.randomMove()].appendChild(characterToMove);
    }, 2000);
  }
}
