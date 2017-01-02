var game = new Phaser.Game(370, 550, Phaser.CANVAS, 'wrapper');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');