import GameOverPage from "../pages/game-over-page"
import GamePage from "../pages/game-page"

class GameView {
  constructor() {}

  initGameOverPage(callbacks) {
    this.gameOverPage = new GameOverPage(callbacks)
    this.gameOverPage.init({
      scene: this.gamePage.scene,
    })
  }

  initGamePage(callbacks) {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }

  /**
   * Controller 调用
   */
  showGameOverPage() {
    this.gamePage.hide()
    this.gameOverPage.show()
  }
  showGamePage() {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }
  restartGame() {
    this.gamePage.restart()
  }
}

/**
 * 单例模式
 */
export default new GameView()
