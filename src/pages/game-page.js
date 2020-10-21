import { scene } from "../scene/index"
import Cuboid from "../block/cuboid"
import Cylinder from "../block/cylinder"
import ground from "../objects/ground"

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    this.scene = scene
    this.scene.init()

    this.ground = ground
    this.ground.init()

    this.addInitBlock()
    this.addGround()
    this.render()
  }

  show() {}

  hide() {}

  /**
   * 添加 cylinder cuboid 展示
   */
  addInitBlock() {
    const cuboidBlock = new Cuboid(-15, 0, 0)
    const cylinderBlock = new Cylinder(23, 0, 0)
    this.scene.instance.add(cylinderBlock.instance)
    this.scene.instance.add(cuboidBlock.instance)
  }

  /**
   * 添加 地面
   */
  addGround() {
    this.scene.instance.add(this.ground.instance)
  }

  render() {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }
}
