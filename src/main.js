/**
 * 游戏主函数
 */
import * as THREE from "../lib/three"
window.THREE = THREE
import game from "./game/game"

class Main {
  constructor() {}
  static init() {
    game.init()
  }
}

export default Main
