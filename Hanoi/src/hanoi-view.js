require('./game.js');

class View {
    constructor(game, $rootEl) {
        this.game = game;
        this.$rootEl = $rootEl;
        this.setupTowers();
        this.render();
    }

    clickTower($disc) {
      
    }

    render() {
        let coords = this.game.towers;
        debugger
    }

    setupTowers() {
        let col = 3;

        for (let i = 0; i < col; i++) {
            let $col = $('<ul>');

            for (let j = 0; j < col; j++) {
                const $pile = $('<li>').addClass('disc');
                $col.append($pile);
            }
            this.$rootEl.append($col);
        }
    }
}

module.exports = View;