export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' })
    }

    create(): void {
        this.add.bitmapText(128, 10, 'PressStart2P-White', '<- and -> switch ingredient\nup to toss ingredient\ndown to quick drop', undefined, Phaser.GameObjects.BitmapText.ALIGN_CENTER)
            .setOrigin(0.5, 0);    
        this.add.bitmapText(160, 176, 'PressStart2P-White', 'INGREDIENT:')
            .setOrigin(0, 0);
        this.add.rectangle(0, 48, 256, 1, 0xffffff)
            .setOrigin(0, 0);
        this.add.rectangle(0,208, 256, 1, 0xffffff)
            .setOrigin(0, 0);
        this.add.rectangle(128, 48, 1, 160, 0xffffff)
            .setOrigin(0,0);
    }

    update(): void {

    }

    dosoemthing(): void {

    }
}