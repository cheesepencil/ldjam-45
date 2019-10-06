const pressStart_white_png = require('./fonts/PressStart2P-White.png');
const pressStart_white_xml = require('./fonts/PressStart2P-White.xml');
const title_image = require('./images/title.png');

export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' })
    }

    preload(): void {
        this.load.bitmapFont('PressStart2P-White', pressStart_white_png, pressStart_white_xml);
        this.load.image('title_image', title_image);
    }

    create():void{
        this.scene.start('PreloadScene');
    }
}