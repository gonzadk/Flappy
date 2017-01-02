var Menu = {
    
    preload: function(){
        game.stage.backgroundColor = '#FFF';
        game.load.image('button', 'assets/img/btn.png');
    },
    
    create: function(){
        var button = this.add.button(game.width/2, game.height/2, 'button', this.startGame, this);
        button.anchor.setTo(0.5);
        
        var txtStart = game.add.text(game.width/2, game.height/2 -85, "Start Game", {font: "bold 24px sans-serif", fill:"black", align:"center"});
        txtStart.anchor.setTo(0.5);
        var txtTittle = game.add.text(game.width/2, game.height/2 -125, "Flappy Bird", {font: "bold 30px sans-serif", fill:"black", align:"center"});
        txtTittle.anchor.setTo(0.5);
    },
    
    startGame: function(){
        this.state.start('Game');
    }
    
};