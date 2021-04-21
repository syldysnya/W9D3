const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", (event) => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let col = $square.index('li') % 3;
    let row = ($square.index('li') - col) / 3;
    this.game.playMove([row, col]);
    $square.css({ "background-color": "white", "font-size": "200%" });
  }

  setupBoard() {
    let rowLength = 3;

    for (let i = 0; i < rowLength; i++) {
      let $row = $('<ul>').addClass('group');

      for (let j = 0; j < rowLength; j++) {
        const $square = $('<li>').attr('sq-pos', [i, j]);
        $row.append($square);
      }
      this.$el.append($row);
    }
  }
}

module.exports = View;
