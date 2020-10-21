class Ground {
  constructor() {}

  init() {
    const groundGeometry = new THREE.PlaneGeometry(200, 200)
    // 与阴影相关 material
    const material = new THREE.ShadowMaterial({
      transparent: true,
      color: 0x000000,
      opacity: 0.3,
    })
    this.instance = new THREE.Mesh(groundGeometry, material)
    this.instance.rotation.x = -Math.PI / 2
    this.instance.position.y = -16 / 3.2
    this.instance.receiveShadow = true
  }
}

export default new Ground()
