export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    console.log("game page init")
    var width = window.innerWidth
    var height = window.innerHeight

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    })
    var scene = new THREE.Scene()
    this.scene = scene
    var camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)

    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(window.innerWidth, window.innerHeight)

    var triangleShape = new THREE.Shape()
    triangleShape.moveTo(0, 100)
    triangleShape.lineTo(-100, -100)
    triangleShape.lineTo(100, -100)
    triangleShape.lineTo(0, 100)

    var geometry = new THREE.ShapeGeometry(triangleShape)
    var material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
    })
    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 1
    // scene.add(mesh)
    // 轴线观察helper
    const axesHelper = new THREE.AxesHelper(100)
    scene.add(axesHelper)

    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 0
    camera.lookAt(new THREE.Vector3(0, 0, 1))

    var currentAngle = 0
    var lastTimestamp = Date.now()

    var animate = function () {
      var now = Date.now()
      var duration = now - lastTimestamp
      lastTimestamp = now
      currentAngle = currentAngle + (duration / 1000) * Math.PI
    }

    var render = function () {
      animate()
      // 设置转轴中心
      mesh.rotation.set(0, currentAngle, 0)
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }

    render()
  }

  /**
   * 重启游戏
   */
  restart() {
    console.log("game page restart")
  }
}
