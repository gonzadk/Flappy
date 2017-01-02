var bg;
var pipe;
var flappy;
var spacebar;
var timer;
var score;
var bestScore = 0;
var txtScore;

var Game = {
  
    preload: function(){
        game.load.image('bg', 'assets/img/bg.jpeg');
        game.load.spritesheet('bird', 'assets/img/bird.png', 43, 30);
        game.load.image('pipe', 'assets/img/pipe.png');
        
        game.forceSingleUpdate = true;
    },
    
    create: function(){
        bg = game.add.tileSprite(0, 0, 370, 550, 'bg');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        pipes = game.add.group();
        pipes.enableBody = true;
        pipes.createMultiple(20, 'pipe');
        
        flappy = game.add.sprite(100, 245, 'bird');
        flappy.frame = 1;
        flappy.anchor.setTo(0, 0.5);
        flappy.animations.add('fly', [0,1,2], 10, true);
        
        game.physics.arcade.enable(flappy);
        flappy.body.gravity.y = 1200;
        
        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spacebar.onDown.add(this.jump, this);
        
        timer = game.time.events.loop(1500, this.createColumn, this);
        
        score = -1;
        txtScore = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#FFF"});
 
    },
    
    update: function(){
        if(flappy.inWorld == false)
        {
            //Restart = go to Game_Over
            this.state.start('Game_Over');
        }
        else if(flappy.position.y >460)
        {
            //Restart = go to Game_Over
            flappy.alive = false;
            pipes.forEachAlive(function(t){
                   t.body.velocity.x = 0;
            }, this);
        }
        else
        {
            bg.tilePosition.x -= 1; 
        }
        
        game.physics.arcade.overlap(flappy, pipes, this.collapsed, null, this);
        
        flappy.animations.play('fly');
        if(flappy.angle <20)
        {
            flappy.angle += 1;        
        }
    },
    
    jump: function(){
        flappy.body.velocity.y = -350;
        game.add.tween(flappy).to({angle:-20}, 100).start();
    },
    
    createColumn: function(){
        var hole = Math.floor(Math.random()*5)+1;
        for( var i = 0; i < 8; i++)
        {
            if(i != hole && i != hole+1)
            {
                this.createPipe(370, i*55+20);
            }
        }
        
        score +=1;
        txtScore.text = score;
    }, 
    
    createPipe: function(x, y){
        var pipe = pipes.getFirstDead();
        
        pipe.reset(x, y);
        pipe.body.velocity.x = -180;
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    
    collapsed: function(){
        if(flappy.alive == false)
            return;
        flappy.alive = false;
        
        spacebar.reset();
        game.time.events.remove(timer);
        
        pipes.forEachAlive(function(t){
            t.body.velocity.x = 0;
        }, this);
    }
    
};