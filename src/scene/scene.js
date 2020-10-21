import camera from "./camera"
import light from "./light"

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

    // 添加 light
    this.light = light
    this.light.init()

    this.axesHelper = new THREE.AxesHelper(100)
    this.instance.add(this.axesHelper)
    this.instance.add(this.camera.instance)
    for (let lightType in this.light.instances) {
      this.instance.add(this.light.instances[lightType])
    }
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance)
  }
}

export default new Scene()
