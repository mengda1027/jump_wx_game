export default class GameOverPage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init(options) {
    this.initGameoverCanvas(options)
  }

  initGameoverCanvas(options) {
    const aspect = window.innerHeight / window.innerWidth
    this.scene = options.scene

    this.canvas = document.createElement("canvas")
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    // 纹理
    this.texture = new THREE.Texture(this.canvas)
    // 根据 texture 生成 material
    this.material = new THREE.MeshBasicMaterial({ map: this.texture, transparent: true, side: THREE.DoubleSide })
    // 创建平面矩形
    this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
    // 生成mesh
    this.obj = new THREE.Mesh(this.geometry, this.material)
    this.obj.visible = false
    this.obj.position.z = 1
    // 围绕y轴旋转
    this.obj.rotation.y = Math.PI
    // 绘制图片
    this.context = this.canvas.getContext("2d")
    this.context.fillStyle = "#333"
    // 绘制矩形
    this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 200, 100)
    this.context.fillStyle = "#eee"
    this.context.font = "20px Georgia"
    // 绘制文字
    this.context.fillText("Game Over", (window.innerWidth - 200) / 2 + 50, (window.innerHeight - 100) / 2 + 55)
    this.texture.needsUpdate = true
    this.scene.instance.add(this.obj)
  }

  show() {
    this.obj.visible = true
  }

  hide() {
    this.obj.visible = false
  }
}
