import camera from "./camera"

class Scene {
  constructor() {
    this.instance = null
  }

  init() {
    this.instance = new THREE.Scene()
    // 渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true, // 抗锯齿
      canvas,
      preserveDrawingBuffer: true, // 绘制缓存
    })
    // camera 添加到 scene 中
    this.camera = camera
    this.camera.init()

    this.axesHelper = new THREE.AxesHelper(100)
    this.instance.add(this.axesHelper)
    this.instance.add(this.camera.instance)
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance)
  }
}

export default new Scene()
