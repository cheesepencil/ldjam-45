export class TitleScene extends Phaser.Scene {
    private ready: boolean = false;
    private space: Phaser.Input.Keyboard.Key;

    constructor() {
        super({ key: 'TitleScene' })
    }

    create(): void {
        this.add.image(32, 32, "title_image")
            .setOrigin(0, 0);

        this.add.bitmapText(128, 160, 'PressStart2P-White', "Ludum Dare #45:\nStart with Nothing", undefined, Phaser.GameObjects.BitmapText.ALIGN_CENTER)
            .setOrigin(0.5, 0.5);

        this.add.bitmapText(128, 248, 'PressStart2P-White', 'press space...')
            .setOrigin(0.5, 1);

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE, true);

        this.cameras.main.fadeIn(500, 0, 0, 0, this.fadeCheck, this);
    }

    update(): void {
        if (this.ready === true && this.space.isDown) {
            this.scene.start('GameScene');
        }
    }

    private fadeCheck(camera: any, progress: number): void {
        if (progress === 1) {
            this.ready = true;
        }
    }
}