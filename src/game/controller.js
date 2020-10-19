import gameView from "./view"
// import gameModel from "./model"

class GameController {
  constructor() {
    this.gameView = gameView
    this.gameModel = gameModel
  }

  /**
   * 显示游戏结束方法
   */
  showGameOverPage = () => {
    this.gameView.showGameOverPage()
  }

  /**
   * 重启游戏
   */
  restartGame = () => {
    this.gameView.restartGame()
  }

  /**
   * 初始化所有游戏页面
   */
  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage, // 游戏结束，显示结束
    }

    const gameOverPageCallbacks = {
      gameRestart: this.restartGame,
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }
}
