export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    console.log("game page init")
  }

  /**
   * 重启游戏
   */
  restart() {
    console.log("game page restart")
  }
}
