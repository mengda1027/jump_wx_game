import Event from "../utils/event"

class GameModel {
  constructor() {
    this.stage = ""
    // stage 改变时触发事件
    this.stageChanged = new Event(this)
  }

  getStage() {
    return this.stage
  }

  setStage(stage) {
    this.stage = stage
    this.stageChanged.notify({
      stage,
    })
  }
}

export default new GameModel()
