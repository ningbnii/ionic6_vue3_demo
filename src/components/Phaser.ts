import Phaser from 'phaser'

class SceneA extends Phaser.Scene {
  private balls: Array<any>
  private graphics1: any

  constructor() {
    super({
      key: 'SceneA',
    })
    this.balls = []
  }
  create() {
    this.graphics1 = this.add.graphics()
    this.graphics1.fillStyle(0x9966ff, 1)
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * this.cameras.main.width
      const y = Math.random() * this.cameras.main.height
      const a = Math.random() * 2 * Math.PI
      const ball = this.graphics1.fillCircle(x, y, a)
      ball.a = a
      this.balls.push(ball)
    }
  }
}

export default SceneA
