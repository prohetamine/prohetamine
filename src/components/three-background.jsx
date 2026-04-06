import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--colors-border);
  position: absolute;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
`

const ThreeBackground = () => {
  const wrapperRef = useRef()

  const [model, setModel] = useState(null)

  useEffect(() => {
    const timeId = setTimeout(async () => {
      const loader = new GLTFLoader();

      const model = (
          await new Promise(res => loader.load('./logo.glb', res))
      ).scene

      setModel(model)
    })

    return () => clearTimeout(timeId)
  }, [])

  useEffect(() => {
    const node = wrapperRef.current

    if (node && model) {
      const scene = new THREE.Scene()

      const camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      )
      camera.position.y = -0.015
      camera.position.z = 1.15

      const renderer = new THREE.WebGLRenderer({ antialias: false })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0xe8e8e1)
      node.appendChild(renderer.domElement)
          
      const light = new THREE.PointLight(0xffffff, 15, 110)
      light.position.set(0, 0, 111)
      scene.add(light)
      
      const ambientLight = new THREE.AmbientLight(0x404040, 1.5)
      scene.add(ambientLight)
      
      let mesh

      model.traverse((child) => {
        if (child.isMesh && !mesh) mesh = child
      })

      if (!mesh) return console.error('No mesh found')

      const geometry = mesh.geometry
      const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material

      const count = 300
          , radius = 1

      const instanced = new THREE.InstancedMesh(geometry, material, count)
      scene.add(instanced)

      const dummy = new THREE.Object3D()

      const goldenAngle = Math.PI * (3 - Math.sqrt(5))

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;

        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;

        dummy.position.set(x * radius, y * radius, z * radius)
        dummy.lookAt(0, 0, 0)
        dummy.rotateX(Math.PI / 2)
        dummy.updateMatrix()
        instanced.setMatrixAt(i, dummy.matrix)
      }

      let isCancel = false

      const animate = () => {
        if (!isCancel) {
          requestAnimationFrame(animate)
        }

        instanced.rotation.x += 0.0001
        instanced.rotation.y += 0.0001
        instanced.rotation.z += 0.0002

        const x = Math.cos(instanced.rotation.y) * 2;
        const y = Math.sin(instanced.rotation.y) * 2;

        light.position.set(x, y, 1)

        renderer.render(scene, camera)
      }
      
      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        isCancel = true
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [model, wrapperRef])

  return (
    <Wrapper ref={wrapperRef} />
  )
}

export default ThreeBackground