class sceneA extends phaser.scene{
    constructor(){
        super({key:"sceneA", active:true});
    } 
    preload(){
this.load.css('80s', 'style.css');
this.load.video('video', 'assets/audio/game-over.mp4');
}
create(){
this.video = this.add.video(300, 300, 'video');
this.video.play(true); 
}
update(){}
}