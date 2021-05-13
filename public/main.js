import {plataformasInfinitas , plataformas} from '/funciones.js';
import playerCoords from '/teclado.js';
setInterval(() => {
	console.log(playerCoords);
},1000)
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:{  
        preload: preload,
        create: create,
        update: update
    },
    physics:{default:"arcade", arcade : {gravity: {y : 70}}}
};

var game = new Phaser.Game(config);
//--------------Background---------// 
function preload (){
this.load.css('80s', 'style.css');    
this.load.image('background', 'assets/img/lofi-1.jpg');
this.load.audio('leve-1','assets/audio/level-1.mp3');
//--------------image------------------//
this.load.image('pelota','assets/Ball.png');
this.load.image('barra','assets/barra.png');
this.load.image('spike','assets/spike.png');
}
function create (x,y){
let audio = this.sound.add('leve-1',{loop:true}); audio.play();
var x = Math.floor((Math.random() * 800) + 3);
var y = Math.floor((Math.random() * 800) + 3);
this.fondo = this.add.image(400, 300, 'background').setDisplaySize(800, 600);
this.bola = this.physics.add.image(playerCoords.x, -300, 'pelota').setDisplaySize(50, 50).setBounce(0.80).body.setSize(0,5).setCollideWorldBounds(true);
this.barra = plataformasInfinitas(x, this.physics);
this.spike = this.physics.add.image(y, 0, 'spike').setDisplaySize(150, 150);
this.physics.add.collider(this.bola, this.barra, this.spike);
this.cursors = input.keyboard.crateCursorKeys();
} 
function update (){
	this.bola.setVelocityx(playerCoords.x);
if(this.cursors.left.isDown){
this.bola.setVelocityx(-300);
}
else if(this.cursors.right.isDown){
this.bola.setVelocityx(300);   
}
else{this.bola.setVelocityx(0);}}