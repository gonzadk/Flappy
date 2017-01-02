var Game_Over = {
    
    preload: function(){
        game.stage.backgroundColor = '#FFF';
        game.load.image('button', 'assets/img/btn.png');
    }, 
    
    create: function(){
        var boton = this.add.button(game.width/2, game.height/2, 'button', this.startGame, this);
        boton.anchor.setTo(0.5);

        var txtTittle = game.add.text(game.width/2, game.height/2 -145, "Game finished", {font: "bold 30px sans-serif", fill:"black", align:"center"});
        txtTittle.anchor.setTo(0.5);
        
        if(score == -1) score = 0;
        var txtScoreLabel = game.add.text(game.width/2 -50, game.height/2 -100, "Score: ", {font: "bold 20px sans-serif", fill:"black", align:"center"});
        txtScoreLabel.anchor.setTo(0.5);
        var txtScoreValue = game.add.text(game.width/2 +50, game.height/2 -100, score.toString(), {font: "bold 20px sans-serif", fill:"black", align:"center"});
        txtScoreValue.anchor.setTo(0.5);

        if(score > bestScore) bestScore = score;
        var txtBestLabel = game.add.text(game.width/2 -50, game.height/2 -75, "Best: ", {font: "bold 20px sans-serif", fill:"black", align:"center"});
        txtBestLabel.anchor.setTo(0.5);
        var txtBestValue = game.add.text(game.width/2 +50, game.height/2 -75, bestScore.toString(), {font: "bold 20px sans-serif", fill:"black", align:"center"});
        txtBestValue.anchor.setTo(0.5);

    }, 
    
    startGame: function(){
        this.state.start('Game');
    }
    
};