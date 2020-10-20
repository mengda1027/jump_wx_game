class Event {
  constructor(sender) {
    this._sender = sender
    this._listener = []
  }

  /**
   * 绑定
   * @param {function} callback
   */
  attach(callback) {
    this._listener.push(callback)
  }

  /**
   * 触发
   * @param {any} args
   */
  notify(args) {
    for (let i = 0; i < this._listener.length; i++) {
      this._listener[i](this._sender, args)
    }
  }
}

export default Event
