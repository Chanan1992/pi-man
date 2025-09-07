const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scene: {
    preload,
    create,
    update
  }
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload() {
  // Een simpele cirkel als Pacman, later vervang je dit door sprites
  this.graphics = this.add.graphics();
}

function create() {
  // Maak een gele cirkel (Pacman)
  const graphics = this.add.graphics();
  graphics.fillStyle(0xffff00, 1);
  graphics.fillCircle(0, 0, 20);

  // Render texture van de cirkel
  const texture = graphics.generateTexture('pacman', 40, 40);
  graphics.destroy();

  player = this.physics.add.sprite(400, 300, 'pacman');
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-200);
  } else if (cursors.right.isDown) {
    player.setVelocityX(200);
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.setVelocityY(200);
  }
}
