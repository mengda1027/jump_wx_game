import { scene } from "../scene/index"

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    this.scene = scene
    this.scene.init()
    this.render()
  }

  show() {}

  hide() {}

  render() {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }
}
